// ==========================================================================
// Project:   Animation - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Animation */

// This page describes the main user interface for your application.  
Animation.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    classNames: 'main-view',
    childViews: 'mainView spinButton zoomButton flipButton'.w(),

    mainView: SC.View.design({
      classNames: 'animation-view',
      layout: { centerX: 0, centerY: 0,  width: 482, height: 510, scale: 1, rotateZ: 0, rotateY: 0 },

      spin: function(){
        this.animate('rotateZ', 360, .75, function(data){
          data.view.adjust('rotateZ', 0);
        });
      },

      zoom: function(){
        this.animate('scale', 2, 0.3, function(data){
          data.view.animate('scale', 1, 0.3);
        });
      },

      flip: function(){
        this.animate('rotateY', 360, .75, function(data){
          data.view.adjust('rotateY', 0);
        });
      }
    }),

    spinButton: SC.ButtonView.extend({
      layout: { top: 0, left: 0, height: 24, width: 100 },
      title: 'Spin',
      targetBinding: '.parentView.mainView',
      action: 'spin'
    }),

    zoomButton: SC.ButtonView.extend({
      layout: { top: 30, left: 0, height: 24, width: 100 },
      title: 'Zoom',
      targetBinding: '.parentView.mainView',
      action: 'zoom'
    }),

    flipButton: SC.ButtonView.extend({
      layout: { top: 60, left: 0, height: 24, width: 100 },
      title: 'Flip',
      targetBinding: '.parentView.mainView',
      action: 'flip'
    })


  })

});
