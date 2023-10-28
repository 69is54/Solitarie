/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/', // Adjust this path as needed
            outputPath: 'static/', // Adjust this path as needed
            name: '[name].[ext]',
            esModule: false, // Important for audio files
          },
        },
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  