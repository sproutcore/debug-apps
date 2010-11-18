// ==========================================================================
// Project:   FormViewTest.Person
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FormViewTest */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
FormViewTest.Person = SC.Record.extend(
/** @scope FormViewTest.Person.prototype */ {

  givenNames: SC.Record.attr(String, { isRequired: YES }),

  familyName: SC.Record.attr(String, { isRequired: NO }),
  
  addresses: SC.Record.toMany('FormViewTest.Address', {isMaster:YES, nested:YES}),
  
  biometricSet: SC.Record.toOne('FormViewTest.BiometricSet', {isMaster:YES, nested:YES}),
  
  accesses: SC.Record.attr(Array, { isRequired: NO, defaultValue: ['head_office'] })
  
}) ;
