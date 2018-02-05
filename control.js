var index2=0;
var q=questionslist[index2];
var score=0;
var select=0;
var ans=0;
var numques=0;
var list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var len=20;
var countDown =4;
var now =0;
var totaltime=0;


      function loadQuestion (){
      console.log('loadQues');
      randomQuestion();
      ans=q.answer;
      var x = setInterval(function() {
          // console.log("BALL");
          var distance = countDown - now;
          document.getElementById("demo").innerHTML = "Time : " + distance;
          now+=1;
          if (distance <= 0) {
            document.getElementById("demo").innerHTML = "Time : " + 5;
            nextQuestion();
            console.log("NEXT");
          }
          if (numques<0){
               clearInterval(x);
          }
      }, 1000);
    }

    function nextQuestion (){
      console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN");

        totaltime+=now;
        countDown=4;
        now=0;
        document.getElementById("demo").innerHTML = "Time : " + 5;
        randomQuestion();
       if ((select+"") === ans) {
         console.log("Correct");
         score+=1;
       }
       try {
         ans=q.answer;
       } catch (e) {

       } finally {

       }
       if (numques<0){
         showScore();
       }
    }


    function randomQuestion (){
      if(numques >= 0){
        var x = Math.floor((Math.random() * len));
        index2=list[x];
        list.splice(x,1);
        q=questionslist[index2];
        console.log(list);
        console.log(q);
        console.log((index2+1)+"index");
        try {
          document.getElementById("question").textContent = q.question;
          document.getElementById("button1").value = q.button1;
          document.getElementById("button2").value = q.button2;
          document.getElementById("button3").value = q.button3;
          document.getElementById("button4").value = q.button4;
          document.getElementById("image").src=q.img;
        } catch (e) {

        } finally {

        }

       numques-=1;
       len-=1;
      }
      // console.log((index2+1)+"index");
      console.log(numques +"nQ");
    }

    function showScore(){
      document.getElementById("score").innerHTML = "Score : " + score;
      document.getElementById("time").innerHTML = "Time : " + totaltime;
      document.getElementById("main").style.display = 'none';
      document.getElementById("show").style.display = 'block';
    }

    function question10 (){
      numques=10
      console.log(numques);
      loadQuestion();
    }

    function question20 (){
      numques=20
      console.log(numques);
      loadQuestion();
    }

    function select1 (){
      select=1;
    nextQuestion();
    }
    function select2 (){
      select=2;
        nextQuestion();
    }
    function select3 (){
      select=3;
        nextQuestion();
    }
    function select4 (){
      select=4;
        nextQuestion();
    }
