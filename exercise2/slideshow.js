var pictures = ["bifm.jpeg", "bill.jpg", "collins.jpg", "danny.jpeg", "devonte.jpg",
"mario.jpg", "perry.jpeg", "pierce.jpg", "rush.jpg", "wayne.jpg", "wilt.jpg"]
var current = 0;

function previous(){
  current = current-1;
  if(current < 0){
    current += pictures.length;
  }
  updateCurrentPicture();
}

function next(){
  current = (current+1) % pictures.length;
  updateCurrentPicture();
}

function updateCurrentPicture(){
  document.getElementById("imageId").src = "pictures/"+pictures[current];
}
