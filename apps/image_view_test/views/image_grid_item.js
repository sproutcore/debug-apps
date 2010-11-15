// ==========================================================================
// Project:   ImageViewTest.CategoryGridItem
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ImageViewTest */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
ImageViewTest.ImageGridItemView = SC.View.extend(SC.ContentDisplay, SC.Control,
/** @scope ImageViewTest.CategoryGridItem.prototype */
{
  classNames: 'image-grid-item'.w(),
  
  createChildViews: function() {
    console.log("ImageGridItemView: creating child view");
    var childViews = [],
    view,
    content = this.get('content'),
    height = this.get('frame').height - 10;
    
    view = this.createChildView(
    SC.ImageView.design({
      layout: {
        centerX: 0,
        width: height * 1.3333333,
        top: 5,
        bottom: 5
      },
      frameDidChange: function() {
        var frame = this.get('frame');
        
        this.adjust('width', (frame.height - 10) * 1.333333);
      }.observes('frame'),
      canLoadInBackground: ImageViewTest.sourceController.get('canLoadInBackground'),
      useCanvas: ImageViewTest.sourceController.get('useCanvas'),
      wantsImageStored: ImageViewTest.sourceController.get('wantsImageStored'),
      valueBinding: SC.Binding.oneWay('*parentView.content.src')
    }));
    this.set('imageView', view);
    childViews.push(view);

    view = this.createChildView(
    SC.LabelView.design({
      layout: {
        right: 5,
        bottom: 5,
        width: 100,
        height: 19
      },
      valueBinding: SC.Binding.oneWay('*parentView.imageView.status'),
      textAlign: SC.ALIGN_RIGHT
    }));
    childViews.push(view);
    
    this.set('childViews', childViews);
  }
});
