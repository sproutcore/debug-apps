// ==========================================================================
// Project:   SegmentedViewTest
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals SegmentedViewTest */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
SegmentedViewTest = SC.Application.create(
  /** @scope SegmentedViewTest.prototype */ {

  NAMESPACE: 'SegmentedViewTest',
  VERSION: '0.1.0',
  
  alignment: SC.ALIGN_CENTER,
  
  isVisible: YES,
  allowsEmptySelection: NO,
  allowsMultipleSelection: NO,
  
  makeSV1Key: function() {
    var sv1;
    
    sv1 = this.getPath('mainPage.mainPane.segmentedVariable');
    sv1.becomeFirstResponder();
  },
  
  addSegment: function() {
    var sv1, sv2;
    var items1, items2;
    var item;
    
    if (!this.count) this.count = 0;
    this.count++;
    
    sv1 = this.getPath('mainPage.mainPane.segmentedVariable');
    sv2 = this.getPath('mainPage.mainPane.segmentedFixed');
    
    item = {
      title: "New " + this.count,
      value: "new " + this.count
    };
    
    if (sv2) {
      item.width = 70;
      items2 = sv2.get('items');
      items2.pushObject(SC.Object.create(item));
    }
    
    if (sv1) {
      items1 = sv1.get('items');
      if (!this.firstTime) this.firstTime = item.title = "One Big Bad Spud";
      items1.pushObject(item);
    }
    
  },
  
  removeSegment: function() {
    var sv1, sv2;
    var items1, items2;
    
    sv1 = this.getPath('mainPage.mainPane.segmentedVariable');
    sv2 = this.getPath('mainPage.mainPane.segmentedFixed');
    
    if (sv1) {
      items1 = sv1.get('items');
      items1.removeAt(items1.length - 1);
    }
    
    if (sv2) {
      items2 = sv2.get('items');
      items2.removeAt(items2.length - 1);
    }
  },
  
  stretch: function() {
    var sv1, sv2;
    var items1, items2;
    
    sv1 = this.getPath('mainPage.mainPane.segmentedVariable');
    sv2 = this.getPath('mainPage.mainPane.segmentedFixed');
    
    if (sv1) {
      items1 = sv1.get('items');
      items1 = items1.map(function(item) {
        item.title = item.title + "@";
      });
      sv1.itemsDidChange();
    }
    
    if (sv2) {
      items2 = sv2.get('items');
      items2 = items2.map(function(item) {
        item.set('width', item.get('width') + 5);
      });
    }
  },
  
  shrink: function() {
    var sv1, sv2;
    var items1, items2;
    
    sv1 = this.getPath('mainPage.mainPane.segmentedVariable');
    sv2 = this.getPath('mainPage.mainPane.segmentedFixed');
    
    if (sv1) {
      items1 = sv1.get('items');
      items1 = items1.map(function(item) {
        var stopIndex = (item.title.length - 1 >= 0) ? item.title.length - 1 : 0;
        item.title = item.title.substring(0, stopIndex);
      });
      sv1.itemsDidChange();
    }
    
    if (sv2) {
      items2 = sv2.get('items');
      items2 = items2.map(function(item) {
        item.set('width', item.get('width') - 5);
      });
    }
  }
}) ;
