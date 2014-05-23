'use strict';

// The crawler
var Crawler = require('simplecrawler');

// Call the crawler constructor
var solSearch = new Crawler('www.jobber.ro');

// Configure the crawler
solSearch.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36';
solSearch.maxConcurrency = 5;
solSearch.interval = 250;
solSearch.maxResourceSize = 512000;
solSearch.downloadUnsupported = false;
solSearch.acceptCookies = false;
solSearch.ignoreWWWDomain = true;

// Set content-type exclusions by extension
var PDF = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.pdf$/i);
}),
	GIF = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.gif$/i);
}),
	PNG = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.png$/i);
}),
	JPG = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.jpg$/i);
}),
	CSS = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.css$/i);
}),
	JS = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.js$/i);
}),
	ICO = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.ico$/i);
}),
	EXE = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.exe$/i);
}),
	DMG = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.dmg$/i);
}),
	RPM = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.rpm$/i);
}),
	DEB = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.deb$/i);
}),
	DOC = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.doc$/i);
}),
	DOCX = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.docx$/i);
}),
	PPT = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.ppt$/i);
}),
	PPTX = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.pptx$/i);
}),
	ODT = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.odt$/i);
}),
	ODP = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.odp$/i);
}),
	CSV = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.csv$/i);
}),
	SVG = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.svg$/i);
}),
	MP3 = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.mp3$/i);
}),
	AVI = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.avi$/i);
}),
	WMV = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.wmv$/i);
}),
	MP4 = solSearch.addFetchCondition(function(parsedURL) {
    return !parsedURL.path.match(/\.mp4$/i);
});

var exclude = [PDF, GIF, PNG, JPG, CSS, JS, ICO, EXE, DMG, RPM, DEB, DOC, DOCX, PPT, PPTX, ODT, ODP, CSV, SVG, MP3, AVI, WMV, MP4];

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
solSearch.start(exclude);