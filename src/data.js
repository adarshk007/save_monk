function test(){
var api_s = new XMLHttpRequest();
api_s.open("GET", "source.json", true);

api_s.onload = function() {

	var data = JSON.parse(this.response);
	var i=1;
	for(var j=0;j<8;j++)  // for unkown Value then we will use For each Fucntion for Loop
	{
	var beta=data[j];
  	if (api_s.status >= 200 && api_s.status < 400) 
  		{	
        var test=j+1+""+1
  		  document.getElementById(test).innerHTML=(beta.Company);
        test=""
        test=j+1+""+2
        document.getElementById(test).innerHTML="Upto "+(beta.Offer)+"% cashback";
        test=""
        test=j+1+""+3
        document.getElementById(test).innerHTML="("+(beta.Prime)+"% for prime users)";
 	 }
 	 i=i+1;
 	}
}; 
(api_s).send();
}
test();