var egbertsRoom = new Room();
egbertsRoom.setBackdrop('egbert_room.gif');
egbertsRoom.addWalkable(new Crafty.polygon([0,311], [298, 170], [649, 292], [649, 360], [470, 449], [220, 449]));
egbertsRoom.addItem({
	'classes':'2D, DOM, Item, magician_chest',
	'poly' : new Crafty.polygon([8,89],[95,130],[162,96],[93,48]),
	'attr' : {x:510, y:230, z:212}
});
egbertsRoom.addItem({
	'classes':'2D, DOM, Item, magician_chest',
	'poly' : new Crafty.polygon([8,89],[95,130],[162,96],[93,48]),
	'attr' : {x:510, y:230, z:212}
});
egbertsRoom.addItem({
	'classes':'2D, DOM, Item, cd_rack',
	'poly' : new Crafty.polygon([1,133],[24,144],[43,130],[22,119]),
	'attr' : {x:510, y:230, z:212}
});
egbertsRoom.addItem({
	'classes':'2D, DOM, Item, magician_chest',
	'poly' : new Crafty.polygon([8,89],[95,130],[162,96],[93,48]),
	'attr' : {x:510, y:230, z:212}
});