function hopfologieRouter() {
    let websitePath = window.location.pathname;
    loadContent(websitePath.substring(1));
}


function loadContent(routing) {
    let loadFile = null
    switch (routing) {
        case "home":
            loadFile = "assets/html/home.html";
            break;
        case "podcast":
            loadFile = "assets/html/podcast.html";
            break;
        case "about":
            loadFile = "assets/html/ueber_uns.html";
            break;
        case "contact":
            loadFile = "assets/html/kontakt.html";
            break;
        case "impressum":
            loadFile = "assets/html/impressum.html";
            break;
        case "privacy":
            loadFile = "assets/html/datenschutz.html";
            break;
        default:
            loadFile = "assets/html/home.html";
            break;
    }
    $.get(loadFile, function(data){
        $('#content').html(data);
    })
}
