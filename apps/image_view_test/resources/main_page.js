// ==========================================================================
// Project:   ImageViewTest - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ImageViewTest */

// This page describes the main user interface for your application.  
ImageViewTest.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'canvas'.w(),
    
    canvas: SC.ImageView.design({
      layout: {width: 400, height: 400},
      useCanvas: YES,
      wantsImageStored: NO,
      value: sc_static('logo.png')
    })
  })

});
