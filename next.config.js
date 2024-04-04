// eslint-disable-next-line @typescript-eslint/no-var-requires
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

const [protocol, hostWithPort] = process.env.NEXT_PUBLIC_FILE_HOST.split("://");
const [hostname, port] = hostWithPort.split(":");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol,
        hostname,
        port,
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
