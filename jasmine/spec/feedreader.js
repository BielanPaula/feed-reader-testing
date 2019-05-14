/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

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
     *
     */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        lenght = allFeeds.length;

        it('has a URL defined and this URL is not empty', function () {
            for (var i = 0; i < length; i++) {
                expect(allFeeds[i].url).toBeDefined(); //URL defined
                expect(allFeeds[i].url.length).not.toBe(0); //URL is not empty
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has a name defined and that the name is not empty', function () {
             for (var i = 0; i<length; i++) {
                 expect(allFeeds[i].name).toBeDefined(); //name defined
                 expect(allFeeds[i].name.length).not.toBe(0); //name is not empty
             }
        });

    });


    /* TODO: Write a new test suite named "The menu" */

    /*
     *
     */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true); //menu is hidden by default
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('is menu changes visibility when the menu icon is clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy(); //menu display when clicked

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy(); //menu hide when clicked again
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    /*
     *
     */

    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function (done) {
            loadFeed(0, done); //the loadFeed function is called and completes its work
        });

        it('is existing', function () {
            expect($('.feed').has('.entry').length).not.toBe(0); //there is at least a single .entry element within the .feed container
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    /*
     *
     */

    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var initialFeed;

        beforeEach(function (done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html(); //load old feed
                loadFeed(1, done); //load newer feed
            });
        });

        it('is different from initial feed', function() {
            expect($('.feed').html()).not.toBe(initialFeed); //new feed is loaded by the loadFeed function that the content actually changes
        });

    });
}());
