export const serverConfig = {
  hostname: process.env.HUB_HOST || 'localhost',
  port: parseInt(process.env.HUB_PORT, 10) || 4444,
};
