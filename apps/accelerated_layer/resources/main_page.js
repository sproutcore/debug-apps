// ==========================================================================
// Project:   AcceleratedLayer - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals AcceleratedLayer */

// This page describes the main user interface for your application.  
AcceleratedLayer.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'statusView mainView accelerateCheckbox'.w(),

    statusView: SC.LabelView.extend({
      layout: { top: 5, left: 5, right: 5, height: 50 },
      controlSize: SC.LARGE_CONTROL_SIZE
    }),

    mainView: SC.View.design({
      layout: { top: 75, left: 75, width: 1000, height: 510 },

      childViews: ['imageView', 'labelView'],

      imageView: SC.View.design({
        classNames: 'animation-logo',
        layout: { left: 0, top: 0, width: 482, height: 510 },
      }),

      labelView: SC.StaticContentView.extend({
        classNames: 'animation-content',
        layout: { top: 0, left: 500, width: 500, height: 510 },
        content: "<p>SproutCore works by doing the only thing that can truly eliminate the latency problem: it moves your business logic " +
                   "to the client. SproutCore applications are full-fledged programs, written in JavaScript. That JavaScript executes in " +
                   "your user’s browser, freeing up your servers (and server engineers) to focus on what’s most important in a cloud " +
                   "application: delivering users’ data as quickly and reliably as possible.</p>"+
                 "<p>But SproutCore isn’t your mama’s JavaScript library. It isn’t meant to augment existing web pages. It isn’t meant to add " + 
                   "animation to documents. SproutCore is a tool for building applications. It has more in common with Cocoa or .NET than " + 
                   "jQuery or MooTools. Because of that, SproutCore will change the way you think about building web apps.</p>"
      }),

      wantsAcceleratedLayer: YES,

      mouseDown: function(evt){
        this._mouseStart = { x: evt.pageX, y: evt.pageY };
        this._startingLayout = SC.copy(this.get('layout'));
        this._cssTimer = SC.Timer.schedule({
          target: this,
          action: '_updateStatus',
          interval: 100,
          repeats: YES
        })
      },

      mouseDragged: function(evt){
        this.adjust({
          top: this._startingLayout.top + (evt.pageY - this._mouseStart.y),
          left: this._startingLayout.left + (evt.pageX - this._mouseStart.x)
        });
      },

      mouseUp: function(){
        this._cssTimer.invalidate();
      },

      _updateStatus: function(){
        this.setPath('parentView.statusView.value', this.get('layer').style.cssText);
      }

    }),

    accelerateCheckbox: SC.View.extend({
      layout: { bottom: 0, right: 0, width: 300, height: 50 },
      childViews: ['labelView', 'checkboxView'],

      labelView: SC.LabelView.extend({
        layout: { right: 50, top: 0, left: 0, bottom: 0},
        controlSize: SC.LARGE_CONTROL_SIZE,
        textAlign: SC.ALIGN_RIGHT,
        value: 'wantsAcceleratedLayer'
      }),

      checkboxView: SC.CheckboxView.extend({
        layout: { top: 0, right: 0, width: 40, height: 40 },
        valueBinding: '.parentView.parentView.mainView.wantsAcceleratedLayer'
      })
    })

  })

});
