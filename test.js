fs=require('fs') ;
html2enml=require('./html2enml').convert ;

fs.readFile(__dirname+"/Email.html", 'utf8', function(error, data) {
	html2enml(data, "http://radioflote.com", function(enml) {
		console.log("Looks like things went fine!") ;
		console.log(enml) ;
	}, function(enml) { 
		console.log("ERROR: "+enml) ;
	}) ;

}) ;
