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
    childViews: 'title canLoadInBackground canLoadInBackgroundSwitch useCanvas useCanvasSwitch wantsImageStored wantsImageStoredSwitch numberOfImagesField numberOfImages imagesView scale scaleRadio scaleSlider scaleValue offsetX offsetXSlider offsetXValue offsetY offsetYValue rotation rotationSlider rotationValue offsetYSlider columnWidthSlider'.w(),

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

    scale: SC.LabelView.design({
      classNames: 'property-label'.w(),
      layout: {
        top: 230,
        left: 20,
        width: 140,
        height: 24
      },
      value: 'scale',
      textAlign: SC.ALIGN_RIGHT
    }),

    scaleRadio: SC.RadioView.design({
      layout: {
        top: 230,
        left: 170,
        width: 140,
        height: 125
      },
      items: [
        { title: "SC.FILL",
        value: SC.FILL },
        { title: "SC.FIT_WIDTH",
        value: SC.FIT_WIDTH },
        { title: "SC.FIT_HEIGHT",
        value: SC.FIT_HEIGHT },
        { title: "SC.FIT_SMALLEST",
        value: SC.FIT_SMALLEST },
        { title: "SC.FIT_LARGEST",
        value: SC.FIT_LARGEST },
        { title: "by amount",
        value: 'use_percentage' }],
      itemTitleKey: 'title',
      itemValueKey: 'value',
      valueBinding: SC.Binding.from('ImageViewTest.sourceController.scale')
    }),

    scaleSlider: SC.SliderView.design({
      layout: {
        top: 355,
        left: 170,
        width: 120,
        height: 24
      },
      valueBinding: SC.Binding.from('ImageViewTest.sourceController.scalePercentage'),
      isEnabledBinding: SC.Binding.oneWay('ImageViewTest.sourceController.scale').transform(
        function(scale) {
          return scale === "use_percentage";
        }),
      minimum: 0.0,
      maximum: 2.0,
      step: 0.01
    }),

    scaleValue: SC.LabelView.design({
      layout: { top: 355, left: 300, width: 80, height: 24 },
      valueBinding: SC.Binding.oneWay('ImageViewTest.sourceController.scalePercentage').transform(
        function(value) {
          return "%@%".fmt(Math.round(value * 100));
      })
    }),

    offsetX: SC.LabelView.design({
      classNames: 'property-label'.w(),
      layout: {
        top: 390,
        left: 20,
        width: 140,
        height: 24
      },
      value: 'offsetX',
      textAlign: SC.ALIGN_RIGHT
    }),

    offsetXSlider: SC.SliderView.design({
      layout: {
        top: 390,
        left: 170,
        width: 120,
        height: 24
      },
      valueBinding: SC.Binding.from('ImageViewTest.sourceController.offsetX'),
      minimum: 0,
      maximum: 200,
      step: 2// ,
      //       isEnabledBinding: SC.Binding.oneWay('ImageViewTest.sourceController.scale').transform(
      //         function(scale) {
      //           return scale !== SC.FILL;
      //         })
    }),

    offsetXValue: SC.LabelView.design({
      layout: { top: 390, left: 300, width: 80, height: 24 },
      valueBinding: SC.Binding.oneWay('ImageViewTest.sourceController.computedOffsetX').transform(
        function(value) {
          return "%@px".fmt(value);
      })
    }),

    offsetY: SC.LabelView.design({
      classNames: 'property-label'.w(),
      layout: {
        top: 430,
        left: 20,
        width: 140,
        height: 24
      },
      value: 'offsetY',
      textAlign: SC.ALIGN_RIGHT
    }),

    offsetYSlider: SC.SliderView.design({
      layout: {
        top: 430,
        left: 170,
        width: 120,
        height: 24
      },
      valueBinding: SC.Binding.from('ImageViewTest.sourceController.offsetY'),
      minimum: 0,
      maximum: 200,
      step: 1// ,
      //       isEnabledBinding: SC.Binding.oneWay('ImageViewTest.sourceController.scale').transform(
      //         function(scale) {
      //           return scale !== SC.FILL;
      //         })
    }),

    offsetYValue: SC.LabelView.design({
      layout: { top: 430, left: 300, width: 80, height: 24 },
      valueBinding: SC.Binding.oneWay('ImageViewTest.sourceController.computedOffsetY').transform(
        function(value) {
          return "%@px".fmt(value);
      })
    }),

    rotation: SC.LabelView.design({
      classNames: 'property-label'.w(),
      layout: {
        top: 470,
        left: 20,
        width: 140,
        height: 24
      },
      value: 'rotation',
      textAlign: SC.ALIGN_RIGHT
    }),

    rotationSlider: SC.SliderView.design({
      layout: {
        top: 470,
        left: 170,
        width: 120,
        height: 24
      },
      valueBinding: SC.Binding.from('ImageViewTest.sourceController.rotation'),
      minimum: 0,
      maximum: 720,
      step: 10
    }),

    rotationValue: SC.LabelView.design({
      layout: { top: 470, left: 300, width: 80, height: 24 },
      valueBinding: SC.Binding.oneWay('ImageViewTest.sourceController.computedRotation').transform(
        function(value) {
          return "%@°".fmt(value);
      })
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
        left: 400,
        right: 20,
        top: 70,
        bottom: 35
      },
      contentView: SC.GridView.design({
        backgroundColor: '#FFFFFF',
        rowHeightBinding: SC.Binding.oneWay('ImageViewTest.imagesController.rowHeight'),
        columnWidthBinding: SC.Binding.oneWay('ImageViewTest.imagesController.columnWidth'),
        contentBinding: SC.Binding.oneWay('ImageViewTest.imagesController.arrangedObjects'),
        // scaleBinding: SC.Binding.oneWay('ImageViewTest.sourceController.computedScale'),
        //   offsetXBinding: SC.Binding.oneWay('ImageViewTest.sourceController.computedOffsetX'),
        exampleView: ImageViewTest.ImageGridItemView
      })
    })
  })

});
