Package.describe({
  name: 'game-assets',
  version: '0.0.1',
  summary: 'Add localized initial content to Sigurvia',
  git: 'https://github.com/ucsgames/game-assets.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use("ejson");
  api.use("aldeed:simple-schema@1.3.2");
  api.addFiles('game-assets.js');
  api.addAssets('i18n/buildings.json', 'server');
  api.export('GameContent', 'server');
  api.export('Schema');
});