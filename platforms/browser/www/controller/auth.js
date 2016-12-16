var auth = class auth{
    // Application Constructor
	constructor(x, y) {
    this.uname = x;
    this.upass = y;
	}
    initialize(){
        return this.doLogin(u,p);
    }

    doLogin(u,p) {
		//return this.uname+' ini '+this.upass;
		//var username = u;
		var items = [u,p];
        $.getScript("../../controller/employees.js").done(function( script, textStatus) {
			//console.log( script+textStatus+username+p );
			employees.getEmployees(items);
		  })
		  .fail(function( jqxhr, settings, exception ) {
			$( "div.log" ).text( "Triggered ajaxError handler." );
		});
    }
};
