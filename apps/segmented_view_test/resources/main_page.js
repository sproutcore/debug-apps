// ==========================================================================
// Project:   SegmentedViewTest - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals SegmentedViewTest */

// This page describes the main user interface for your application.  
SegmentedViewTest.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'title note label1 label2 segmentedVariable segmentedFixed valueTitle selectedLabel1 selectedLabel2 alignButton addButton removeButton stretchButton shrinkButton makeKeyButton1 isVisibleButton allowsMultipleSelectionButton allowsEmptySelectionButton'.w(),

    title: SC.LabelView.design({
      classNames: 'title'.w(),
      layout: {
        height: 30,
        width: 300,
        top: 20,
        centerX: 0
      },
      value: "SC.SegmentedView Test",
      textAlign: SC.ALIGN_CENTER
    }),
    
    alignButton: SC.SegmentedView.design({
      align: SC.ALIGN_LEFT,
      layout: {
        height: 24,
        width: 340,
        left: 20,
        top: 60
      },
      items: [{
        title: "SC.ALIGN_LEFT",
        value: SC.ALIGN_LEFT,
        width: 110
      },{
        title: "SC.ALIGN_CENTER",
        value: SC.ALIGN_CENTER,
        width: 110
      },{
        title: "SC.ALIGN_RIGHT",
        value: SC.ALIGN_RIGHT,
        width: 110
      }],
      itemTitleKey: "title",
      itemValueKey: "value",
      valueBinding: SC.Binding.from('SegmentedViewTest.alignment')
    }),
    
    isVisibleButton: SC.ButtonView.design({
      layout: { height: 24, width: 150, left: 20, top: 100 },
      title: "isVisible",
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      valueBinding: 'SegmentedViewTest.isVisible'
    }),
    
    allowsMultipleSelectionButton: SC.ButtonView.design({
      layout: { height: 24, width: 150, left: 20, top: 140 },
      title: "allowsMultipleSelection",
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      valueBinding: 'SegmentedViewTest.allowsMultipleSelection'
    }),
    
    allowsEmptySelectionButton: SC.ButtonView.design({
      layout: { height: 24, width: 150, left: 20, top: 180 },
      title: "allowsEmptySelection",
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      valueBinding: 'SegmentedViewTest.allowsEmptySelection'
    }),
    
    note: SC.LabelView.design({
      layout: {
        left: 20,
        height: 72,
        bottom: 20,
        right: 20
      },
      escapeHTML: NO,
      value: "Note: The red borders were added to illustrate the frame of the segmented view."
    }),
    
    makeKeyButton1: SC.ButtonView.design({
      layout: {
        height: 24,
        left: 20,
        width: 110,
        centerY: -20
      },
      title: "Responder",
      icon: sc_static('keyboard--arrow.png'),
      action: 'makeSV1Key',
      target: 'SegmentedViewTest'
    }),
    
     label1: SC.LabelView.design({
      classNames: 'label'.w(),
      layout: {
        height: 24,
        width: 100,
        centerX: 0,
        centerY: -50
      },
      value: "Flexible Width",
      textAlign: SC.ALIGN_CENTER
    }),
    
    segmentedVariable: SC.SegmentedView.design({
      classNames: 'test'.w(),
      layout: {
        height: 24,
        left: 220,
        right: 220,
        centerY: -20
      },
      allowsEmptySelectionBinding: 'SegmentedViewTest.allowsEmptySelection',
      allowsMultipleSelectionBinding: 'SegmentedViewTest.allowsMultipleSelection',
      isVisibleBinding: 'SegmentedViewTest.isVisible',
      controlSize: SC.REGULAR_CONTROL_SIZE,
      items: [{
        title: "One Potato",
        value: "one"
      },
      {
        title: "Two Potato",
        value: "two"
      },
      {
        title: "Three Potato",
        value: "three"
      },
      {
        title: "Four",
        value: "four"
      },
      {
        title: "Five Potato",
        value: "five"
      },
      {
        title: "Six Potato",
        value: "six"
      },
      {
        title: "Seven Potato",
        value: "seven"
      },
      {
        title: "More",
        value: "more"
      }],
      itemTitleKey: "title",
      itemValueKey: "value",
      value: null,
      alignBinding: SC.Binding.oneWay('SegmentedViewTest.alignment')
    }),
    
     label2: SC.LabelView.design({
      classNames: 'label'.w(),
      layout: {
        height: 24,
        width: 100,
        centerX: 0,
        centerY: 30
      },
      value: "Fixed Width",
      textAlign: SC.ALIGN_CENTER
    }),
    
    segmentedFixed: SC.SegmentedView.design({
      classNames: 'test'.w(),
      layout: {
        height: 24,
        left: 220,
        right: 220,
        centerY: 60
      },
      controlSize: SC.REGULAR_CONTROL_SIZE,
      allowsEmptySelectionBinding: 'SegmentedViewTest.allowsEmptySelection',
      allowsMultipleSelectionBinding: 'SegmentedViewTest.allowsMultipleSelection',
      isVisibleBinding: 'SegmentedViewTest.isVisible',
      items: [SC.Object.create({
        title: "One",
        value: "one",
        width: 70
      }),
      SC.Object.create({
        title: "Two",
        value: "two",
        width: 70
      }),
      SC.Object.create({
        title: "Three",
        value: "three",
        width: 70
      }),
      SC.Object.create({
        title: "Four",
        value: "four",
        width: 70
      }),
      SC.Object.create({
        title: "Five",
        value: "five",
        width: 70
      }),
      SC.Object.create({
        title: "Six",
        value: "six",
        width: 70
      })],
      itemTitleKey: "title",
      itemValueKey: "value",
      itemWidthKey: "width",
      value: null,
      alignBinding: SC.Binding.oneWay('SegmentedViewTest.alignment')
    }),

    addButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 100,
        centerX: -60,
        centerY: 110
      },
      title: 'Add',
      action: 'addSegment',
      target: 'SegmentedViewTest'
    }),
    
    removeButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 100,
        centerX: 60,
        centerY: 110
      },
      title: 'Remove',
      action: 'removeSegment',
      target: 'SegmentedViewTest'
    }),
    
    stretchButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 100,
        centerX: -60,
        centerY: 150
      },
      title: 'Stretch',
      action: 'stretch',
      target: 'SegmentedViewTest'
    }),

    shrinkButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 100,
        centerX: 60,
        centerY: 150
      },
      title: 'Shrink',
      action: 'shrink',
      target: 'SegmentedViewTest'
    }),
    
    valueTitle: SC.LabelView.design({
      layout: {
        right: 20,
        width: 140,
        height: 24,
        centerY: -40
      },
      value: 'Selected',
      fontWeight: SC.BOLD_WEIGHT,
      textAlign: SC.ALIGN_CENTER
    }),
    
    selectedLabel1: SC.LabelView.design({
      layout: {
        right: 20,
        width: 140,
        height: 24,
        centerY: -20
      },
      valueBinding: SC.Binding.oneWay('*parentView.segmentedVariable.value').notEmpty(),
      textAlign: SC.ALIGN_CENTER
    }),
    
    selectedLabel2: SC.LabelView.design({
      layout: {
        right: 20,
        width: 140,
        height: 24,
        centerY: 20
      },
      valueBinding: SC.Binding.oneWay('*parentView.segmentedFixed.value').notEmpty(),
      textAlign: SC.ALIGN_CENTER
    })
  })

});
