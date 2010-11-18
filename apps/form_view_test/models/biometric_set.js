// ==========================================================================
// Project:   FormViewTest.BiometricSet
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FormViewTest */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
FormViewTest.BiometricSet = SC.ChildRecord.extend(
/** @scope FormViewTest.BiometricSet.prototype */ {

  height: SC.Record.attr(String, { isRequired: NO }),
  weight: SC.Record.attr(String, { isRequired: NO }),
  hairColor: SC.Record.attr(String, { isRequired: NO }),
  eyeColor: SC.Record.attr(String, { isRequired: YES })

}) ;
