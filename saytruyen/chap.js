function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".pictures img");
    var imgs = [];
    for (var i = 0; i < el.size(); i++) {
        var link = el.get(i).attr("src");
        if (!link.startsWith("http")) {
            link = "https://saytruyen.com" + link;
        }
        imgs.push(link)
    }
    return Response.success(imgs);
}