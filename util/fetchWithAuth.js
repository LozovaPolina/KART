

let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (callback) => {
  refreshSubscribers.push(callback);
};

const onRefreshed = () => {
  refreshSubscribers.forEach((callback) => callback());
  refreshSubscribers = [];
};

/**
 * A fetch wrapper that automatically handles 401 Unauthorized by
 * trying to refresh the token using a refresh endpoint.
 *
 * @param {string} url - API endpoint URL
 * @param {object} options - fetch options (headers, method, body, etc)
 * @param {function} updateTokens - optional callback to update access token in app state
 * @param {function} forceLogout - callback to force logout user on refresh failure
 *
 * @returns {Promise<Response>} - fetch Response object
 */
const fetchWithAuth = async (url, options = {}, updateTokens, forceLogout) => {
  const fetchOptions = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // VERY IMPORTANT: send cookies automatically
  };

  // First attempt with current cookies
  let response = await fetch(url, fetchOptions);
  if (response.status !== 401) return response;

  // If 401 and already refreshing, wait for the new token and retry
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      subscribeTokenRefresh(async () => {
        try {
          const retryResponse = await fetch(url, fetchOptions);
          resolve(retryResponse);
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  // Not refreshing yet: start refresh process
  isRefreshing = true;
  try {
    const refreshResponse = await fetch("/api/auth/token/refresh/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include', // send cookies for refresh
    });

    if (!refreshResponse.ok) {
      forceLogout?.();
      throw new Error("Token refresh failed");
    }

    const data = await refreshResponse.json();

    // If backend returns new access token in JSON (optional),
    // update app state with it
    if (updateTokens && data.access) {
      await updateTokens(data.access);
    }

    // Notify all waiting requests
    onRefreshed();

    // Retry original request
    return await fetch(url, fetchOptions);
  } catch (err) {
    forceLogout?.();
    throw err;
  } finally {
    isRefreshing = false;
  }
};

export default fetchWithAuth;
