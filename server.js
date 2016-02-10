var express = require('express');
var overRide = require('method-override');
var bodyParser = require('body-parser');
var PORT = process.env.NODE_ENV || 6669;
var connection = require('./config.js').localConnect();
connection.connect();