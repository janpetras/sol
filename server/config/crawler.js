// The crawler
var Crawler = require("simplecrawler");

Crawler.crawl("http://www.jobber.ro/")
    .on("fetchcomplete",function(queueItem){
        console.log("Completed fetching resource:",queueItem.url);
    });