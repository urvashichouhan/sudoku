
var badNumberHint = true;
$(document).ready(function(){
  a=('803070295010560003590302006000000040601000307020000000700604019100097030986020704');
  b=('100489006730050040460001295387120600501703008046095710914600080020040037803512004');
  c=('200300000804062003013800200000020390507000621032006000020009140601250309000001002');
  d=('240007000189000275503001400010020007007000020950000340704002890320008054805714600');
  randomNum=Math.ceil(Math.random() * 4);
  console.log(randomNum)
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
  }
  $('.cell').on('click',doClick);
  $('.cell').on('keydown',doKeyDown);
});
function doKeyDown(event) {
  var cell = document.getElementById(focusedCell);
  var row = rowNo(cell);
  var col = colNo(cell);
  switch (event.keyCode) {                                  
    default: 
      if (event.keyCode >= 48 && event.keyCode <= 57) {
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
function tryNumber(n) {
  if (testNumber(n)) { putGoodNumber(n) } else { putBadNumber(n) }
}
function putGoodNumber(n){
  $('#'+focusedCell).removeClass('warning');
  if (n == 0) {
    $('#'+focusedCell).text('');
  } else {
    $('#'+focusedCell).text(n);
   
  }
}
function putBadNumber(n){
  $('#'+focusedCell).addClass('warning');
  $('#'+focusedCell).text(n);
}

function doClick(event) {
  event.preventDefault();
  focusedCell = this.id;  
}
function doRightClick(event) {
  event.preventDefault();
  alert('doRightClick('+this.id+')');
}
function initPuzzle(str) {
  var n;
  for (i=0; i<=80; i++) {
    n = str.substr(i,1);
    if (n >= 1 && n <= 9) { $('#'+i).text(n) } else { $('#'+i).text('') }
  }
}
function boxNo(cell) {
  return parseInt(cell.className.split(' ')[1].substr(3,2));
}
function rowNo(cell) {
  return parseInt(cell.className.split(' ')[2].substr(3,2));
}
function colNo(cell) {
  return parseInt(cell.className.split(' ')[3].substr(3,2));
}
function testNumber(n) {
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
