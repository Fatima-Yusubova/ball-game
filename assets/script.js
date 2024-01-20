const stack = document.querySelector(".stack");
const ball= document.querySelector(".ball");

let stackX = 0;
let ballX = 0;
let ballMx = 5;
let ballY= 0;
let ballMy= 5;

onkeydown = barMove;
 let set = setInterval(ballMove ,40);
 


function barMove(e){
    if(e.keyCode == 39){
        if(stackX < 700){
            stackX += 25;
        }
    }
    if(e.keyCode ==37){
        if(stackX>0){
            stackX -=25;
        }
    }
    stack.style.left = stackX + 'px';
}

function ballMove(){
    if(ballX < 0 || ballX > 745){
        ballMx *= -1;

    }
   
    if(ballY < 0){
        ballMy *= -1;
    } else  if(ballY >550 && ballX >=stackX -25 && ballX <= stackX +75){
        ballMx +=1;
        ballMy +=1;
        ballMy *= -1;

        function changeColor(){

             let a = Math. floor(Math. random() * 256);
             let b = Math. floor(Math. random() * 256);
            
             let color1 ="rgb("+ a +","+ b + ","+ (a-b)/2 + ")";
             let color2 ="rgb("+ a +","+ b + ","+ (a+b)/2 + ")";

             stack.style.backgroundColor = color2;
             ball.style.backgroundColor = color1;


        }
        changeColor();

        function scoreTable(){
            let count = 0;
            count ++;

            document.getElementById("count").innerHTML=count;

            

        }
        scoreTable();

       

     





    }else  if(ballY > 550){
    
      let result = confirm("Uduzdunuz yeni oyuna baslamaq isteyirsinizmi?");
      clearInterval(set);
      
      if(result){
        location.reload();
      
      }else{
        alert("Oyun bitdi");
      }
    }

    ballX += ballMx;
    ballY += ballMy;
    
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';


}