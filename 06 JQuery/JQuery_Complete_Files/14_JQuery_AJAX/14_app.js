$('#load-images-btn').click(function() {

    // Create a AJAX Using JQuery
    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/3c6896638af3ddb93ecf978b3e002b32/raw/7c34b13fec4997e0847d3481145d58dbc8190615/16112018.json',function(data) {
        var contactsList = data.contacts;
        var imageSelector = '#image';
        var nameSelector = '_name';
        for(var index in contactsList){
            var imageSource = contactsList[index].picture.large;
            var fullName = contactsList[index].name.first + " " + contactsList[index].name.last;
            var num = parseInt(index) + 1;
            $(imageSelector + (num)).attr('src',imageSource);
            $(imageSelector + num + nameSelector).text(fullName);
        }
    });
});