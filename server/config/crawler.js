'use strict';

// The crawler
var Crawler = require('simplecrawler');

// Call the crawler constructor
var solSearch = new Crawler('www.jobber.ro');

// Configure the crawler
solSearch.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36';
solSearch.maxConcurrency = 1;

solSearch.maxResourceSize = 512000;
solSearch.downloadUnsupported = false;
solSearch.acceptCookies = false;

var PDF = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.pdf$/i);
});

var GIF = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.gif$/i);
});

var PNG = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.png$/i);
});

var JPG = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.jpg$/i);
});

var CSS = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.css$/i);
});

var JS = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.js$/i);
});

// What to do on certain events
solSearch.on('fetchcomplete',function(queueItem, responseBuffer, response) {
    console.log('I got %s',queueItem.url);
    console.log('It was a %s resource',response.headers['content-type']);

    // Do something with the data in responseBuffer
});

solSearch.on('crawlstart',function() {
    console.log('Oh why do I bother... Alright, I started the crawling.');
});

// Initialize the crawler
solSearch.start(PDF, GIF, PNG, JPG, CSS, JS);