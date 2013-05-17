var Room = function() {
	var walkables = [];
	var backdrop = false;
	var items = [];
	var entryPoints = [];

	var assets = [];

	this.setBackdrop = function(image) {
		backdrop = image;
	}
	this.addWalkable = function(poly) {
		walkables.push(poly);
	}
	this.addItem = function(item) {
		items.push(item);
	}
	this.getBackdrop = function() {
		return backdrop; 
	}
	this.getItems = function() {
		return items;
	}
	this.getWalkables = function() {
		return walkables;
	}
	this.getEntryPoints = function() {
		return entryPoints;
	}
	this.load = function() {
		Crafty.background('url("' + backdrop + '")');

		for (var walkable_id in walkables) {
			if (walkables.hasOwnProperty(walkable_id)) {
				assets.push(Crafty.e("2D, Walkable").Walkable(walkables(walkable_id));
			}
		}

		for (var item_id in items) {
			if (items.hasOwnProperty(item_id)) {
				var item = items[item_id];
				assets.push(Crafty.e(item.classes).Item(item.poly);
			}
		}
		
		for (var thing_id in things) {
			if (things.hasOwnProperty(item_id)) {
				var item = items[item_id];
				assets.push(Crafty.e(item.classes).Item(item.poly);
			}
		}

	}
	return this;
}