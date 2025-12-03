$(document).ready(function() { 
    // Task b: Use AJAX to load text content with jQuery 
    $('#loadJQueryText').click(function() { 
        $.ajax({ 
            url: 'textfile.txt', 
            method: 'GET', 
            success: function(data) { 
                $('#jqueryTextContent').text(data); 
            }, 
            error: function() { 
                $('#jqueryTextContent').text('Error loading text.'); 
            } 
 }); 
    }); 
 
    // Task c: Use getJSON() with jQuery to load JSON data 
    $('#loadJSON').click(function() { 
        $.getJSON('data.json', function(data) { 
            var content = '<ul>'; 
            data.forEach(function(item) { 
                content += '<li>' + item.name + ': ' + item.value + '</li>'; 
            }); 
            content += '</ul>'; 
            $('#jsonContent').html(content); 
        }).fail(function() { 
            $('#jsonContent').text('Error loading JSON.'); 
        }); 
    }); 
}); 