$(document).ready(function() {	
	var x=0,j=0,k=0,i=0,z=0,k1=0,c=0;
	var cell;
	var v=[];
	var v1=[];
	var v2=[];
	var t1;
	var t2=[];
	var td = [];
	var t3=[];
	var val;
	randomNum1 =30+ Math.round(Math.random() * 10);		
	console.log(randomNum1)
	for(i=0;i<randomNum1;i++)
	{
		randomNum2=Math.ceil(Math.random() * 9);
		randomNum3=Math.round(Math.random() * 80);
		if($('#'+randomNum3).text()!=""){
			i--;
			continue;
		}
		else{
			var a=test(randomNum2,randomNum3)
			if(a==1){
				i--;
			}
		}
	}
	
	$('.b').click(function(){
		val=$(this).val();
		$('.tdi').on('click',function(){
			var cell=$(this).attr("id")
			test1(val,cell)			
		})			
	})
  function test1(val,cell){
  	var className = $('#'+cell).attr('class');
  	var table=parseInt(className.split(' ')[1].substr(1));
		var row=parseInt(className.split(' ')[2].substr(1));
		var col=parseInt(className.split(' ')[3].substr(1));
		var table1=($('.t'+table).text());
		var col1=($('.c'+col).text());
		var row1=($('.r'+row).text());
		if((table1.indexOf(val) == -1)&&(col1.indexOf(val) == -1)&&(row1.indexOf(val) == -1)){
			$('#'+cell).addClass('success');}
		
		else{
			$('#'+cell).addClass('warning');
		}
		$('#'+cell).text(val)		
  }
	function test(randomNum2,randomNum3){
		var j1=0;
		var className = $('#'+randomNum3).attr('class');
		var table=parseInt(className.split(' ')[1].substr(1));
		var row=parseInt(className.split(' ')[2].substr(1));
		var col=parseInt(className.split(' ')[3].substr(1));
		var table1=($('.t'+table).text());
		var col1=($('.c'+col).text());
		var row1=($('.r'+row).text());
		if((table1.indexOf(randomNum2) == -1)&&(col1.indexOf(randomNum2) == -1)&&(row1.indexOf(randomNum2) == -1))				
		$('#'+randomNum3).text(randomNum2)
		else
			++j1;	
		return j1;
	}
		
});



