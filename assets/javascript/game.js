var defenders = [
    {name: "Pearl", image: "pearl.png", health: 100, attack: 6},
    {name: "Stevonnie", image: "stevonnie.png", health: 120, attack: 8},
    {name: "Amethyst", image: "amethyst.png", health: 150, attack: 10},
    {name: "Garnet", image: "garnet.png", health: 180, attack: 12}
  ];
var enemies = [
    {name: "Aquamarine", image: "aquamarine.png", health: 100, attack: 5},
    {name: "Agate", image: "agate.png", health: 120, attack: 10},
    {name: "Jasper", image: "jasper.png", health: 150, attack: 20},
    {name: "Topaz", image: "topaz.png", health: 180, attack: 25}
  ];
var characterChosen;
var enemyChosen = false;

function setup () {
    
    defenders.forEach(function(obj) {
        var defenderImage = $("<img>");
        defenderImage.attr("src", "assets/images/" + obj.name + ".png").height(225).width(200);
        $( "#" + obj.name.toLowerCase() ).append("<p>" + obj.name + "</p>");
        $( "#" + obj.name.toLowerCase() ).append(defenderImage);
        $( "#" + obj.name.toLowerCase() ).append("<p>" + obj.health + "</p>");
    });

    enemies.forEach(function(obj) {
        var enemyImage = $("<img>");
        enemyImage.attr("src", "assets/images/" + obj.name + ".png").height(225).width(200);
        $( "#" + obj.name.toLowerCase() ).append("<p>" + obj.name + "</p>");
        $( "#" + obj.name.toLowerCase() ).append(enemyImage);
        $( "#" + obj.name.toLowerCase() ).append("<p>" + obj.health + "</p>");
        $( "#" + obj.name.toLowerCase() ).hide();
    });

    $(".defender").on("click", function(){
        $( "#content" ).html("");
        $( "#chosen-character" ).prepend("<p>Your Character: </p>");
        characterChosen = true;        
        var charString = this.id;
        defenders.forEach(function(obj) {
            if( charString !== (obj.name.toLowerCase()))
            {
                $( "#" + obj.name.toLowerCase() ).hide();
            }
        });
        showEnemies();
    });

    $(".enemy").on("click", function(){
        $("#chosen-character").css("width", "50%");
        enemyChosen = true;
        var enemString = this.id;
        enemies.forEach(function(obj) {
            if( enemString === (obj.name.toLowerCase())){      
                $("#chosen-enemy").append("<p>Your Enemy: </p>");
                $( "#" + obj.name.toLowerCase() ).appendTo("#chosen-enemy");
                $("#attack-button").append("<br><button id='attack'><p>Attack</p></button><br>");
            }
        });
        game();
    });



    $("#attack-button").on("click", function(){
        // console.log("Health: " + enemies[this.index].health);
        
        var switchName = $( "button:visible" ).attr('id');
        console.log(switchName);

        switch ($( "button:visible" ).attr('id'))
        {
            case "pearl":
            console.log("Pearl: " + defenders[this.index].health);
            break;
            case "stevonnie":
            console.log("Stevvie: "+ defenders['stevonnie'].health);
            break;
            case "amethyst":
            console.log("Ammy: "+ defenders['amethyst'].health);
            break;
            case "garnet":
            console.log("Garnet: "+ defenders[this.index].health);
            break;
        }
     });
};
// $( "button" ).click(function() {
//     $( "button:visible" ).show( "fast" );
//   });


// function calculateAttack(){
//     if (score === randomNumber){
//         wins++;
//         $("#wins-losses").html("<p id='wins-losses-text'>You win! (^0^)<br/>Wins:  " + wins + "<br/>Losses: " + losses + "</p>");
//         reset();
//     }
//     if (score > randomNumber){
//         losses++;
//         $("#wins-losses").html("<p id='wins-losses-text'>You lose! (T^T)<br/>Wins:  " + wins + "<br/>Losses: " + losses + "</p>");
//         reset();
//     }
// };

// function reset(){
//     rose = Math.floor(Math.random() * 12) + 1;
//     amethyst = Math.floor(Math.random() * 12) + 1;
//     ruby = Math.floor(Math.random() * 12) + 1;
//     sapphire = Math.floor(Math.random() * 12) + 1;
//     randomNumber = Math.floor(Math.random() * 109) + 12;
//     score = 0;
//     $("#number").html("<p id='number-text'>Random Number:<br/>" + randomNumber + "</p>");
//     $("#total-score").html("<p id='score-text'>Your total score is:  <br/>" + score + "</p>");
// };

function game() {
    // $(".defender").on("click", function(){
    //     $( "#content" ).html("<p>Defenders Available To Choose:</p>");
    //     $( "#chosen-character" ).html("");
    //     characterChosen = false;        
    //     defenders.forEach(function(obj) {
    //         $( "#" + obj.name.toLowerCase() ).show();
    //     });
    //     hideEnemies();
    // });
  };

function showEnemies() {
    $( "#all-enemies" ).html("<p>Enemies Available To Attack: </p>");
    enemies.forEach(function(obj) {
        $( "#" + obj.name.toLowerCase() ).show();
    });
  };

function hideEnemies() {
    $( "#chosen-enemy" ).html("");
    enemies.forEach(function(obj) {
        $( "#" + obj.name.toLowerCase() ).hide();
    });
  };