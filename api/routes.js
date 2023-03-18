'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
    app.route('/OrderOnline')
       .get(controller.oD);
    app.route('/ChatService')
       .get(controller.oD);
    app.route('/Notification')
       .get(controller.oD);
};