var Crawler = require('crawler').Crawler; // https://github.com/sylvinus/node-crawler
var S = require('string');
var fs = require('fs');

// A list of some patterns that will show up in webcam URLs
var patterns = ['jpg/image.jpg\?r='
	, 'mjpg/video.mjpg'
	, 'record/current.jpg'
	, 'cgi-bin/faststream.jpg'
	, 'oneshotimage.jpg'
	, 'SnapshotJPEG'
	, 'nphMotionJpeg'].join('|');
var regex = new RegExp( patterns ); 
var crawled = []; // This will contain all of the URLs that we've already crawled

var onContent = function(error, result, $) {
	if(error) {
		process.stdout.write('!');
		return;
	} 

	// Provide some feedback that we're still running
	process.stdout.write('.');
	crawled.push( result.uri );
	if(crawled.length % 100==0)
		console.log('\n\n'+crawled.length+' pages crawled\n');

	// Loop through all of the links (<a> tags) in the document and add them to the queue
	// There are some weird errros thrown here, so throw it in a try/catch
	// Perhaps it's https://github.com/sylvinus/node-crawler/issues/69
	try {
		$('a').each(function(index, a) {

			// as long as it's an http uri && we haven't already crawled them
			if(S(a.href).startsWith('http') && crawled.indexOf(a.href) == -1) {

				// I the href matches one of our patterns, write it to a file
				if(a.href.match(regex))
					fs.appendFileSync('./matches.txt', a.href+'\n');
			
				c.queue( a.href );
			}
		});
	} catch (err) {
	    console.log(err);
	}
} 


// Kick off the craler
var c = new Crawler({
	'maxConnections': 20,
	'timeout': 10000,
	'callback': onContent
});

// Add some initial URLs to crawl.
c.queue(['https://www.google.com/search?q=webcam', 
	'https://www.google.com/search?q=public+webcams',
	'https://www.google.com/search?q=open+webcams',
	'https://www.google.com/search?q=network+cameras']);