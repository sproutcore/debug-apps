// ==========================================================================
// Project:   FormViewTest.personController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FormViewTest */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
FormViewTest.personController = SC.ObjectController.create(
/** @scope FormViewTest.personController.prototype */ {
  
  propertiesDidChange: function() {
    var dataViewer = FormViewTest.getPath('mainPage.mainPane.dataViewer');
    dataViewer.propertyDidChange('value');
  }.observes('content', 'givenNames', 'familyName', 'addresses'),
  
  addAddress: function(sender) {
    var content = this.get('content');
    var address = {label: 'other', country: 'Canada'};
    var addresses = content.get('addresses');
    
    addresses.pushObject(address);
  },
  
  removeAddress: function(sender) {
    var content = this.get('content');
    var addresses = content.get('addresses');
    
    addresses.removeAt(addresses.get('length') - 1);
    if (addresses.get('length') === 0) content.set('addresses', null);
  }
}) ;
