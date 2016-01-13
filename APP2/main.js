var fs = require('fs');

$('#myButton').on('click',function(){
	var firstname = $('#exampleInputName').val();
	var lastname = $('#exampleInputSurname').val();
	var email = $('#exampleInputEmail').val();
	var toSave = {poczta: email, imie: firstname, nazwisko: lastname}

	fs.writeFile("message.json", JSON.stringify(toSave, null, 2), function(error){
		if(error) throw err;
		console.log("File saved");
		
		$('#imie').text(toSave.imie);
		$('#nazwisko').text(toSave.nazwisko);
		$('#email').text(toSave.poczta);
	})
});

$("#myHeader").load("./views/header.html", function(){
		$('#imie').text('Nieznane');
		$('#nazwisko').text('Nieznane');
		$('#email').text('Nieznane');
});