// ==========================================================================
// Project:   ImageViewTest.CategoryGridItem
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ImageViewTest */

/** @class

  @extends SC.View
*/
ImageViewTest.ImageGridItemView = SC.View.extend(SC.ContentDisplay, SC.Control,
/** @scope ImageViewTest.CategoryGridItem.prototype */
{
  classNames: 'image-grid-item'.w(),

  createChildViews: function() {
    var childViews = [],
    view,
    content = this.get('content'),
    height = this.get('frame').height - 10,
    scale = this.getPath('displayDelegate.scale');

    view = this.createChildView(
    SC.ImageView.design({
      layout: {
        centerX: 0,
        width: height,
        top: 5,
        bottom: 5
      },

      frameDidChange: function() {
        var frame = this.get('frame');

        this.adjust('width', frame.height); //(frame.height - 10) * 1.333333);
      }.observes('frame'),

      canLoadInBackground: ImageViewTest.sourceController.get('canLoadInBackground'),
      useCanvas: ImageViewTest.sourceController.get('useCanvas'),
      // wantsImageStored: ImageViewTest.sourceController.get('wantsImageStored'),
      scaleBinding: SC.Binding.oneWay('ImageViewTest.sourceController.computedScale'),
      // offsetXBinding: SC.Binding.oneWay('ImageViewTest.sourceController.computedOffsetX'),
      // offsetYBinding: SC.Binding.oneWay('ImageViewTest.sourceController.computedOffsetY'),
      // rotationBinding: SC.Binding.oneWay('ImageViewTest.sourceController.computedRotation'),
      alignBinding: SC.Binding.oneWay('ImageViewTest.sourceController.align'),
      valueBinding: SC.Binding.oneWay('*parentView.content.src'),
      backgroundColorBinding: SC.Binding.oneWay('ImageViewTest.sourceController.backgroundColor')
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
