

var urlOngkir = 'http://pro.rajaongkir.com/api';
var keyOngkir = "7f782820f5fded6e8b75e1374d813d3b";
// var key = "ARMMR8JEW5FLK7AS63FLHUU72I29QDXP";
// var urlapi = 'http://' + key + '@go-obat.com/markets/api/';

var cookieKey = "vfvkovmbihuaqhrlmw61vpesapcphdpmriqytzjvyy5t9le18tbgg1qg";
var key = "S9YJQ4ZVKBK7CZM5C8EM1YQ2QH87Z5IY";
var urlapi = 'http://' + key + '@go-obat.com/2016/api/';


		
var webService = {
    // Application Constructor
    initialize: function() {
        $.ajaxSetup({
			cache: true ,
			beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', ("Basic ".concat(btoa(key))));
			   
				xhr.setRequestHeader("key", keyOngkir);
				xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			},
		});	
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
	
	filterGenerator: function(filterArray){
		var filterUrl = '';
		for(var i=0;i<filterArray.length;i=i+2){
			var filterStr = 'filter['+filterArray[i]+']='+filterArray[i+1];
			filterUrl += filterStr;
			if (filterArray.length > 2 && filterArray.length-i != 2){
				filterUrl += '&';
			}
		}
		return filterUrl='?'+filterUrl;
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
			case 'addresses': 
				code = 3; 
				break;
			case 'zones': 
				code = 4; 
				break;
			case 'employees':
				code = 5;
				break;
			case 'stock_availables':
				code = 6;
				break;
			case 'order_carriers':
				code = 7;
				break;
			case 'order_details':
				code = 8;
				break;
			case 'order_histories':
				code = 9;
				break;
			case 'order_owners':
				code = 10;
				break;				
			case 'order_invoices':
				code = 11;
				break;			
			case 'order_payments':
				code = 12;
				break;
		}
		return code;
	},
	
	search: function(objectName,filterArray){
		var filterUrl = webService.filterGenerator(filterArray);
		var result = [0];
		$.ajax({
			url: urlapi + objectName + '/' + filterUrl,
			type: 'get',
			dataType: 'xml',
			async : false,
			success: function(tempXml){
				if($(tempXml).children().children()[0].children.length > 0){
					 for(var i=0 ; i< $(tempXml).children().children()[0].children.length ; i++){
						result[i] = $(tempXml).children().children()[0].children[i].id;
					}
				}
			},
			error: function(){
				 result = 0;
			}
		});
		return result;
	},
	
	searchPromise: function(data){
		var ids = [0];
		object = $(data).children().children()[0].children;
		for(var i=0 ; i< object.length ; i++){
			ids[i] = object[i].id;
		}
		return ids;
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
									associationChildren.children[j].textContent = objectChildren.children[1].textContent; 
									break;
								case 'orders' : 
									//associationChildren.children[j].textContent = objectChildren.children[0].textContent; 
									
									break;
							}
							continue;
						}
						associationChildren.children[j].textContent = objectData[objectCode][i+j];
					}
				}
				else{
					objectChildren.children[i].textContent = objectData[objectCode][i];
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
				},
				error: function(){
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
				result = tempXml;
			},
			error: function(){
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
				result = tempXml;
			},
			error: function(){
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
				result = tempXml;
			},
			error: function(){
			}
		});
		return result;
	},
	
	readPromiseJson: function(objectName,filter){
		return $.ajax({
			url: urlapi + objectName + '/' + filter + '&output_format=JSON',
			type: 'get',
			dataType: 'json'
		});
	},
	
	readPromiseXml: function(objectName,filter){
		return $.ajax({
			url: urlapi + objectName + '/' + filter,
			type: 'get',
			dataType: 'xml'
		});
	},
	
	readPromiseRajaongkir: function(objectName,id){
		if(objectName == 'province'){
			var urlObject = urlOngkir+'/province';
		}
		else if(objectName == 'city'){
			var urlObject = urlOngkir+'/'+'city?province='+id;
		}
		else if(objectName == 'subdistrict'){
			var urlObject = urlOngkir+'/'+'subdistrict?city='+id;
		}
		return $.ajax({
			url: urlObject,
			type: 'get',
			dataType: 'json'
		});
	},
	readCostRajaongkir: function(array){
		var parameter = { origin: array[0], // asal city/subdistrict
					originType: array[1], // city/subdistrict
					destination: array[2], // tujuan city/subdistrict
					destinationType:array[3], // city/subdistrict
					weight: array[4],
					courier: array[5] 
					};
		
		return $.ajax({
			url: urlOngkir + '/cost',
			type: 'post',
			dataType: 'json',
			data : parameter
		});
	},
	updateId: function(objectName,id){
		var tempXml = webService.readId(objectName, id);
		var objectCode = webService.codeReturn(objectName);
		var objectChildren = $(tempXml).children().children()[0];
		var rowNode = tempXml.getElementsByTagName('cart_row');
		var childLength = objectChildren.children.length;
		
		for ( i = 0 ; i < childLength ; i++ ){	
			if ( objectData[objectCode][i] !== '' ){ //ada data ga?
				if(objectName == 'carts' && i == 19){ //carts bukan? id_product bukan?
					for(j=0;j<rowNode.length;j++){//cek satu2
						if ( rowNode[j].children[0].textContent == objectData[objectCode][19]){//id_product sama ga?
							rowNode[j].children[3].textContent = objectData[objectCode][22];//input ke qty
							break;//keluar dari looping
						}
						else{//id product beda
							if(rowNode.length-j == 1){ //tadi data terakir?
								/* kalo data terakir, bikin element baru, nambah cart_row trus lgsg isi datanya*/
								var oldNode = rowNode[0];
								var newNode = oldNode.cloneNode(true);
								var urlTemp = 'http://go-obat.com/markets/api/products/';
								tempXml.getElementsByTagName('cart_rows')[0].appendChild(newNode);
								rowNode[j+1].children[0].textContent = objectData[objectCode][19];
								rowNode[j+1].children[0].setAttribute('xlink:href',urlTemp+objectData[objectCode][19]);
								rowNode[j+1].children[1].textContent = objectData[objectCode][20];
								rowNode[j+1].children[1].setAttribute('xlink:href',urlTemp+objectData[objectCode][20]);
								rowNode[j+1].children[2].textContent = objectChildren.children[1].textContent;
								rowNode[j+1].children[2].setAttribute('xlink:href',urlTemp+objectChildren.children[1].textContent);
								rowNode[j+1].children[3].textContent = rowNode[j+1].children[3].textContent+objectData[objectCode][22];
								break;
							}
							else{//kalo bukan data terakir, lanjut looping j lagi cek yg selanjutnya id_product sama apa ga
								continue;
							}
						}
					}
					//if(data.getElementsByTagName('id_product')[0].textContent == objectData[objectCode][i]){
						
					//}
				}
				else{
					objectChildren.children[i].textContent = objectData[objectCode][i];	
				}
			}			
		}
		var textData = webService.xmlToString(tempXml);
		$.ajax({
			url: urlapi + objectName + '/' + id,
			type: 'put',
			dataType: 'text',
			data : textData,
			success: function(){
			},
			error: function(){
			}
		});
	}
	
	
};
