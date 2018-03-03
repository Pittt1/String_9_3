var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = 'Triceratops';

var tricUpperCase = dinosaur.toUpperCase();

console.log(tricUpperCase);

var tricForVelo = text.replace('Velociraptor', 'Triceratops');

console.log(tricForVelo.length/2);

var halfTricForVelo = tricForVelo.slice(0, 72);

console.log(halfTricForVelo);