var employees = {
    // Application Constructor
    initialize: function() {
        this.getEmployees();
    },

    getEmployees: function(u,p) {
		var u = u;
		var p = p;
        var url = 'http://ARMMR8JEW5FLK7AS63FLHUU72I29QDXP@go-obat.com/markets/api/employees?output_format=JSON';
		var dataJson = webService.readJson('employees');
		console.log(dataJson.employees.length);
		
		for(i=0;i<dataJson.employees.length;i++){
			var dataJsonId = webService.readIdJson('employees',dataJson.employees[i].id);
			var email = dataJsonId.employee.email;
			var passwd = dataJsonId.employee.passwd;
			var emplodata = {'email':email,'passwd':passwd};
			var checkAuth = employees.getEmployee(emplodata,u,p);
			if (checkAuth==true){
			break;
			}	
			console.log(checkAuth);
		}	
    },
	
	getEmployee: function(emplodata,u){
		
		var check;
		
		console.log(emplodata['email']);
		console.log(emplodata['passwd']);
		console.log(u[1]);

		if (u[0]==emplodata['email'] & u[1]==emplodata['passwd']){
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
