//if we click on the start/reset
var playing = false;
var score;
var timeremaining;
var correctAnswer;
var arrayfull=false;

document.getElementById("startreset").onclick = function (){
    
    //if we are playing
    if(playing==true){
       location.reload();//reloading page
    
    }
    else{//if we are not playing
        
        //change mode to playing
        playing=true;
        
        score=0;    //set score to zero
        document.getElementById("scorevalue").innerHTML=score;
        show("timeremaining");
        
            timeremaining=180;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        
        //change button to reset
        document.getElementById("startreset").innerHTML="Reset Game";
        
        startCountdown();
        
        //generate a new Q&A
        generateQA();
        show("s"+correctPosition);
                
    }
}


function allowDrop(ev) {
    ev.preventDefault();
    
}

function drag(ev) {
    ev.dataTransfer.setData("image/png", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("image/png");
            var s= document.getElementById(data);
            ev.target.appendChild(s);
            ev.target.src=s.src;
//    if ( ev.target.className == "box" ) {
//          ev.target.style.background = "";
//          dragged.parentNode.removeChild( dragged );
//          ev.target.appendChild( dragged );
//      }
    
}

if(arrayfull==false){

    for(i=1; i<10; i++)
{
    
    
document.getElementById("box"+i).ondrop =function(ev){
        
    //if we are playing
    if(playing==true)
    {   
        if(this.innerHTML== correctAnswer)
        {
            if(score<=9){
            //correct answer
            
            //increase score by 1
            score++;
            
            $('#'+ev.target.id).html("");
            var data = ev.dataTransfer.getData("image/png");
            var p= document.getElementById(data);
            ev.target.appendChild(p);
            ev.target.src=p.src;
                      
            document.getElementById("scorevalue").innerHTML=score;
//          hide wrong box and show correct box
//          soundPlay("../audio/correct3.mp3");
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
            
            //Generate new Q&A
            if(pos1.length<= 8)
            {
                generateQA();
                show("s"+correctPosition);
            }
            
            
            if(score==9){
                
                for(i=1; i<10; i++)
                {
                document.getElementById("box"+i).innerHTML="";
                }
//                alert("Image 1 Completed");
                pos1 = [];
                answers = [];
                generateQA();
                show("l"+correctPosition);
                
                score++;
            
            var data = ev.dataTransfer.getData("image/png");
            var p= document.getElementById(data);
            ev.target.appendChild(p);
            ev.target.src=p.src;
                      
            document.getElementById("scorevalue").innerHTML=score;
//          hide wrong box and show correct box
//          soundPlay("../audio/correct3.mp3");
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
            
            //Generate new Q&A
            if(pos1.length<= 8)
            {   
               generateQA();
                show("l"+correctPosition);

            }

            }
                
                
                
                
            }
            
            
            else if(score>=10 && score<=19){
            //correct answer
            
            //increase score by 1
            score++;
            
            $('#'+ev.target.id).html("");
            var data = ev.dataTransfer.getData("image/png");
            var p= document.getElementById(data);
            ev.target.appendChild(p);
            ev.target.src=p.src;
                      
            document.getElementById("scorevalue").innerHTML=score;
//          hide wrong box and show correct box
//          soundPlay("../audio/correct3.mp3");
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
            
            //Generate new Q&A
            if(pos1.length<= 8)
            {   
               generateQA();
                show("l"+correctPosition);

            }
            if(score==19){
                
                for(i=1; i<10; i++)
                {
                document.getElementById("box"+i).innerHTML="";
                }
                pos1 = [];
                answers = [];
                generateQA();
                show("k"+correctPosition);
                
                score++;
            
            var data = ev.dataTransfer.getData("image/png");
            var p= document.getElementById(data);
            ev.target.appendChild(p);
            ev.target.src=p.src;
                      
            document.getElementById("scorevalue").innerHTML=score;
//          hide wrong box and show correct box
//          soundPlay("../audio/correct3.mp3");
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
            
            //Generate new Q&A
            if(pos1.length<= 8)
            {   
               generateQA();
                show("k"+correctPosition);

            }

            }
            
        }
            
            
            else if(score>=20 && score<=28){
            //correct answer
            
            //increase score by 1
            score++;
            
            $('#'+ev.target.id).html("");
            var data = ev.dataTransfer.getData("image/png");
            var p= document.getElementById(data);
            ev.target.appendChild(p);
            ev.target.src=p.src;
                      
            document.getElementById("scorevalue").innerHTML=score;
//          hide wrong box and show correct box
//          soundPlay("../audio/correct3.mp3");
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
            
            //Generate new Q&A
            if(pos1.length<= 8)
            {   
               generateQA();
                show("k"+correctPosition);

            }
            if(score==19){
                
                for(i=1; i<10; i++)
                {
                document.getElementById("box"+i).innerHTML="";
                }
//                alert("Image 1 Completed");
                pos1 = [];
                answers = [];
                generateQA();
                show("eg"+correctPosition);
                
                score++;
            
            var data = ev.dataTransfer.getData("image/png");
            var p= document.getElementById(data);
            ev.target.appendChild(p);
            ev.target.src=p.src;
                      
            document.getElementById("scorevalue").innerHTML=score;
//          hide wrong box and show correct box
//          soundPlay("../audio/correct3.mp3");
            swal({
                position: 'top-end',
                  title: 'Correct!',
                  icon: 'images/correct.gif',
                  timer: 1000,
                })
            
            //Generate new Q&A
            if(pos1.length<= 8)
            {   
               generateQA();
                show("eg"+correctPosition);

            }

            }
            
        }
            
            
            
        }
            else
            {
                //wrong answer
//                soundPlay("../audio/wrong.mp3");
                swal({
                    position: 'top-end',
                      title: 'Wrong!',
                      icon: 'images/wrong.gif',
                      timer: 1000,
                    })
            }
        
            
    }

           
}
}
}

    
        //correct?
            //yes
                //increse score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec

//function

//start Counter
function startCountdown(){
    action=setInterval(function(){
        timeremaining-=1;
        
    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0)//game over
        {
           stopCountdown();
            swal({
                  title: "Your Score is "+score,
                  text: "Game Over!",
                  
                  button: "Yes, I want to play again!!!",
                  timer: 1500
                });
            hide("timeremaining");
            playing=false;
        }
    },1000);
}



//stop Counter
function stopCountdown(){
    clearInterval(action);
}

//hide an element
function hide(Id)
{
    document.getElementById(Id).style.display="none";
}

//show element
function show(Id)
{
    document.getElementById(Id).style.display="block";
}

//generate question and multiple answers


var t=9;
var pos1=[];
 var b=10;
var correctPosition;

function generateQA(){
    
    
    var x =1+Math.round(9*Math.random());
    var y =1+Math.round(9*Math.random());
    
    
    correctAnswer=x*y;
    document.getElementById("question").innerHTML= x + "x" + y;
     
    //fill one box with the correct answer
     
    do  { 
        correctPosition = 1 + Math.floor(9*Math.random());
        }
    while(pos1.indexOf(correctPosition)>-1);
        if(pos1.length<10){
            
            pos1.push(correctPosition);
            document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
             var answers=[correctAnswer];
        }
        
        else if(pos1.length==9){
//            
            arrayfull=true;
            
            document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
//            document.getElementById("box"+correctPosition).innerHTML="";
        }
    
//      for(k=9;K>=1;k--)
//        {
//            document.getElementById("s"+correctPosition).style.zindex = k;
//            
//        }
    //fill other boxes with wrong answers
   
   
    
    
    for(i=1;i<b;i++)
    {            
        if(pos1.indexOf(i)==-1)
            {   
                var wrongAnswer;
                do
                {   
                    
                    
                    wrongAnswer= (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()))
                }while(answers.indexOf(wrongAnswer)>-1);
                document.getElementById("box"+i).innerHTML=wrongAnswer;
                answers.push(wrongAnswer);
            }
    }
}
//    }
//    u++;
//    b--;
    




//function soundPlay(src){
//var audioElement = document.getElementById('player-src');
//audioElement.src =src ; //src for the player
//var myAudio = document.getElementById("player");
//myAudio.load();
//myAudio.play();
//}