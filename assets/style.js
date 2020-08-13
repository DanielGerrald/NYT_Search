var search = "Abraham Lincoln" //$("#search-parameters");
var starYear = $("#start-year");
var endYear = $("#end-year");
var recordsNum = $("#number-records")
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=FPVcUJj8WvANRstLbU7B8rBMHW8vUA5s&limit=5";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response){
        console.log(response);
        //obtain response data that user selects (console.log to see how it is formatted)
        
    });