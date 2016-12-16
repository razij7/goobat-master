var webService = {
    // Application Constructor
    initialize: function() {
        this.doLogin();
    },

    key: function() {
		return 'ARMMR8JEW5FLK7AS63FLHUU72I29QDXP';
    },
	
	url: function(){
		return 'http://go-obat.com/markets/api';
	},
	
	schema: function(schema){
		return schema;
	},
	
	xmlToString: function(xmlData){
		var xmlString;
		if (window.ActiveXObject){
			xmlString = xmlData.xml;
		}
		else{
			xmlString = (new XMLSerializer()).serializeToString(xmlData);
		}
		return xmlString;
	},
	
	outputFormat: function(format){
		switch(format){
			case 'json':
				format = '?output_format=JSON';
				break;
			case 'schema0':
				format = '?schema=blank';
				break;
			case 'schema1':
				format = '?schema=synopsis';
				break;
		};
		return format;
	},
	
	codeReturn: function(objectName){
		var code;
		switch(objectName){
			case 'orders':
				code = 0; 
				break;
			case 'carts': 
				code = 1; 
				break;
			case 'customers': 
				code = 2; 
				break;
			case 'products': 
				code = 3; 
				break;
			case 'zones': 
				code = 4; 
				break;
			case 'employees':
				code = 5;
				break;
		}
		return code;
	},
	
	create: function(objectName){
		$.get( urlapi + objectName + "?schema=blank",
		function(tempXml) {
			var objectCode = webService.codeReturn(objectName);
			var objectChildren = $(tempXml).children().children()[0];
			var childLength = objectChildren.children.length;
			var lastArray = childLength - 1;
			var associationExistence = 0;
				
			if ( objectChildren.children[lastArray].nodeName == 'associations' ){
				var associationChildren = objectChildren.children[lastArray].children[0].children[0];
				var associationLength = associationChildren.children.length;
				associationExistence = 1;
			}	
			for ( i = 0 ; i < childLength ; i++ ){
				if ( i == lastArray && associationExistence == 1 ){
					for ( j = 0 ; j < associationLength ; j++ ){
						if ( associationChildren.children[j].nodeName == 'id' ){
							switch(objectName){
								case 'customers' : 
									associationChildren.children[j].innerHTML = objectChildren.children[1].innerHTML; 
									break;
								case 'orders' : 
									associationChildren.children[j].innerHTML = objectChildren.children[0].innerHTML; 
									break;
							}
							continue;
						}
						associationChildren.children[j].innerHTML = objectData[objectCode][i+j];
					}
				}
				else{
					objectChildren.children[i].innerHTML = objectData[objectCode][i];
				}
			}
			var textData = webService.xmlToString(tempXml); 
			$.ajax({
				url: urlapi + objectName,
				type: 'post',
				dataType: 'text',
				data : textData,
				async : false,
				success: function(){
					console.log("Create success!");
				},
				error: function(){
					console.log("Create error!");
				}
			});
		},
		'xml');
	},
	
	readJson: function(objectName){
		var result;
		$.ajax({
			url: urlapi + objectName + '?output_format=JSON',
			type: 'get',
			dataType: 'json',
			async : false,
			success: function(tempXml){
				console.log("Read success!");
				result = tempXml;
			},
			error: function(){
				console.log("Read  error!");
			}
		});
		return result;
	},
	
	readIdJson: function(objectName,id){
		var result;
		$.ajax({
			url: urlapi + objectName + '/' + id + '?output_format=JSON',
			type: 'get',
			dataType: 'json',
			async : false,
			success: function(tempXml){
				console.log("Read success!");
				result = tempXml;
			},
			error: function(){
				console.log("Read  error!");
			}
		});
		return result;
	},
	
	readId: function(objectName,id){
		var result;
		$.ajax({
			url: urlapi + objectName + '/' + id,
			type: 'get',
			dataType: 'xml',
			async : false,
			success: function(tempXml){
				console.log("Read id success!");
				result = tempXml;
			},
			error: function(){
				console.log("Read id error!");
			}
		});
		return result;
	},
	
	updateId: function(objectName,id){
		var tempXml = readId(objectName, id);
		var objectCode = codeReturn(objectName);
		var objectChildren = $(tempXml).children().children()[0];
		var childLength = objectChildren.children.length;
		
		for ( i = 0 ; i < childLength ; i++ ){	
			if ( objectData[objectCode][i] !== '' ){
				objectChildren.children[i].innerHTML = objectData[objectCode][i];	
			}			
		}
		var textData = webService.xmlToString(tempXml); 
		console.log(textData);
		$.ajax({
			url: urlapi + objectName + '/' + id,
			type: 'put',
			dataType: 'text',
			async : false,
			data: textData,
			success: function(){
				console.log("Update success!");
			},
			error: function(){
				console.log("Update error!");
			}
		});
	},
	
	productImage: function(){
		$.getJSON(url, 
			function(datas){
				var products = datas['products'];
				var html='';
				for(i = 0; i < products.length; i++) {
					var idProduct = products[""+i+""]["id"];
					var setUrlProducts = "http://ARMMR8JEW5FLK7AS63FLHUU72I29QDXP@go-obat.com/markets/api/products/"+idProduct+"?output_format=JSON";
					$.getJSON(setUrlProducts, 
						function(setUrlProduct){
							var Detailproductsname ='';
							var Detailproductsnamecategori ='';
							var apiIdProduct = setUrlProduct["product"]["id"];
							var apiIdImage = setUrlProduct["product"]["associations"]["images"][0]["id"];
							var setUrlImageProduts = "http://go-obat.com/markets/api/images/products/"+apiIdProduct+"/"+apiIdImage+"/small_default?ws_key=ARMMR8JEW5FLK7AS63FLHUU72I29QDXP";
							Detailproductsname += '<tr id="" /><td><img src="'+setUrlImageProduts+'"></td><td>ID '+ setUrlProduct["product"]["id"] +' nama produk '+ setUrlProduct["product"]["name"] +' id kategori = '+ setUrlProduct["product"]["associations"]["categories"][0]["id"]+' id gambar= '+ setUrlProduct["product"]["associations"]["images"][0]["id"]+'</td></tr>';
							Detailproductsnamecategori += ' id kategori = '+ setUrlProduct["product"]["associations"]["categories"][0]["id"]+'';
							Detailproductsname += '<div class="col-md-3 col-sm-6 hero-feature"><div class="thumbnail"><img src="img/logo.PNG" alt=""><div class="caption">'+ setUrlProduct["product"]["id"] +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><p><a href="#" class="btn btn-primary">Buy Now!</a> <a href="#" class="btn btn-default">More Info</a></p></div></div></div>';
							$('#Detailproductsname').append(Detailproductsname); 
							$('#categories').append(Detailproductsnamecategori);
						}
					);
					html += '<div id="div'+ products[""+i+""]["id"] +'" />'+ products[""+i+""]["id"] +'</div>';	
				}
			}
		);
	}
	
	
};
