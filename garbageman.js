//garbage man keeps the drawing machine running smoothly by removing indecies that are no longer needed
function garbageMan() {
  //Constrain lines to 15 at a time
  if (paint.length > 500){
    paint.splice(0,1); 
  }
}