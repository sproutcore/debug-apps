// ==========================================================================
// Project:   ImageViewTest.sourceController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ImageViewTest */

/** @class
  
  @extends SC.ObjectController
*/
ImageViewTest.sourceController = SC.ObjectController.create(
/** @scope ImageViewTest.imagesController.prototype */
{

  images: function() {
    var sampleURLs = ["http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/canyon-public-domain-images-pictures/zion-hiker-the-sweetie-hiking-in-zion-narrows_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/canyon-public-domain-images-pictures/winter-at-bryce-canyon_w725_h544.jpg", "http://www.public-domain-image.com/cache/fauna-animals-public-domain-images-pictures/prairie-dog-public-domain-images-pictures/prairie-dog-pups_w725_h483.jpg", "http://www.public-domain-image.com/cache/fauna-animals-public-domain-images-pictures/prairie-dog-public-domain-images-pictures/prairie-rattlesnake-crotalus-viridis_w725_h484.jpg", "http://www.public-domain-image.com/cache/fauna-animals-public-domain-images-pictures/tigers-public-domain-images-pictures/bengal-tiger_w725_h486.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/field-public-domain-images-pictures/wooden-logs-in-field_w725_h483.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/field-public-domain-images-pictures/wheat-yellow-in-field_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/field-public-domain-images-pictures/vineyards_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/autumn-public-domain-images-pictures/old-trees-with-leaves-on-ground-in-autumn_w725_h484.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/canyon-public-domain-images-pictures/yaki-point-at-the-grand-canyon_w725_h547.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/canyon-public-domain-images-pictures/grand-canyons-overlook-railings-pointing_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/coast-public-domain-images-pictures/sand-ocean-tidepools-sea-swimming-swimmers-waves_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/coast-public-domain-images-pictures/waves-breaking-rocks_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/sand-public-domain-images-pictures/sand-footstep_w725_h482.jpg"];
    var samples = [];
    for (var i = this.get('numberOfImages') - 1; i >= 0; i--) {
      samples[i] = SC.Object.create({
        src: sampleURLs[i % sampleURLs.length]
      });
    }
    return samples;
  }.property('numberOfImages').cacheable(),

  useCanvas: YES,

  wantsImageStored: YES,

  canLoadInBackground: YES,

  numberOfImages: 10,

  imageViewPropertyDidChange: function() {
    // Reload the gridView
    var gv = ImageViewTest.getPath('mainPage.gridView');
    gv.reload();
  }.observes('canLoadInBackground', 'useCanvas', 'wantsImageStored')
});
