
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    var street = $("#street").val();
    var city = $("#city").val();  
    var address = street +','+ city;

    $greeting.text('So, you want to live at ' + address + '?');

    var streetView = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address;
    $body.append('<img class="bgimg" src="' + streetView +'">');

    var nytimesKey = "&sort=newest&api-key=937856a24e65c088446cc0d97b63a8f9:11:73309782"
    var nytimesAPI = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+city+nytimesKey;

    $.getJSON( nytimesAPI, function (data) {
        console.log(data);      
        $nytHeaderElem.text('New York Times Article About ' + city);
        
        articles = data.response.docs;
        $.each( articles, function (key, value) {
            var link = value.web_url;
            var headline = value.headline.main;
            var snip = value.snippet;
            //console.log(link, headline);
            $nytElem.append("<li class='article'><a href="+link+">"+headline+"</a><p>"+snip+"</p></li>");
        });  
    }).error(function(e){
        $nytHeaderElem.text('New York Times Article Could Not Be Loaded');
    })

    return false;
};

$('#form-container').submit(loadData);
