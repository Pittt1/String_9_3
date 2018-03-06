var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = 'Triceratops';

var tricUpperCase = dinosaur.toUpperCase();

console.log(tricUpperCase);

var tricForVelo = text.replace('Velociraptor', 'Triceratops'),
	halfOfSentence = tricForVelo.length/2;

console.log(halfOfSentence);

var halfTricForVelo = tricForVelo.slice(0, halfOfSentence);

console.log(halfTricForVelo);