$(document).foundation();

$(function(){

    $.ajax({
      method : "GET",
      url : "http://192.168.1.107:8080/articles",
      success : function(data){
        data.forEach(function(value, index){
          $("#articles").append(
            "<div class='small-12 medium-6 columns article' style='background-image:url("+ value.image +"); background-size:cover'>"
            +"<h5>"+value.title+"</h5>"

            +"<p>"+ value.date +"</p>"
            +"</div>"
            );
        });
      },
      error: function(error) {
        alert("Error In Getting Articles");
        }
     });
});

$(function(){

  $(".success").click(function(e){

    e.preventDefault();

    var image1 = $("form input[name='image']").val();
    var url1 = $("form input[name='url']").val();
    var title1 = $("form input[name='title']").val();

    $.ajax({

      method : "POST",
      url : "http://192.168.1.107:8080/articles",
      data : {username : "xinlai", image : image1, url : url1, title : title1},
      success : function(data){

        window.location.reload();

      },
      error: function(error) {
        alert("Error In Adding Articles");
        }
     });
  });
});

$(function(){
    $("#search").click(function(){
        var words = $("input[type='search']").val();
        $.get('http://localhost:8080/search/' + words, function(data) {

            if(date.length == 0){

              $("#articles").html("No Result Found");

            }else{

              data.forEach(function(value, index){
                $("#articles").append(
                  "<div class='small-12 medium-6 columns article' style='background-image:url("+ value.image +"); background-size:cover'>"
                  +"<h5>"+value.title+"</h5>"

                  +"<p>"+ value.date +"</p>"
                  +"</div>"
                   );
               });
            }
        }).fail(function(){
              alert("Error In Searching Articles");
        });
    })
})
