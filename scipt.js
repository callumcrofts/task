function myFunction(){
    document.getElementById("darkbg").backgroundColor = 'blue';
  };

  function myFunction2(){
      document.getElementById("lightbg").body.style.backgroundColor = 'white';
    };<button class="btn btn-primary" type="submit">Button</button>

var x = Math.floor((Math.random() * 6) + 1);
var RandomImage = "d" + x + ".png";
var ImageSource ="dark-and-light-task" + RandomImage ;
var Image = document.querySelectorAll('img')[0];
Image.setAttribute("src", ImageSource);

var y = Math.floor((Math.random() * 6) + 1);
var RandomImage1 = "d" + y + ".png";
var ImageSource1 ="dark-and-light-task" + RandomImage1 ;
var Image1 = document.querySelectorAll('img')[1];
Image1.setAttribute("src", ImageSource1);

if ( x > y )
{
  document.getElementById('result').innerHTML = "Player 1 Won";
}
else if ( x < y )
{
  document.getElementById('result').innerHTML = "Player 2 Won";
}
else {
  document.getElementById('result').innerHTML = "DRAW";
}
