module.exports = {
  name: 'store-app-store-app',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/store-app/store-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
