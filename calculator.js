function input(id)
{   val=document.getElementById("result").value;
	val2=document.getElementById(id).value;
	check(val,val2);
	document.getElementById("result").value=val+val2;
}
function disp_res()
{
	res=document.getElementById("result").value;
	check_final(res);	
}
function del()
{
	document.getElementById("result").value=null;
}
function check()
{
	if(val2==".")
	{
		var patt= new RegExp("[0-9]+\.[0-9]+");
		res=patt.test(val);
		if(res==true)
		{
			var patt1=new RegExp("[0-9]+\.[0-9]+\[+|-|*|/|%]");
			res2=patt1.test(val);
			if(res2==false)
			{	val2="";
				alert("only one dot");
			}
		}
	}
	if(val2==")")
	{
		var patt=new RegExp("[(][0-9]+[+|-|*|/|%][0-9]+");
		res=patt.test(val);
		if(res==false)
		{
			val2="";
			alert("bracket not allowed");
		}
	}
}
function check_final(res)
{
	var patt=new RegExp("[a-z]|[+|-|*|/|%][+|-|*|/|%]");
	temp=document.getElementById("result").value;
	res1=patt.test(temp);
	if(res1==true)
	{
		document.getElementById("result").value="";
		alert("wrong input");
	}
	else
	{
		tes=eval(res);
		document.getElementById("result").value=tes;
	}
}