// ==========================================================================
// Project:   ImageViewTest
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals ImageViewTest */

if (!SC.ImageView.store) {
  SC.Logger.error("You're not using a version of SproutCore with the image store! Errors abound!");
}

SC.ImageView.store.set('debug', YES);

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
ImageViewTest = SC.Application.create(
  /** @scope ImageViewTest.prototype */ {

  NAMESPACE: 'ImageViewTest',
  VERSION: '0.1.0'
  
  // TODO: Add global constants or singleton objects needed by your app here.

}) ;
