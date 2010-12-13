// ==========================================================================
// Project:   FormViewTest - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals FormViewTest */

/**
  TODO: passing the config of the rows currently sucks.  If the singleField is of any substance, the ext hash is too far down and its hard to visually know which it applies too, the row or the single field.
  
*/
// This page describes the main user interface for your application.  
FormViewTest.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({    
    childViews: 'title note form addAddressButton removeAddressButton dataViewer'.w(),

    title: SC.LabelView.design({
      classNames: 'title'.w(),
      layout: {
        height: 30,
        width: 300,
        top: 20,
        centerX: 0
      },
      value: "SC.FormView Test",
      textAlign: SC.ALIGN_CENTER
    }),

    note: SC.LabelView.design({
      layout: {
        left: 20,
        top: 70,
        bottom: 20,
        width: 200
      },
      value: "Note: Addresses and BiometricSet are a ChildArray and ChildRecord of Person respectively.  The borders are not part of the theme and were added to illustrate the nested forms."
    }),
    
    addAddressButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 120,
        right: 20,
        top: 70
      },
      title: "+ Address",
      action: 'addAddress',
      target: 'FormViewTest.personController'
    }),
    
    removeAddressButton: SC.ButtonView.design({
      layout: {
        height: 24,
        width: 120,
        right: 20,
        top: 110
      },
      title: "&minus; Address",
      action: 'removeAddress',
      target: 'FormViewTest.personController'
    }),
    
    dataViewer: SC.LabelView.design({
      classNames: 'data-viewer'.w(),
      layout: {
        top: 150,
        right: 0,
        width: 200,
        bottom: 20
      },
      formatter: function(value) {
        // A decidely caveman approach to representing the data
        var ret = "";
        
        if (value) {
          ret += "<em>Person:</em><br>";
          ret += "%@<br>".fmt(value.toString());
          
          ret += "<br><em>Addresses:</em><br>";
          var addresses = value.get('addresses');
          for (var i=0, len = addresses.get('length'); i < len; i++) {
            var address = addresses.objectAt(i);
            ret += "%@<br><br>".fmt(address.toString());
          }
          
          ret += "<em>BiometricSet:</em><br>";
          ret += "%@<br>".fmt(value.get('biometricSet').toString());
        }
        return ret;
      },
      escapeHTML: NO,
      valueBinding: 'FormViewTest.personController.content'
    }),
    
    form: SC.ScrollView.design({
      classNames: 'form-scroll-view'.w(),
      layout: {
        top: 70,
        width: 450,
        bottom: 20,
        centerX: 0
      },
      contentView: SC.FormView.design({
      
      childViews: 'givenNames familyName addresses biometricSet'.w(),
      contentBinding: 'FormViewTest.personController',
      labelWidth: 120,

      givenNames: SC.FormView.row("Given names", SC.TextFieldView.design({
        layout: {
          height: 24,
          width: 200
        }
      })),

      familyName: SC.FormView.row("Family name", SC.TextFieldView.design({
        layout: {
          height: 24,
          width: 200
        }
      })),

      addresses: SC.FormView.row("Addresses", SC.FormView.nested({
        // this form's content will be bound to .owner*content.addresses
        
        childViews: 'label street locality region country postalCode'.w(),

        label: SC.FormView.row("", SC.SelectFieldView.design({
          objects: ['home', 'work', 'other'],
          layout: {
            height: 24,
            width: 80
          }
        }), {hasRowLabel: NO}),

        street: SC.FormView.row(SC.TextFieldView.design({
          layout: {
            height: 24,
            width: 140
          }
        }), {hasRowLabel: NO}),

        locality: SC.FormView.row(SC.TextFieldView.design({
          layout: {
            height: 24,
            width: 140
          }
        }), {hasRowLabel: NO}),

        region: SC.FormView.row(SC.TextFieldView.design({
          layout: {
            height: 24,
            width: 140
          }
        }), {hasRowLabel: NO}),

        country: SC.FormView.row(SC.TextFieldView.design({
          layout: {
            height: 24,
            width: 100
          }
        }), {hasRowLabel: NO}),

        postalCode: SC.FormView.row(SC.TextFieldView.design({
          layout: {
            height: 24,
            width: 60
          }
        }), {hasRowLabel: NO})
      }, { 
        flowSize: {width: 250}
      })),
      
      biometricSet: SC.FormView.row("Identifiers", SC.FormView.nested({
        childViews: 'height weight hairColor eyeColor'.w(),
        labelWidth: 100,
        
        height: SC.FormView.row("Height", SC.TextFieldView.design({
          layout: {
            height: 24,
            width: 50
          }
        })),
        
        weight: SC.FormView.row("Weight", SC.TextFieldView.design({
          layout: {
            height: 24,
            width: 50
          }
        })),
        
        hairColor: SC.FormView.row("Hair Color", SC.TextFieldView.design({
          layout: {
            height: 24,
            width: 50
          }
        })),
        
        eyeColor: SC.FormView.row("Eye Color", SC.TextFieldView.design({
          layout: {
            height: 24,
            width: 50
          }
        }))
      }, { 
        flowSize: {width: 250}
      }))
    })
  })
  })
});
