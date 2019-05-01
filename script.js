$('button').click(function(){
var feeling = $(".mood").val();
$("mood").empty();
   
   if(feeling==="happy") {
    happy();
}
    else if(feeling==="sad") {
     sad();
}
      else if(feeling==="angry") {
     angry();
}
         else if(feeling==="disappointed") {
     dissapointed();
}
           else if(feeling==="jimmy") {
    jimmy();
}
});

var happyPics = [
    "https://thumbs.gfycat.com/FineDampGecko-size_restricted.gif",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/193/375/5f7.jpeg",
    "https://memegenerator.net/img/instances/82055940.jpg",
    ];

var sadPics = [
    "https://i.ytimg.com/vi/oK1WC6liU8o/maxresdefault.jpg",
    "https://i.kym-cdn.com/photos/images/newsfeed/000/901/701/e98.jpg",
    "https://em.wattpad.com/f56e3cadaca60ee1bfd4ed1171371dd0a41b9a9c/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6d576c5f5472663567624d474e513d3d2d3532353236363234352e313530633030306132336136616665643237373834343430343034382e6a7067?s=fit&w=720&h=720",
    ];

var angeryPics = [
    "https://www.picsbud.com/thumbs/NmQjBHSTSuegg4IGeTUpjUSJqYLFThclkkqT-4GhibbO89TytvLmprkVO4nJj1aJZ-FE2-pSpXu7sprFjXizag.jpg",
    "https://thumbs.gfycat.com/FrequentNippyCleanerwrasse-small.gif",
    "http://3.bp.blogspot.com/-0ERoz3NRsBU/UGUJwLdmtZI/AAAAAAAAAUU/PLCaR8NBdnM/s1600/2637957_o.gif",
    ];

var disapointedPics = [
    "https://www.snopes.com/tachyon/2016/12/tom-and-jerry.jpg?resize=865,452",
    "https://r.hswstatic.com/w_907/gif/84f682d92c8851f2f47ffc0fcc05a211-mark.jpg",
    "https://media.giphy.com/media/U4VXRfcY3zxTi/giphy.gif",
    ];



















function happy(){
    $(".mood").val('');
    $(".image").empty();
    happyPics.forEach(function(happymood){
    $(".image").append("<img src=" + happymood + ">");
    });
    $(".message").html("You Are A Happy Boi");
    $("body").css("background-color", "gold");
    }
function sad(){
    $(".mood").val('');
    $(".image").empty();
    sadPics.forEach(function(sadmood){
    $(".image").append("<img src=" + sadmood + ">");
    });
    $(".message").html("Aww, You are sad");
       $("body").css("background-color", "#4b0082");
    }
function angry(){
    $(".image").empty();
    $(".mood").val('');
    angeryPics.forEach(function(angerymood){
    $(".image").append("<img src=" + angerymood + ">");
    });
    $(".message").html("Y I K E S, calm down there buddy");
    $("body").css("background-color", "red");
    }
function dissapointed(){
    $(".image").empty();
    $(".mood").val('');
    disapointedPics.forEach(function(disapointedmood){
    $(".image").append("<img src=" + disapointedmood + ">");
    });
    $(".message").html("It will get better soon");
         $("body").css("background-color", "indigo");
    }
function jimmy(){
    $(".image").empty();
    $(".mood").val('');
    $(".image").html("clear");
    $(".message").html("Welp, you are a lost cause");
    $(".image").html('<img src="https://i.redd.it/ynzq6ld5nyu21.jpg">');
    $("body").css("background-color", "black");
    }