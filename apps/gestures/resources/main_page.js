// ==========================================================================
// Project:   Gestures - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Gestures */

// This page describes the main user interface for your application.  
Gestures.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    layout: { width: 600, height: 500, centerX: 0, centerY: 0 },

    childViews: 'horizontalSwipe verticalSwipe anySwipe'.w(),

    horizontalSwipe: SC.LabelView.design(SC.Gesturable, {
      layout: { top: 0, left: 0, width: 500, height: 75 },
      backgroundColor: 'gray',
      controlSize: SC.LARGE_CONTROL_SIZE,
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Swipe Here",

      gestures: ['swipeGesture'],
      swipeGesture: SC.SwipeGesture,

      swipeStart: function(evt, gesture, direction, delta) {
        this.set('value', "Started - "+direction+" ("+delta+")");
      },

      swipeChanged: function(evt, gesture, direction, delta) {
        this.set('value', "Changed - "+direction+" ("+delta+")");
      },

      swipeEnd: function(evt, gesture, direction, delta) {
        this.set('value', "Ended - "+direction+" ("+delta+")");
      },

      swipeCancelled: function(evt, gesture, direction, delta) {
        this.set('value', "Cancelled");
      }

    }),

    verticalSwipe: SC.LabelView.design(SC.Gesturable, {
      layout: { top: 0, right: 0, width: 75, height: 500 },
      backgroundColor: 'gray',
      controlSize: SC.LARGE_CONTROL_SIZE,
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Swipe Here",

      gestures: ['swipeGesture'],
      swipeGesture: SC.SwipeGesture.extend({
        direction: SC.SWIPE_VERTICAL
      }),

      swipeStart: function(evt, gesture, direction, delta) {
        this.set('value', "Started - "+direction+" ("+delta+")");
      },

      swipeChanged: function(evt, gesture, direction, delta) {
        this.set('value', "Changed - "+direction+" ("+delta+")");
      },

      swipeEnd: function(evt, gesture, direction, delta) {
        this.set('value', "Ended - "+direction+" ("+delta+")");
      },

      swipeCancelled: function(evt, gesture, direction, delta) {
        this.set('value', "Cancelled");
      }

    }),

    anySwipe: SC.LabelView.design(SC.Gesturable, {
      layout: { top: 100, right: 100, bottom: 0, left: 0 },
      backgroundColor: 'gray',
      controlSize: SC.LARGE_CONTROL_SIZE,
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Swipe Here",

      gestures: ['swipeGesture'],
      swipeGesture: SC.SwipeGesture.extend({
        direction: SC.SWIPE_ANY
      }),

      swipeStart: function(evt, gesture, direction, delta) {
        this.set('value', "Started - "+direction+" ("+delta+")");
      },

      swipeChanged: function(evt, gesture, direction, delta) {
        this.set('value', "Changed - "+direction+" ("+delta+")");
      },

      swipeEnd: function(evt, gesture, direction, delta) {
        this.set('value', "Ended - "+direction+" ("+delta+")");
      },

      swipeCancelled: function(evt, gesture, direction, delta) {
        this.set('value', "Cancelled");
      }

    })

  })

});
