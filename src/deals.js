var class_css =['product--blue','product--orange','product--red','product--green','product--yellow','product--pink']

function deals(){
var api_s = new XMLHttpRequest();
api_s.open("GET", "deals.json", true);

api_s.onload = function() {

	var data = JSON.parse(this.response);
	var i=1;
	for(var j=0;j<data.length;j++)  // for unkown Value then we will use For each Fucntion for Loop
	{
	  var beta=data[j];
    
  	if (api_s.status >= 200 && api_s.status < 400) 
  		{	    var newNode = document.createElement('div');
            newNode.className = class_css[(Math.floor((Math.random()*6) + 1))-1];
            newNode.innerHTML = "<div class='product_inner'>"+
                          "<img src='"+(beta.Icon)+"' width='300'>"+
                          "<p>"+(beta.Item)+"</p>"+
                          "<p>"+(beta.Company)+"</p>"+
                          "<p>Price "+(beta.Reduced_Price)+"</p>"+
                          "<button>Add to basket</button>"+
                  "</div>"+
                  "<div class='product_overlay'>"+
                         "<h2>Added to basket</h2>"+
                         "<i class='fa fa-check'></i>"+
                  "</div>"
            document.getElementById('lightning_deal').appendChild(newNode);    

 	 }
 	 i=i+1;
 	}
}; 
(api_s).send();
}
deals();

$(function() {

  "use strict"
  
  var init = "No items yet!";
  var counter = 0;

  // Initial Cart
  $(".counter").html(init);
  
  // Add Items To Basket
  function addToBasket() {
    counter++;
    $(".counter").html(counter).animate({
      'opacity' : '0'
    },300, function() {
      $(".counter").delay(300).animate({
        'opacity' : '1'
      })
    })
  }

  // Add To Basket Animation
  $("button").on("click", function() {
    addToBasket(); $(this).parent().parent().find(".product_overlay").css({
      'transform': ' translateY(0px)',
      'opacity': '1',
      'transition': 'all ease-in-out .45s'
    }).delay(1500).queue(function() {
      $(this).css({
        'transform': 'translateY(-500px)',
        'opacity': '0',
        'transition': 'all ease-in-out .45s'
      }).dequeue();
    });
  });
});
