$("#search-button").on("click", function (e) {
    e.preventDefault();

    var search = $("#search-parameters").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    var recordsNum = $("#number-records").val();
    
    if (startYear === "") {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=FPVcUJj8WvANRstLbU7B8rBMHW8vUA5s&facet_fields=source&facet=true";
    } else {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=FPVcUJj8WvANRstLbU7B8rBMHW8vUA5s&facet_fields=source&facet=true&begin_date=" + startYear + '0101' + "&end_date=" + endYear + '1231';
    }
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
            //obtain response data that user selects (console.log to see how it is formatted)
            for (var i=0;i < recordsNum; i++){
                $("#articles").append(($("<h3>").text(response.response.docs[i].headline.main)).attr("class", " rounded text-center bg-primary text-black"));
                $("#articles").append($("<p>").text(response.response.docs[i].snippet));
            }
                
        });
});
$("#clear-results").on("click", function(){
    $("#articles").html("");
    $("#search-parameters").val("");
    $("#start-year").val("");
    $("#end-year").val("");
    $("#number-records").val("");
});

//Very nice