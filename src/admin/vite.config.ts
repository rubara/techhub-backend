import { mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ['api.techhub.strategyinrush.com', 'localhost', '127.0.0.1', '192.168.0.3'],
    },
  });
};
