// ==========================================================================
// Project:   ImageViewTest - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ImageViewTest */

// This page describes the main user interface for your application.  
ImageViewTest.mainPage = SC.Page.design({
  gridView: SC.outlet('mainPane.imagesView.contentView'),

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'title canLoadInBackground canLoadInBackgroundSwitch useCanvas useCanvasSwitch wantsImageStored wantsImageStoredSwitch numberOfImagesField numberOfImages imagesView columnWidthSlider'.w(),
   
    title: SC.LabelView.design({
      classNames: 'title'.w(),
      layout: {
        height: 30,
        width: 300,
        top: 20,
        centerX: 0
      },
      value: "SC.ImageView Test",
      textAlign: SC.ALIGN_CENTER
    }),
    
    numberOfImages: SC.LabelView.design({
      classNames: 'field-label'.w(),
      layout: {
        top: 70,
        left: 20,
        width: 140,
        height: 24
      },
      value: 'Number of Images',
      textAlign: SC.ALIGN_RIGHT
    }),
    
    numberOfImagesField: SC.TextFieldView.design({
      layout: {
        top: 70,
        left: 170,
        width: 50,
        height: 24
      },
      valueBinding: SC.Binding.from('ImageViewTest.sourceController.numberOfImages')
    }),

    canLoadInBackground: SC.LabelView.design({
      classNames: 'property-label'.w(),
      layout: {
        top: 110,
        left: 20,
        width: 140,
        height: 24
      },
      value: 'canLoadInBackground',
      textAlign: SC.ALIGN_RIGHT
    }),
    
    canLoadInBackgroundSwitch: SC.SegmentedView.design({
      layout: {
        top: 110,
        left: 170,
        width: 100,
        height: 24
      },
      align: SC.ALIGN_LEFT,
      items: [{title: 'YES', value: true}, {title: 'NO', value: false}],
      itemTitleKey: 'title',
      itemValueKey: 'value',
      valueBinding: SC.Binding.from('ImageViewTest.sourceController.canLoadInBackground')
    }),

    useCanvas: SC.LabelView.design({
      classNames: 'property-label'.w(),
      layout: {
        top: 150,
        left: 20,
        width: 140,
        height: 24
      },
      value: 'useCanvas',
      textAlign: SC.ALIGN_RIGHT
    }),
    
    useCanvasSwitch: SC.SegmentedView.design({
      layout: {
        top: 150,
        left: 170,
        width: 100,
        height: 24
      },
      align: SC.ALIGN_LEFT,
      items: [{title: 'YES', value: true}, {title: 'NO', value: false}],
      itemTitleKey: 'title',
      itemValueKey: 'value',
      valueBinding: SC.Binding.from('ImageViewTest.sourceController.useCanvas')
    }),

    wantsImageStored: SC.LabelView.design({
      classNames: 'property-label'.w(),
      layout: {
        top: 190,
        left: 20,
        width: 140,
        height: 24
      },
      value: 'wantsImageStored',
      textAlign: SC.ALIGN_RIGHT
    }),
    
    wantsImageStoredSwitch: SC.SegmentedView.design({
      layout: {
        top: 190,
        left: 170,
        width: 100,
        height: 24
      },
      align: SC.ALIGN_LEFT,
      items: [{title: 'YES', value: true}, {title: 'NO', value: false}],
      itemTitleKey: 'title',
      itemValueKey: 'value',
      valueBinding: SC.Binding.from('ImageViewTest.sourceController.wantsImageStored')
    }),

    columnWidthSlider: SC.SliderView.design({
      layout: {
        bottom: 5,
        right: 20,
        height: 24,
        width: 200
      },
      valueBinding: SC.Binding.from('ImageViewTest.imagesController.columnWidth'),
      minimum: 60,
      maximumBinding: SC.Binding.oneWay('.parentView.imagesView.frame').transform(
        function(frame) {
          return frame.width - 20;
        }),
      step: 20
    }),
    
    imagesView: SC.ScrollView.design({
      classNames: 'images-scroll-view'.w(),
      layout: {
        left: 280,
        right: 20,
        top: 70,
        bottom: 35
      },
      contentView: SC.GridView.design({
        backgroundColor: '#FFFFFF',
        rowHeightBinding: SC.Binding.oneWay('ImageViewTest.imagesController.rowHeight'),
        columnWidthBinding: SC.Binding.oneWay('ImageViewTest.imagesController.columnWidth'),
        contentBinding: SC.Binding.oneWay('ImageViewTest.imagesController.arrangedObjects'),
        exampleView: ImageViewTest.ImageGridItemView
      })
    })
  })

});
