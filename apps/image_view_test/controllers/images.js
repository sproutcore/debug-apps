// ==========================================================================
// Project:   ImageViewTest.imagesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ImageViewTest */

/** @class
  
  @extends SC.ArrayController
*/
ImageViewTest.imagesController = SC.ArrayController.create(SC.CollectionRowDelegate, 
/** @scope ImageViewTest.imagesController.prototype */ {
  contentBinding: SC.Binding.oneWay('ImageViewTest.sourceController.images').multiple(),
  columnWidth: 440,
  rowHeight: function() {
    return this.get('columnWidth') * 0.75;
  }.property('columnWidth').cacheable()
});
