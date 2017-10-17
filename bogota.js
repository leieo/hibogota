function bogota() {
	
var prenoms = ['Paul', 'Adèle', 'Lucy', 'Aurélia', 'Carolyn','Leïla', 'Laura'];
var verbes = ['aime', 'adore', 'déteste', 'idolâtre', 'exècre', 'transforme', 'métabolise'];
var complements = ['les chats', 'les cookies', 'le foot', 'Pokémon Go', 'la luxure', 'Bogota'];

var qui = prenoms[Math.round(Math.random()*(prenoms.length-1))];
var fait = verbes[Math.round(Math.random()*(verbes.length - 1))];
var quoi = complements[Math.round(Math.random()*(complements.length - 1))];

document.getElementById('hibogota').innerHTML = qui + ' ' + fait + ' ' + quoi + ' !'
	
}



