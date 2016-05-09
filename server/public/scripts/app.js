$(document).ready(function(){
  var muArray = [];
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        muArray = data;

        console.log(data);
      }
    });
});

function getCurrentIndex(){
  for (i = 0; i < muArray.length; i++);
  currentIndex = [i];
console.log(currentIndex);
}


/*Anthony's code
function appendPerson(){
       $('.container').fadeOut("slow", function(){
         $('.container').children().remove();
         $('.container').append('<p>Name: ' + data.mu[currentIndex].name);
         $('.container').append('<p>Git Username: ' + data.mu[currentIndex].git_username);
         $('.container').append('<p>Shoutout: ' + data.mu[currentIndex].shoutout);
        $('.container').fadeIn("slow");
     });
   }
*/
