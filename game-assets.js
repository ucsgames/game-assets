if (Meteor.isServer) {
    GameContent = {
        'buildings': EJSON.parse(Assets.getText('i18n/buildings.json'))
    };
}
Schema = {};