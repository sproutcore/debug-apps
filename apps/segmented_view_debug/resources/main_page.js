// ==========================================================================
// Project:   SegmentedViewDebug - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals SegmentedViewDebug */

// This page describes the main user interface for your application.  
SegmentedViewDebug.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'title label1 label2 segmentedVariable segmentedFixed valueTitle selectedLabel1 selectedLabel2 addButton removeButton stretchButton shrinkButton'.w(), //

    title: SC.LabelView.design({
      classNames: 'title'.w(),
      layout: {
        height: 30,
        width: 300,
        top: 20,
        centerX: 0
      },
      value: "SC.SegmentedView Debug Test"
    }),
    
     label1: SC.LabelView.design({
      classNames: 'label'.w(),
      layout: {
        height: 24,
        left: 20,
        width: 160,
        centerY: -20
      },
      value: "Flexible Width"
    }),
    
     label2: SC.LabelView.design({
      classNames: 'label'.w(),
      layout: {
        height: 24,
        left: 20,
        width: 160,
        centerY: 20
      },
      value: "Fixed Width - Left Aligned"
    }),
    
    segmentedVariable: SC.SegmentedView.design({
      classNames: 'test'.w(),
      layout: {
        height: 24,
        left: 200,
        right: 200,
        centerY: -20
      },
      allowsEmptySelection: YES,
      allowsMultipleSelection: YES,
      controlSize: SC.REGULAR_CONTROL_SIZE,
      items: [{
        title: "One",
        value: "one"
      },
      {
        title: "Two",
        value: "two"
      },
      {
        title: "Three",
        value: "three"
      },
      {
        title: "Four",
        value: "four"
      },
      {
        title: "Five",
        value: "five"
      },
      {
        title: "Six",
        value: "six"
      },
      {
        title: "Seven",
        value: "seven"
      },
      {
        title: "Eight",
        value: "eight"
      }],
      itemTitleKey: "title",
      itemValueKey: "value",
      value: null
    }),
    
    segmentedFixed: SC.SegmentedView.design({
      classNames: 'test'.w(),
      layout: {
        height: 24,
        left: 200,
        right: 200,
        centerY: 20
      },
      align: SC.ALIGN_LEFT,
      controlSize: SC.REGULAR_CONTROL_SIZE,
      allowsEmptySelection: YES,
      allowsMultipleSelection: YES,
      items: [{
        title: "One",
        value: "one",
        width: 70
      },
      {
        title: "Two",
        value: "two",
        width: 70
      },
      {
        title: "Three",
        value: "three",
        width: 70
      },
      {
        title: "Four",
        value: "four",
        width: 70
      },
      {
        title: "Five",
        value: "five",
        width: 70
      },
      {
        title: "Six",
        value: "six",
        width: 70
      },
      {
        title: "Seven",
        value: "seven",
        width: 70
      },
      {
        title: "Eight",
        value: "eight",
        width: 70
      }],
      itemTitleKey: "title",
      itemValueKey: "value",
      itemWidthKey: "width",
      value: null
    }),

    addButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 100,
        centerX: -60,
        centerY: 70
      },
      title: 'Add',
      action: 'addSegment',
      target: 'SegmentedViewDebug'
    }),
    
    removeButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 100,
        centerX: 60,
        centerY: 70
      },
      title: 'Remove',
      action: 'removeSegment',
      target: 'SegmentedViewDebug'
    }),
    
    stretchButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 100,
        centerX: -60,
        centerY: 110
      },
      title: 'Stretch',
      action: 'stretch',
      target: 'SegmentedViewDebug'
    }),

    shrinkButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 100,
        centerX: 60,
        centerY: 110
      },
      title: 'Shrink',
      action: 'shrink',
      target: 'SegmentedViewDebug'
    }),
    
    valueTitle: SC.LabelView.design({
      layout: {
        right: 50,
        width: 100,
        height: 24,
        centerY: -40
      },
      value: 'Selected',
      fontWeight: SC.BOLD_WEIGHT,
      textAlign: SC.ALIGN_CENTER
    }),
    
    selectedLabel1: SC.LabelView.design({
      layout: {
        right: 50,
        width: 100,
        height: 24,
        centerY: -20
      },
      valueBinding: SC.Binding.oneWay('*parentView.segmentedVariable.value').notEmpty(),
      textAlign: SC.ALIGN_CENTER
    }),
    
    selectedLabel2: SC.LabelView.design({
      layout: {
        right: 50,
        width: 100,
        height: 24,
        centerY: 20
      },
      valueBinding: SC.Binding.oneWay('*parentView.segmentedFixed.value').notEmpty(),
      textAlign: SC.ALIGN_CENTER
    })
  })

});
