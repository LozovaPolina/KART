import { API_URL } from "../data/url";

async function updatePersonalDetails(details) {
  try {
    const response = await fetch(API_URL + "/users/personal-details/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(details),
    });

    const data = await response.json();

    if (!response.ok) {
      const message = data?.detail || "Unknown server error";
      throw new Error(message);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default updatePersonalDetails;
