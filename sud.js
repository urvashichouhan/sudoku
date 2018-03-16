$(document).ready(function() {
	var x=0,j=0,k=0,i=0,z=0,k1=0,c=0;
	var a=[];
	var v=[];
	var v1=[];
	var v2=[];
	var t1;
	var t2=[];
	var td = [];
	var t3=[];
	randomNum1 =15+ Math.round(Math.random() * 10);

fun2();

	function fun2()
	{ 
		var v1=[];
		var t2=[];
		for(i=0;i<randomNum1;i++)
		{
			randomNum2=Math.ceil(Math.random() * 9);
			//console.log(randomNum2)
			randomNum3=Math.ceil(Math.random() * 81);

			var is=($("#"+randomNum3).attr("class"));
			

			//console.log(randomNum3)
			v[i]=randomNum2;
			v2[i]=randomNum3;
			$('#'+randomNum3).text(randomNum2);		
		}
		//for(i1=1;i1<=9;i1++){
		  $("#ti1").find('tr').each(function (i, el) {
	      var $tds = $(this).find('td');
	      for(i=0;i<3;i++){
	        v1[j] = $tds.eq(i).attr("id");
	        t2[j]=$tds.eq(i).text();

	        j++;
	      }	 
	     
			})

		for(k=0;k<t3.length;k++)
		{
				for(k1=k+1;k1<t3.length;k1++)
			{
				if(t3[k]==t3[k1]);
				c++;
					console.log(c)
			  }
		}

	}
})


