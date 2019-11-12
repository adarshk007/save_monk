//     <li class="table-row">
//       <div class="col col-1" data-label="icon">42235</div>
//       <div class="col col-2" data-label="Company">John Doe</div>
//       <div class="col col-3" data-label="Location">$350</div>
//       <div class="col col-4" data-label="Type">Pending</div>
//       <div class="col col-5" data-label="Rating">John Doe</div>
//       <div class="col col-6" data-label="Contact">$350</div>
//       <div class="col col-7" data-label="link"><button class="btn btn-primary btn" 
//         onclick="window.location.href='https://google.com'; return false;">
//         Button Link
// </button></div>
//   </li>

function deals(){
var api_s = new XMLHttpRequest();
api_s.open("GET", "Cust_req.json", true);

api_s.onload = function() {

	var data = JSON.parse(this.response);
	var str11=window.location.href;
// 	var des=str11.split('?');
// 	var des=des[1].split('=');
	var i=1;
	for(var j=0;j<data.length;j++)  // for unkown Value then we will use For each Fucntion for Loop
	{
	  var beta=data[j];
		
  	if (api_s.status >= 200 && api_s.status < 400) 
  		{	
		if(true){
		    var newNode = document.createElement('li');
		    newNode.className = "table-row";
		    newNode.innerHTML = "<div class='col col-1' data-label='icon'><img src='"+(beta.Logo)+"' class='image_op'/></div>"+
				  "<div class='col col-2' data-label='Customer ID'>"+(beta.Customer_ID)+"</div>"+
						"<div class='col col-3' data-label='Location'>"+(beta.Name)+"</div>"+
				  "<div class='col col-4' data-label='Type'>"+(beta.Contact_Number)+"</div>"+
				  "<div style='color:#C33764;' class='col col-5' data-label='Rating'>"+(beta.Service_Type)+"</div>"+
				  "<div class='col col-6' data-label='Contact'>"+(beta.Payment_Mode)+"</div>" +
				  "<div class='col col-7' data-label='link'><button class='btn btn-danger' onclick='window.location.href='"+(beta.Request)+"'; return false;'>URL</button></div>"                          
	//                           "<p>"+(beta.Item)+"</p>"+
	//                           "<p style='color:#20002c;'>"+(beta.Company)+"</p>"+
	//                           "<p style='color:#20002c;'>Price "+(beta.Reduced_Price)+"</p>"+
	//                           "<button onclick='tests()'>Add to basket</button>"+
	//                   "</div>"+
	//                   "<div class='product_overlay'>"+
	//                          "<h2>Added to basket</h2>"+
	//                          "<i class='fa fa-check'></i>"+
	//                   "</div>"
		    document.getElementById('vendor').appendChild(newNode);    
		}
 	 }
 	 i=i+1;
 	}
}; 
(api_s).send();
}
deals();
// style='color:#20002c;'
