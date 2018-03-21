//Sudoku game program
$(document).ready(function() {		
	
	randomNum1 =5+ Math.round(Math.random() * 10);//creates a random no between 5 to 15 to decide what number of cells will be pre-filled	
	console.log(randomNum1)
	for(i=0;i<randomNum1;i++)
	{
		randomNum2=Math.ceil(Math.random() * 9);   //creates a random no between 1 to 9 
		randomNum3=Math.round(Math.random() * 80); //creates a random no between 0 to 80 for id
		if($('#'+randomNum3).text()!=""){          //if an id is not empty
			i--;
			continue;
		}
		else{
			var check=test(randomNum2,randomNum3)
			if(check==1){
				i--;
			}
		}
	}
	
	$('.btn').click(function(){	
	var val=null;							//when button is clicked
		val=$(this).val();
		fun(val)	
	});
	function fun(val){
		$('.tdi').on('click',function(){				//when a cell is selected
			var cell=$(this).attr("id");
			test1(val,cell);			
		});		
	};
  function test1(val,cell){									//function for testing user inputs for sudoku constraints
  	var className = $('#'+cell).attr('class');
  	var table=parseInt(className.split(' ')[1].substr(1));
		var row=parseInt(className.split(' ')[2].substr(1));
		var col=parseInt(className.split(' ')[3].substr(1));
		var table1=($('.t'+table).text());
		var col1=($('.c'+col).text());
		var row1=($('.r'+row).text());
		if((table1.indexOf(val) == -1)&&(col1.indexOf(val) == -1)&&(row1.indexOf(val) == -1)){
			$('#'+cell).empty();
			$('#'+cell).text(val).css('color','green');			
		}		
		else{
			$('#'+cell).empty();
			$('#'+cell).text('X').css('color','red');			
		}
  }
	function test(randomNum2,randomNum3){  //function for testing pre-filled values for sudoku constraints
		var count1=0;
		var className = $('#'+randomNum3).attr('class');
		var table=parseInt(className.split(' ')[1].substr(1));
		var row=parseInt(className.split(' ')[2].substr(1));
		var col=parseInt(className.split(' ')[3].substr(1));
		var table1=($('.t'+table).text());
		var col1=($('.c'+col).text());
		var row1=($('.r'+row).text());
		if((table1.indexOf(randomNum2) == -1)&&(col1.indexOf(randomNum2) == -1)&&(row1.indexOf(randomNum2) == -1))				
		$('#'+randomNum3).text(randomNum2).css("color","blue")
		else{
			++count1;	
		}
		return count1;
	}		
});
	


