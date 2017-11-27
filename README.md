# Frontend-Nanodegree-Feedreader
Feed reader is a web application presenting the user with popular feeds from four different topics/three different websites:
Udacity, CSS Tricks, and HTML5 Rocks. The information is fetched in real time, so we are guaranteed to always have the latest information.This application has been developed in a test-driven style, meaning our code is has to pass several test before it is finalized/launched for production. The idea of this project is to show the user the results of test-driven development approach, through the use of the javascript library Jasmine.js, [found here](https://jasmine.github.io/).

# Getting Started - Running the Application

## How do I run the application?
Under the root folder, launch index.html with your favorite browser. 

## How do I use it?
After your application launches, some feeds from the Udacity Blog should appear after a few seconds. To the left of the top menu, is your hamburger icon. When clicked, a menu should slide from the left with the different category feeds to choose from. Click on any feed category you'd like and the content should update with new feeds from that category. 

# Getting Started - Running The Jasmine.js Tests
At the bottom of the page you should see the jasmine log, showing the number of specs and any which may have failed:
None should have failed. 


# Jasmine JS
## New to Jasmine?
To learn more about jasmine js, [go here](https://jasmine.github.io/).

## Where are the tests suites and tests located?

**root/jasmine/spec/feedreader.js**

## Tests performed

### Test Suite - Rss Feeds
Tests if our application contains the necessary api information in order to update
the content correspondingly.

**How can I test if it works?**
Try deleting the value for the URL or name property in any of the objects contained in the allFeeds array.
Try to set any of them to the empty string. An error in the Jasmine log should appear indicating this.

### Test Suite - menu
Makes sure our slide menu works properly,when clicking and first loading the page. 

**How can I test if it works?**
try changing the value of the transform3d property, of the menu-hidden class.

### Test Suite - Initial Entries
Test that our application is loaded with the necessary information from our APIs
so that we can maximize user interaction.

**How can I test if it works?**
try changing the url of the second item in the allFeeds array.

### Test Suite - New Feed Selection
Test if our application's content changes when our response from the feeds API returns.

**How can I test if it works?**
Try changing the URL by adding any extra letter or just any webservice that doesn't return content.
An error message should be shown at the jasmine log.









