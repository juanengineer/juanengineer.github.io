//alert("working");
/*
$(document).ready(function(){
    $("h1").css("color","red");

});

 Avoid using the above document ready method
 by including the script tag at the end of the body
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="index.js" charset="utf-8"></script>
</body>
</html>
*/

//$("h1").css("color","red");             //Don't use JS for styling
//document.querySelector("h1"); //vanilla JS
//$("h1").css();                          //jQuery way
/*
$("h1").text("Bye");
$("button").html("<em>Hey</em>");
console.log(
    $("a").attr("href","https://www.yahoo.com")
)


for(var i=0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener
    ("click",
        function(){
            document.querySelector("h1").style.color="purple";
        }
    );
}

$("h1").click(
    function(){
        $("h1").css("color","purple");
        $("h1").text("Goodbye");
    }
);


$("button").click(
    function(){
        $("h1").css("color","purple");
    }
);

$(document).keypress(
    function(event){
        console.log(event.key)
        $("h1").text(event.key);
    }
)

$("h1").on("mouseover",
    function(){
        $("h1").text("wave that mouse!")
    }
)


$("h1").on
("click",
    function(){
        $("h1").text("click that mouse!")
    }
)

//vanilla JS

for (var i=0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener
    ("click",
        function(){
            document.querySelector("h1").style.color="purple"
        }
    );
}


//jQuery
$("button").click(
    function(){
        $("h1").css("color","purple");
    }
)
*/

$(document).keypress(
    function(event){
        console.log(event.key)
        $("h1").text(event.key)
    }
)

$("h1").on("mouseover",
    function(){
        $("h1").text("MO")
    }
)

/*
//toggle hide and show
$("button").click(
    function(){
        $("h1").toggle();
    }
)

//fade out
$("button").click(
    function(){
        $("h1").fadeToggle();
    }
)


//slide up
$("button").click(
    function(){
        $("h1").slideToggle();
    }
)


//custom animation
$("button").click(
    function(){
        $("h1").animate({opacity: 0.5});
    }
)

//animate margin change
//custom animation
$("button").click(
    function(){
        $("h1").animate({margin: "20%"});
    }
)
*/
$("button").on("click",
    function(){
        $("h1").slideUp().slideDown().animate({opacity: "50%"})
    }
)