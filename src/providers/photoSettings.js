"use strict";

export default class PhotoSettingsProvider {
    static getPhotoSettings() {
        return fetch("http://bcinarli.com/experiments/featured/featured.json").then( data => {
            return data.json().then(data => {
                const generalSettings = data.settings,
                photos = data.content;

                photos.forEach( photo => {
                let photoSetting = {};
                // Override general settings with photo specific ones
                Object.assign(photoSetting, generalSettings, photo.settings);
                photo.settings = photoSetting;
            });

            return data.content;
            });
        });
    }
};
