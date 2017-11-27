/**************************************************************
Name: feedreader.js
Author: Udacity.com
Edited By: Felipe Boyd
Date: 11.26.2017
Description:
This is the spec file that Jasmine will read and contains
all of the tests that will be run against your application.
***************************************************************/


/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    /*

    */

/**************************************************************
Test Suite: RSS Feeds
Description:
This is our first test - it tests to make sure that the
allFeeds variable has been defined and that it is not
empty. 

Test 1: makes sure our allFeeds array is not empty or undefined 

Test 2: Makes sure our feed objects inside allFeeds all have a 
'url' property defined, and it's not equal to the empty
string.

Test 3: Makes sure our feed objects inside allFeeds all have a 
'name' property defined, and it's not equal to the empty
string.
***************************************************************/
    describe('RSS Feeds', function() {
        /* 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */



         it('URLs are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('names are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
         });
    });



/**************************************************************
Test Suite: The menu
Description:
Tests all features involving our slide menu.



Test 1:ensures the menu element is hidden when the page initially loads.

Test 2: ensures the menu changes visibility when the menu icon is clicked,
hides back when clicked again.

***************************************************************/

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        var menu = $('.slide-menu');
        var defaultLeftPosition, leftDistance;

        //store our default position before running our tests.

        beforeEach(function(){
            defaultLeftPosition = -192;
            leftDistance = menu.position().left;
        });

         it('should be hidden by default', function(){
            expect(leftDistance).toBe(defaultLeftPosition);
        });


        it('should toggle visibility when clicked', function(){
           expect($(document.body).hasClass('menu-hidden')).toBe(true);
           $('.icon-list').click();
           expect($(document.body).hasClass('menu-hidden')).toBe(false);
           $('.icon-list').click();
           expect($(document.body).hasClass('menu-hidden')).toBe(true);       
        });
        

        
    });

/**************************************************************
Test Suite: Initial Entries
Description:
Tests that our page is loaded with entries.

Test 1: Makes sure that the number of elements with class entry
is greater than 0.

***************************************************************/



    describe("Initial Entries", function(){

        var container = $('.feed');
        var next;

        //Test by passing one element from our allFeeds array into the loadFeed function.
         beforeEach(function(done){
            loadFeed(1, done);
         });

         it("should contain at least a single entry", function(){
            var entries = container.find('.entry');
            expect(entries.length).toBeGreaterThan(0);
         });
    });
        


/**************************************************************
Test Suite: New Feed Selection
Description:
Tests that our DOM changed after making our API calls 

Test 1: compares our container element before and after the ajax call,
making sure our content changed


***************************************************************/
    describe("New Feed Selection", function(){

        var container = $('.feed');
        var initialContent; 
        var changedContent;



         beforeEach(function(done){
           loadFeed(1, done);          /*
            loadFeed(1, done);
            initialContent = container.html();
            console.log("initial content" + initialContent);
            loadFeed(2, done);
            changedContent = container.html();
            console.log("change content" + changedContent);*/
           
         });

         it("should be able to change its content", function(done){
         	initialContent = container.html();
         	console.log("init: "+initialContent);
         	loadFeed(2, function(){
         		changedContent = container.html();
         	});
         	
         	console.log("changed:"+changedContent);

            expect(initialContent).not.toBe(changedContent);

         });


    });

    
}());
