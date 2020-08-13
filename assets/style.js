//var search = $("userInput");
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "n&api-key=FPVcUJj8WvANRstLbU7B8rBMHW8vUA5s&limit=5";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response){
        //obtain response data that user selects (console.log to see how it is formatted)
        
    });