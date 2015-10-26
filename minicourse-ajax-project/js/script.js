
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
    var address = street +', ' + city;

    $greeting.text('So, you want to live at ' + address + '?');

    var streetView = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address;

    $body.append('<img class="bgimg" src="' + streetView +'">');

    return false;
};

$('#form-container').submit(loadData);
