
var badNumberHint = true; 
$(document).ready(function(){
  a=('803070295010560003590302006000000040601000307020000000700604019100097030986020704');   
  b=('100489006730050040460001295387120600501703008046095710914600080020040037803512004');
  c=('200300000804062003013800200000020390507000621032006000020009140601250309000001002');
  d=('240007000189000275503001400010020007007000020950000340704002890320008054805714600');
  e=('530070000600195000098000060800060003400803001700020006000000200000419005000080079');
  f=('406070308057090140109408205970385004003720010680049053704602501065010900308050402');
  randomNum=Math.ceil(Math.random() * 6);  //creates random nu from 1 to 6
 
  switch(randomNum){
    case 1:
      initPuzzle(a);
      break;
    case 2:
      initPuzzle(b);
      break;
    case 3:
      initPuzzle(c);
      break;
    case 4:
      initPuzzle(d);
      break;
    case 5:
      initPuzzle(e);
      break;
    case 6:
      initPuzzle(f);
      break;

  }
  $('.cell').on('click',doClick);        // function called when user clicks on a cell
  $('.cell').on('keydown',doKeyDown);    //function called when user press a button
});
function doKeyDown(event) {              //function definition of the one which gets called when user press a button
  switch (event.keyCode) {                                  
    default: 
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        console.log("ghfgh")
        doNumber(event.keyCode - 48);
      } else if (event.keyCode >= 96 && event.keyCode <= 105) {
        doNumber(event.keyCode - 96);
      } else {
        return true;
      }
  }
}
function doNumber(n) {          

  if (badNumberHint) { tryNumber(n) } else { putGoodNumber(n) }
}
function tryNumber(n) {           //function which passes the no to test the constraints
  if (testNumber(n)) { putGoodNumber(n) } else { putBadNumber(n) }
}
function putGoodNumber(n){        //function through which color of right input turns black
  $('#'+focusedCell).removeClass('warning');
  if (n == 0) {
    $('#'+focusedCell).text('');
  } else {
    $('#'+focusedCell).text(n);
   
  }
}
function putBadNumber(n){         //function through which color of wrong input turns red
  $('#'+focusedCell).addClass('warning');
  $('#'+focusedCell).text(n);
}

function doClick(event) {         //function definition of the one which gets called when user clicks on a cell
  event.preventDefault();
  focusedCell = this.id;

}
function doRightClick(event) {
  event.preventDefault();
  alert('doRightClick('+this.id+')');
}
function initPuzzle(str) {        //function which gets called when the page load and prints the pre-filled values
  var n; 
  for (i=0; i<=80; i++) {
    n = str.substr(i,1);

    if (n >= 1 && n <= 9) { $('#'+i).text(n) .css("font-weight","bold")
      v=i;
   
    }
     else { $('#'+i).text('') }
  }
}
function boxNo(cell) {         //function to extract to which table the particular cell belongs to
  return parseInt(cell.className.split(' ')[1].substr(3));
}
function rowNo(cell) {         //function to extract to which row the particular cell belongs to
  return parseInt(cell.className.split(' ')[2].substr(3));
}
function colNo(cell) {         //function to extract to which coloumn the particular cell belongs to
  return parseInt(cell.className.split(' ')[3].substr(3));
}
function testNumber(n) {      //function to test the sudoku constraints
  var cell = document.getElementById(focusedCell);
  var box = boxNo(cell);
  var row = rowNo(cell);
  var col = colNo(cell);
  var goodNumber = true;
  $.each($('.box'+box), function(i,cell){
    if (parseInt(cell.innerText) == n) { goodNumber = false; return false }
  });
  $.each($('.row'+row), function(i,cell){
    if (parseInt(cell.innerText) == n) { goodNumber = false; return false }
  });
  $.each($('.col'+col), function(i,cell){
    if (parseInt(cell.innerText) == n) { goodNumber = false; return false }
  });
  return goodNumber;
}
