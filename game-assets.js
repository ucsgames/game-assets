if (Meteor.isServer) {
    GameContent = {
        'buildings': EJSON.parse(Assets.getText('i18n/buildings.json'))
    };
}
Schema = {};

Schema.CoreUser = new SimpleSchema({
    username: {
        type: String,
        optional: false,
        regEx: /^[^.?!@~_]+$/,
        min: 3,
        max: 20
    }
});

Schema.CoreEmail = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        optional: false
    }
});

Schema.UserId = new SimpleSchema({
    userId: {
        type: String,
        optional: false
    }
});

Schema.DoublePassword = new SimpleSchema({
    password: {
        type: String,
        optional: false,
        min: 6
    },
    passwordAgain: {
        type: String,
        optional: false,
        min: 6
    }
});

Schema.Progress = new SimpleSchema({
    progress: {
        type: Array,
        optional: true
    },
    "progress.$": {
        type: Object,
        optional: true
    },
    "progress.$.startedAt": {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isInsert || this.isUpdate) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        }
    },
    "progress.$.finishAt": {
        type: Date,
        optional: false
    },
    "progress.$.count": {
        type: Number,
        optional: false
    }
});

Schema.i18n = new SimpleSchema({
    i18n: {
        type: Object,
        blackbox: true,
        optional: true
    }
});