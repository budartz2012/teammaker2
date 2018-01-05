$(document).ready(function(){

	$('button').on('click', function(e) {
		e.preventDefault();

		let allnames = $('textarea').val().split('\n'),
			namespergroup = Math.ceil(allnames.length / 2),
			allnameslen = allnames.length;

		let numgroups = Math.ceil(allnameslen / namespergroup);
		


		for (let i = 0; i < numgroups; i+=1) {
			$('.groups').append('<div class="group" id="group' + (i+1) + '"><h2>Group ' + (i+1) + '</h2></div>');
		}

		$('.group').each(function() {
			for (let j = 0; j < namespergroup; j+=1) {

				let rand = Math.floor(Math.random() * allnames.length);

				if(allnames[rand]){
					$(this).append('<p>' + allnames[rand] + '</p>');
				}
				allnames.splice(rand, 1);
				console.log(allnames);
			}
		});
	});

});