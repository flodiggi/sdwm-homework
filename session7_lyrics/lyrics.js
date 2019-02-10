

var searchLyrics = function (term){
    $('#search-form2').submit(function(e){
        e.preventDefault()
        $('#submit2').addClass('colored');
        var searchTerm2 = $('#search2').val()
        fetch('https://api.lyrics.ovh/v1/'+term+'/'+searchTerm2).then(function(response) {
            return response.json();
            })
            .then(function(myJson) {
            let content = JSON.parse(JSON.stringify(myJson))
            for (let key in content){
                let lyrics = $('<div>').text(content[key]);
                lyrics.addClass('header');
                $('#lyricscontent').append(lyrics);
            };
            });  
        });
    };


$('#search-form').submit(function(e){
    e.preventDefault()
    var searchTerm = $('#search').val()
    searchLyrics(searchTerm)
    $('#search-form2').addClass('display');
    $('#search-form2').removeClass('hidden');
    $('#submit').addClass('hidden');
    }); 


     

    

   


