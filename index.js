function jsonFlickrFeed(data) {
	var items = data.items.slice(0,12);
	items.forEach(function(item)
	{
		console.log(item.link,item.media.m,item.title);

		var elem = $('<div class="picture"><h3></h3><a target="_blank"><img/></a></div>');
		elem.find("h3").text(item.title || "No title");
		elem.find("img").attr({src: item.media.m});
		elem.find("a").attr({href:item.link})
		$("#searchResults").append(elem);
	});
}

$("#searchForm").on('submit',function()
{
	$("#searchResults").empty();
	var tags=$(".vvodField").val();
    tags=tags.split(' ');
	var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags="+tags+"&tagmode=any&format=json";
	$.ajax(url, {dataType: "jsonp"});

	return false;
});


