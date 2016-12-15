var employees = {
    // Application Constructor
    initialize: function() {
        this.getEmployees();
    },

    getEmployees: function(u,p) {
		var u = u;
		var p = p;
        var url = 'http://ARMMR8JEW5FLK7AS63FLHUU72I29QDXP@go-obat.com/markets/api/employees?output_format=JSON';
		$.getJSON(url, 
			function(datas){
				for(i=0; i<datas['employees'].length ; i++){
					datas['employees'][i];
					var login;
					var urlD = 'http://go-obat.com/markets/api/employees/'+datas['employees'][i]['id']+'?output_format=JSON';
					//console.log(urlD);
					$.getJSON(urlD, function(getData){
					
						$.each( getData, function( key, value ) {
						  var email = value['email'];
						  var passwd = value['passwd'];
						  var emplodata = {'email':email,'passwd':passwd};
						  login = Employees.getEmployee(emplodata,u,p);						  
						});
					});
					if (login==true)
						{break;}
				}
				
		});
    },
	getEmployee: function(emplodata,u){
		
		var check;
		
		console.log(emplodata['email']);
		console.log(emplodata['passwd']);
		console.log(u);

		if (u[0]!==emplodata['email'] & u[1]!==emplodata['passwd']){
			console.log('berhasil login');
			check=true;
		}else{
			console.log('gagal login');
			check=false;
		}
		return check;
		// console.log(u);
		// console.log(p);
	}
	
};
