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
    // Public domain images (these links may break)
    var sampleURLs = [
      sc_static('logo.png'),
      "http://photos.flashbullet.com/Travel/South-Africa/southafrica-31/976337173_687y6-L.jpg",
      "http://photos.flashbullet.com/Travel/South-Africa/southafrica-16/976347476_x4VZ3-L.jpg",
      "http://photos.flashbullet.com/Travel/1st-Anniversary/1stanniversary-52/755025406_YH2yn-L.jpg",
      "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/canyon-public-domain-images-pictures/zion-hiker-the-sweetie-hiking-in-zion-narrows_w725_h544.jpg",
"http://www.public-domain-image.com/cache/people-public-domain-images-pictures/children-kids-public-domain-images-pictures/children-playing_w562_h725.jpg",
"http://www.public-domain-image.com/cache/architecture-public-domain-images-pictures/fountain-public-domain-images-pictures/water-fountain-in-park_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/canyon-public-domain-images-pictures/winter-at-bryce-canyon_w725_h544.jpg", "http://www.public-domain-image.com/cache/fauna-animals-public-domain-images-pictures/prairie-dog-public-domain-images-pictures/prairie-dog-pups_w725_h483.jpg", "http://www.public-domain-image.com/cache/fauna-animals-public-domain-images-pictures/prairie-dog-public-domain-images-pictures/prairie-rattlesnake-crotalus-viridis_w725_h484.jpg", "http://www.public-domain-image.com/cache/fauna-animals-public-domain-images-pictures/tigers-public-domain-images-pictures/bengal-tiger_w725_h486.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/field-public-domain-images-pictures/wooden-logs-in-field_w725_h483.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/field-public-domain-images-pictures/wheat-yellow-in-field_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/field-public-domain-images-pictures/vineyards_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/autumn-public-domain-images-pictures/old-trees-with-leaves-on-ground-in-autumn_w725_h484.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/canyon-public-domain-images-pictures/yaki-point-at-the-grand-canyon_w725_h547.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/canyon-public-domain-images-pictures/grand-canyons-overlook-railings-pointing_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/coast-public-domain-images-pictures/sand-ocean-tidepools-sea-swimming-swimmers-waves_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/coast-public-domain-images-pictures/waves-breaking-rocks_w725_h544.jpg", "http://www.public-domain-image.com/cache/nature-landscapes-public-domain-images-pictures/sand-public-domain-images-pictures/sand-footstep_w725_h482.jpg"];
    var samples = [];
    for (var i = this.get('numberOfImages') - 1; i >= 0; i--) {
      samples[i] = SC.Object.create({
        src: sampleURLs[i % sampleURLs.length]
      });
    }
    return samples;
  }.property('numberOfImages').cacheable(),

  useCanvas: YES,

  // wantsImageStored: YES,

  canLoadInBackground: NO,

  numberOfImages: 4,

  scale: SC.FILL,

  scalePercentage: 1.0,

  align: SC.ALIGN_CENTER,
  // offsetX: 100,
  // 
  // offsetY: 100,
  // 
  // rotation: 360,
  
  backgroundColor: null,

  computedScale: function() {
    var scale = this.get('scale'),
        scalePercentage = this.get('scalePercentage');

    if (scale === "use_percentage") return scalePercentage;
    else return scale;
  }.property('scale', 'scalePercentage').cacheable(),

  // Because SC.SliderView won't take negative values, shift the value from 0 to +200 to -100 to +100
  computedOffsetX: function() {
    var offsetX = this.get('offsetX');

    return offsetX - 100;
  }.property('offsetX').cacheable(),

  // Because SC.SliderView won't take negative values, shift the value from 0 to +200 to -100 to +100
  computedOffsetY: function() {
    var offsetY = this.get('offsetY');

    return offsetY - 100;
  }.property('offsetY').cacheable(),

  // Because SC.SliderView won't take negative values, shift the value from 0 to +720 to -360 to +360
  computedRotation: function() {
    var rotation = this.get('rotation');

    return rotation - 360;
  }.property('rotation').cacheable(),

  scaleDidChange: function() {
    this.set('scalePercentage', 1.0);
    this.set('offsetX', 100);
    this.set('offsetY', 100);
    this.set('rotation', 360);
  }.observes('scale'),

  imageViewPropertyDidChange: function() {
    // Reload the gridView
    var gv = ImageViewTest.getPath('mainPage.gridView');
    gv.reload();
  }.observes('canLoadInBackground', 'useCanvas', 'wantsImageStored')
});
