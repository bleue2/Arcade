document.addEventListener('DOMContentLoaded', function() {

            
    document.querySelectorAll('div').forEach(function(div) {
        div.onmouseover = function() {
            document.getElementById('temp').style.backgroundColor = "blue";
        };
    });

});