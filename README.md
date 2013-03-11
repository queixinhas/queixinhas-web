Queixinhas Web Client

js application built with backbone (and require, jquery, underscore and mustache)

application is currently structured in the following (ATTN: always-changing)
main.html is the single page

main.js - contains the require.js configuration and is the entry point
app.js - initializes the application, by setting up the main view elements (map and sidepanel) and delivers control to the router
router.js - functions as a classic controller in mvc - retrieve the necessary data and render the view; for our use case, this seems to be the best approach (for now)

views/map.js handles operations in the (g)map
views/sidepanel.js handles operations in the sidepanel
