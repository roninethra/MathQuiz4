var player1= localStorage.getItem("player1_name");
var player2= localStorage.getItem("player2_name");
var player1score= "0";
var player2score= "0";
var playerturn= player1;
document.getElementById("player1_name").innerHTML= player1;
document.getElementById("player2_name").innerHTML= player2;
document.getElementById("player1_score").innerHTML= player1score;
document.getElementById("player2_score").innerHTML= player2score;
document.getElementById("player_question").innerHTML= "Question Turn-"+ player1;
document.getElementById("player_answer").innerHTML= "Answer Turn-"+ player2;
question_turn= "player1";
answer_turn= "player2";

function send(){
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
   actual_answer= parseInt(number1) * parseInt(number2);
   question_number= "<h4>" + number1 + "X" + number2 + "</h4>";
   input_answer = "<br><input placeholder= 'Type Answer Here' id= 'answer_input'><br><br>";
   check_button= "<button class= \"btn btn-success\" id= \"checkbutton\" onclick= \"check()\">Check</button>";
   row= question_number + input_answer + check_button;
   document.getElementById("output").innerHTML= row;
   document.getElementById("number1").value = "";
   document.getElementById("number1").value = "";


}

function check(){
    var get_answer= document.getElementById("answer_input").value;
    if (get_answer==actual_answer){
        document.getElementById("result").innerHTML = "Correct";
        if(playerturn==player1){
            player2score++;
            playerturn=player2;
            document.getElementById("player_answer").innerHTML= "Answer Turn-"+ player1;
            document.getElementById("player_question").innerHTML= "Question Turn-"+ player2;
        }
        else{
            player1score++;
            playerturn=player1;
            document.getElementById("player_question").innerHTML= "Question Turn-"+ player1;
            document.getElementById("player_answer").innerHTML= "Answer Turn-"+ player2;
        }
    
    }
    else{
        document.getElementById("result").innerHTML = "Incorrect";
        if(playerturn==player1){
            player2score--;
            playerturn=player2;
            document.getElementById("player_answer").innerHTML= "Answer Turn-"+ player1;
            document.getElementById("player_question").innerHTML= "Question Turn-"+ player2;
        }
        else{
            player1score--;
            playerturn=player1;
            document.getElementById("player_question").innerHTML= "Question Turn-"+ player1;
            document.getElementById("player_answer").innerHTML= "Answer Turn-"+ player2;
        }

    }
    

    document.getElementById("player1_score").innerHTML= player1score;
    document.getElementById("player2_score").innerHTML= player2score;
}
