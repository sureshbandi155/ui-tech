//
function getAJAX() {

    // Create an AJAX Request
    var http = new XMLHttpRequest();

    // Prepare the AJAX request
    http.open('GET','persons.xml',true);

    // Send the AJAX Request
    http.send();

    // Process the AJAX
    http.onreadystatechange = function() {
        // server is ready with the Response
        if(http.readyState === 4 && http.status === 200){
            // Parse the XML Data
            parseTheXML(http);
        }
    };

}

// XML Parsing
function parseTheXML(http) {
    var xmlFile = http.responseXML;
    var imageGalleryDiv = document.querySelector('#image-gallery-div');
    var theHTMLImageStr = '';
    var contactList = xmlFile.querySelectorAll('contacts');
    for(var i=0; i<contactList.length; i++){
        var source = contactList[i].childNodes[21].childNodes[1].textContent;
        theHTMLImageStr += '<img src="' + source +  '">' + '\n';
    }
    imageGalleryDiv.innerHTML = theHTMLImageStr;
}