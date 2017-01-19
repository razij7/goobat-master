	var filterArray = ['active',1];
	var idProducts = webService.search('products',filterArray);
	var objectName = 'products';
	for(i=0;i<10;i++){
		var setURL = urlapi + objectName + "/" + idProducts[i] + '?output_format=JSON';	
		$.getJSON(setURL, 
			function(setUrlProduct){
				var Detailproductsname ='';
				var Detailproductsnamecategori ='';
				var apiIdProduct = setUrlProduct["product"]["id"];
				var apiIdSupplier = setUrlProduct["product"]["id_supplier"];
				var apiIdImage = setUrlProduct["product"]["associations"]["images"][0]["id"];
				var setUrlImageProduts = urlapi+"images/products/"+apiIdProduct+"/"+apiIdImage+"/small_default?ws_key="+key;
				var div1 ='<div class="col-xs-6 col-md-3">';
				var thumbnail ='<div class="thumbnail">';
				var imgSrc = '<img style="width:10em; height:10em;"src="'+setUrlImageProduts+'" alt="">';
				var classCaption ='<div class="caption">'+ apiIdProduct;
				var p1 = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>';
				var p2 = '<p><a href="view/orders/index.html?id='+apiIdProduct+'&id_supplier='+apiIdSupplier+'&idCustomer='+idCustomer+'" class="btn btn-primary" id="carts" >Beli</a><button  id="detailProduct" class="btn btn-default">Detail</button></p>';
				var divEnd1 ='</div></div></div>';
				var alls = div1+thumbnail+imgSrc+classCaption+p1+p2+divEnd1;
				//Detailproductsnamecategori += ' id kategori = '+ apiIdCategory +'';
				$("#Detailproductsname").append(alls);
				//$('#categories').append(Detailproductsnamecategori);
			}
		);
	}
	