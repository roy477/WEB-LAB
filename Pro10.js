document.addEventListener('DOMContentLoaded', function() {
     // Task a: Use AJAX to load text content without jQuery  
document.getElementById('loadPlainText') 
.addEventListener('click', function() {  
var xhr = new XMLHttpRequest();  
xhr.open('GET', 'textfile.txt', true); 
 xhr.onload = function() { 
 if (xhr.status === 200) {  
document.getElementById('plainTextContent').textContent = xhr.responseText;  
} 
 else { document.getElementById('plainTextContent').textContent = 'Error loading text.';  
}  
}; 
 xhr.send(); 
 });  
// Task c: Use getJSON() with jQuery to load JSON data  
document.getElementById('loadJSON').addEventListener('click', function() {  
$.getJSON('data.json', function(data) { 
 var content = '<ul>';  
data.forEach(function(item) {  
content += '<li>' + item.name + ': ' + item.value + '</li>'; });  
content += '</ul>'; 
 document.getElementById('jsonContent').innerHTML = content; }) 
.fail(function() { 
 document.getElementById('jsonContent').textContent = 'Error loading JSON.';  
});  
}); 
 });