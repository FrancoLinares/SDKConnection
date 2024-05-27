const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const root = path.resolve(__dirname, '..');
console.log(
  '🚀 ~ root:',
  path.resolve(
    __dirname,
    '../nonSwiftly/react-native-tab-view/metro.config.js',
  ),
);
const defaultConfig = getDefaultConfig(__dirname);
console.log('🚀 ~ defaultConfig:', defaultConfig);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [root],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

console.log('config', config);

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
