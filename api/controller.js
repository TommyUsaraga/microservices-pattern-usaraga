'use strict';

var properties = require('../package.json')
var distance = require('../service/distance');
var onlineOrdering = require('../service/Online Ordering.json');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },

    oD: function(req, res) {
        var ODInfo = {
            name: onlineOrdering.name,
            description: onlineOrdering.description
        }
        res.json(ODInfo);
    },
};

module.exports = controllers;