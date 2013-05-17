var assetManager = function(definitionFile, callback) {
    var manager = this;
    this.assets = [];

    /*$.ajax({
            'url' : definitionFile, 
            'success' : function(data) {
                console.log('Got assets definition');
                manager.assets = data;
                callback(manager);
            }, 
            'error' : function(err, errorMessage) {
                console.log('JSONP Error! ' + errorMessage);
                console.log(err.error());
            },
            'dataType' : 'jsonp',
            'jsonp' : 'loadAssets'
        }
    );*/
    $.getJSON(definitionFile,
        function(data) {
            manager.assets = data;
            callback(manager);
    });

    this.getImages = function() {
        var images = [];
        for (var asset_id in manager.assets) {
            if (manager.assets.hasOwnProperty(asset_id)) {
                images.push(manager.assets[asset_id].image);
            }
        }
        return images;
    };

    return this;
};