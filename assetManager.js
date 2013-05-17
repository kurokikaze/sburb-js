var assetManager = function(definitionFile, callback) {
    var manager = this;
    this.assets = [];

    $.ajax({
            'url' : definitionFile, 
            'success' : function(data) {
                console.log('Got assets definition');
                manager.assets = data;
                callback(manager);
            }, 
            'dataType' : 'jsonp',
            'jsonp' : 'loadAssets'}
    );

    this.getImages = function() {
        var images = [];
        for (asset_id in manager.assets) {
            if (manager.assets.hasOwnProperty(asset_id)) {
                images.push(manager.assets[asset_id].image);
            }
        }
        return images;
    }

    return this;
}
