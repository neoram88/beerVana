const webpackConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config');
const webpack = require('webpack');

const ENV = process.env.IONIC_ENV;
const envConfigFile = require(`./config-${ENV}.json`);
const workboxPlugin = require('workbox-webpack-plugin');
let path=webpackConfig.dev.output.path;
console.log(envConfigFile.SERVICE_ENDPOINT);
console.log(envConfigFile);
webpackConfig.dev.plugins.push(
    new webpack.DefinePlugin({
        webpackGlobalVars: {
            SERVICE_ENDPOINT: JSON.stringify(envConfigFile.SERVICE_ENDPOINT),
        }
    })
);
webpackConfig.prod.plugins.push(
    new webpack.DefinePlugin({
        webpackGlobalVars: {
            SERVICE_ENDPOINT: JSON.stringify(envConfigFile.SERVICE_ENDPOINT),
        }
    })
);