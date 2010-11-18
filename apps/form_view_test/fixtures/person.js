// ==========================================================================
// Project:   FormViewTest.Person Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FormViewTest */

sc_require('models/person');

FormViewTest.Person.FIXTURES = [

{
  guid: 1,
  givenNames: "Michael",
  familyName: "Scott",
  addresses: [{
    label: "home",
    street: "123 Fake St.",
    locality: "Regina",
    region: "Saskatchewan",
    country: "Canada",
    postalCode: "S4P 3Y2"
  },{
    label: "work",
    street: "3433 False Avenue",
    locality: "Regina",
    region: "Saskatchewan",
    country: "Canada",
    postalCode: "S4P 5M8"
  }],
  biometricSet: {
    height: "160cm",
    weight: "75kg",
    hairColor: "Brown",
    eyeColor: "Blue"
  },
  accesses: ["head_office", "management_washroom", "warehouse"]
}

];
