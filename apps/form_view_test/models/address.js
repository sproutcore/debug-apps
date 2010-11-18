// ==========================================================================
// Project:   FormViewTest.Address
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FormViewTest */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
FormViewTest.Address = SC.ChildRecord.extend(
/** @scope FormViewTest.Address.prototype */ {

  street: SC.Record.attr(String, { isRequired: NO }),
  locality: SC.Record.attr(String, { isRequired: NO }),
  region: SC.Record.attr(String, { isRequired: NO }),
  country: SC.Record.attr(String, { isRequired: NO }),
  postalCode: SC.Record.attr(String, { isRequired: NO })
  
}) ;
