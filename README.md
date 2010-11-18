SproutCore Debug
================

A set of simple SproutCore debugging apps.  Before working on a specific part of SproutCore, be sure to check to see if someone has already made a debug app for that part.  As well, if you've created small test apps, please submit them so that others may use them in the future.

Apps
----


### ImageViewTest (SC.ImageView)

Contains a GridView with a user defined number of images that may be resized using a SliderView.  Buttons will toggle background loading, canvas rendering and image storing.

_status 11/18/10: debugged with git://github.com/sproutcore/sproutcore.git (cc/master branch)_

### FormViewTest (SC.FormView, SC.FormRowView, SC.NestedFormView)

Contains a form for editing the data of a Person {givenNames, familyName, addresses, biometricSet}.  Where addresses is a ChildArray of Address {label, street, locality, region, country, postalCode} and biometricSet is a ChildRecord of BiometricSet {weight, height, hairColor, eyeColor}.  There are buttons to add/remove addresses from the Person which should update the form and there is a label bound to the current Person content to validate edits of the nested records.

_status 11/18/10: debugged with git://github.com/publickeating/sproutcore.git (nested\_forms branch)_

### SegmentedViewTest (SC.SegmentedView)

Contains two SegmentedViews (one variable width & one fixed width) and two labels bound to the current values. Also contains four buttons: Add - add a segment to the end of each, Remove - remove a segment from the end of each, Stretch - add a character to the variable width segmented view and 5px to the fixed width segmented view, Shrink - remove a character or subtract 5px respectively.

_status 11/18/10: debugged with git://github.com/publickeating/sproutcore.git (segmented\_views branch)_