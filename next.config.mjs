import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    domains: ["localhost"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
