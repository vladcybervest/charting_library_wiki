(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{240:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"shape-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shape-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Shape API")]),e._v(" "),a("h3",{attrs:{id:"isselectionenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isselectionenabled","aria-hidden":"true"}},[e._v("#")]),e._v(" isSelectionEnabled()")]),e._v(" "),a("p",[e._v("Returns "),a("code",[e._v("true")]),e._v(" if the shape cannot be selected by a user.")]),e._v(" "),a("h3",{attrs:{id:"setselectionenabled-enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setselectionenabled-enable","aria-hidden":"true"}},[e._v("#")]),e._v(" setSelectionEnabled(enable)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("enable")]),e._v(" - "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Enables or disables shape selection (see "),a("code",[e._v("disableSelection")]),e._v(" option of "),a("code",[e._v("createMultipointShape")]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"issavingenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issavingenabled","aria-hidden":"true"}},[e._v("#")]),e._v(" isSavingEnabled()")]),e._v(" "),a("p",[e._v("Returns "),a("code",[e._v("true")]),e._v(" if the shape is not saved on the chart.")]),e._v(" "),a("h3",{attrs:{id:"setsavingenabled-enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setsavingenabled-enable","aria-hidden":"true"}},[e._v("#")]),e._v(" setSavingEnabled(enable)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("enable")]),e._v(" - "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Enables or disables saving of the shape in the chart layout (see "),a("code",[e._v("disableSave")]),e._v(" option of "),a("code",[e._v("createMultipointShape")]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"isshowinobjectstreeenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isshowinobjectstreeenabled","aria-hidden":"true"}},[e._v("#")]),e._v(" isShowInObjectsTreeEnabled()")]),e._v(" "),a("p",[e._v("Returns "),a("code",[e._v("true")]),e._v(" if the shape is displayed in the Objects Tree dialog.")]),e._v(" "),a("h3",{attrs:{id:"setshowinobjectstreeenabled-enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setshowinobjectstreeenabled-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" setShowInObjectsTreeEnabled(enabled)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("enabled")]),e._v(" - "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Enables or disables displaying of the shape in the Objects Tree dialog.")]),e._v(" "),a("h3",{attrs:{id:"isusereditenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isusereditenabled","aria-hidden":"true"}},[e._v("#")]),e._v(" isUserEditEnabled()")]),e._v(" "),a("p",[e._v("Returns "),a("code",[e._v("true")]),e._v(" if a user can remove/change/hide the shape.")]),e._v(" "),a("h3",{attrs:{id:"setusereditenabled-enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setusereditenabled-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" setUserEditEnabled(enabled)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("enabled")]),e._v(" - "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Enables or disables removing/changing/hiding of the shape by a user")]),e._v(" "),a("h3",{attrs:{id:"bringtofront"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bringtofront","aria-hidden":"true"}},[e._v("#")]),e._v(" bringToFront()")]),e._v(" "),a("p",[e._v("Places the line tool on top of all other chart objects.")]),e._v(" "),a("h3",{attrs:{id:"sendtoback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendtoback","aria-hidden":"true"}},[e._v("#")]),e._v(" sendToBack()")]),e._v(" "),a("p",[e._v("Places the line tool behind all other chart objects.")]),e._v(" "),a("h3",{attrs:{id:"getproperties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getproperties","aria-hidden":"true"}},[e._v("#")]),e._v(" getProperties()")]),e._v(" "),a("p",[e._v("Gets all the properties of the shape.")]),e._v(" "),a("h3",{attrs:{id:"setproperties-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setproperties-properties","aria-hidden":"true"}},[e._v("#")]),e._v(" setProperties(properties)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("properties")]),e._v(" - an object with new properties. It should have the same structure as an object from "),a("a",{attrs:{href:"#getproperties"}},[e._v("getProperties")]),e._v(".\nIt can only include the properties that you want to override.")])]),e._v(" "),a("p",[e._v("Sets the properties of the shape.")]),e._v(" "),a("h3",{attrs:{id:"getpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getpoints","aria-hidden":"true"}},[e._v("#")]),e._v(" getPoints()")]),e._v(" "),a("p",[e._v("Returns the points of the shape - an array of the "),a("a",{attrs:{href:"#pricedpoint"}},[e._v("PricedPoint")]),e._v(" objects.")]),e._v(" "),a("h3",{attrs:{id:"setpoints-points"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setpoints-points","aria-hidden":"true"}},[e._v("#")]),e._v(" setPoints(points)")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("points")]),e._v(" - an array with the new points for the shape. The format of each shape is the same as "),a("code",[e._v("points")]),e._v(" argument from "),a("a",{attrs:{href:"Chart-Methods#createmultipointshapepoints-options"}},[e._v("createMultipointShape")]),e._v(" method.")])]),e._v(" "),a("p",[e._v("Set the new points of the shape.")]),e._v(" "),a("h2",{attrs:{id:"primitive-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primitive-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Primitive Types")]),e._v(" "),a("h3",{attrs:{id:"pricedpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pricedpoint","aria-hidden":"true"}},[e._v("#")]),e._v(" PricedPoint")]),e._v(" "),a("p",[e._v("An object with the following keys:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("price")]),e._v(" - price value of the point")]),e._v(" "),a("li",[a("code",[e._v("time")]),e._v(" - time of the point")])])])}],!1,null,null,null);r.options.__file="Shape-Api.md";t.default=r.exports}}]);