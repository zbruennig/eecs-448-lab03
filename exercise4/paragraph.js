function updateParagraph(){
  var border = [valueOf("borderRed"), valueOf("borderGreen"), valueOf("borderBlue")];
  var background = [valueOf("backgroundRed"), valueOf("backgroundGreen"), valueOf("backgroundBlue")];
  var borderWidth = valueOf("borderWidth");;
  var paragraph = document.getElementById("paragraph");

  //Validate input
  border = border.map(function(x){
    return toValidRange(x, 0, 255);
  });
  background = background.map(function(x){
    return toValidRange(x, 0, 255);
  })
  if(borderWidth < 0){
    borderWidth = 0;
  }

  paragraph.style.backgroundColor = "rgb("+background[0]+", "+background[1]+", "+background[2]+")";
  paragraph.style.borderColor = "rgb("+border[0]+", "+border[1]+", "+border[2]+")";
  paragraph.style.borderWidth = borderWidth+"px";


}

function valueOf(documentId)
{
  return document.getElementById(documentId).value;
}

function toValidRange(x, min, max)
{
  if(x < min){
    return min;
  }
  else if(x > max){
    return max;
  }
  return x;
}
