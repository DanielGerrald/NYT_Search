$("#search-button").on("click", function (e) {
    e.preventDefault();

    var search = $("#search-parameters").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    var recordsNum = $("#number-records").val();
    
    if (startYear === "") {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=FPVcUJj8WvANRstLbU7B8rBMHW8vUA5s&limit=" + recordsNum + "&facet_fields=source&facet=true";
    } else {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=FPVcUJj8WvANRstLbU7B8rBMHW8vUA5s&limit=" + recordsNum + "&facet_fields=source&facet=true&begin_date=" + startYear + '0101' + "&end_date=" + endYear + '1231';
    }
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
            //obtain response data that user selects (console.log to see how it is formatted)
            $("#articles").append($("<h3>").text(response.response.docs[0].headline.main));
            $("#articles").append($("<p>").text(response.response.docs[0].snippet));
        });
});
$("#clear-results").on("click", function(){
    $("#articles").html("");
});