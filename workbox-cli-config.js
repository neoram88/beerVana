module.exports = {
  maximumFileSizeToCacheInBytes: 6291456,
  globDirectory: 'www/',
  globPatterns: [
    '**/*.{html,json,js,css}'
  ],
  swSrc: 'src/sw.js',
  swDest: 'www/sw.js',

  globIgnores: [
    '../workbox-cli-config.js'
  ]
};
