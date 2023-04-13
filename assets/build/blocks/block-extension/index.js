!function(){"use strict";var e,t={367:function(){var e=window.wp.element,t=window.wp.compose,l=window.wp.blockEditor,a=window.wp.components,n=window.wp.hooks,o=window.wp.i18n;const i=100,r=["core/columns"],m=["dev-talks/dropdown-block","dev-talks/steps-block"],s=(e,t,l)=>{const a=e?e.split(" "):[],n="has-custom-spacing",o=["mtm-","mbm-","ptm-","pbm-","plm","prm","mlm","mrm","mts-","mbs-","pts-","pbs-","pls","prs","mls","mrs"],i=a.filter((e=>0!==e.indexOf(l+"-")&&n!==e)),r=a.find((e=>{let t=!1;return o.forEach((e=>{0===a.indexOf(e)&&(t=!0)})),t}));return t?(i.push(`${l}-${t} ${n}`),i.join(" ")):(r&&i.push(n),i.join(" "))},d=(0,t.createHigherOrderComponent)((t=>n=>{if(m.includes(n.name))return(0,e.createElement)(t,n);const{attributes:d,setAttributes:g}=n,{additionalAttributes:{marginTopMedium:c,marginBottomMedium:u,paddingTopMedium:p,paddingBottomMedium:b,marginLeftMedium:v,marginRightMedium:h,paddingLeftMedium:k,paddingRightMedium:C,marginTopSmall:_,marginBottomSmall:f,paddingTopSmall:x,paddingBottomSmall:E,marginLeftSmall:M,marginRightSmall:T,paddingLeftSmall:R,paddingRightSmall:S,columnGapSmall:B,rowGapSmall:w,rowGapMedium:O,columnGapMedium:y},className:A}=d,N=(e,t,l)=>{const a={...d.additionalAttributes,[e]:t};g({additionalAttributes:a,className:s(A,t,l)})};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,n),(0,e.createElement)(l.InspectorControls,null,r.includes(n.name)&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.PanelBody,{id:"dev-talks-mobile-column-gap",title:(0,o.__)("Columns Gap - Tablet","dev-talks"),initialOpen:!1,className:"has-range-control"},(0,e.createElement)(a.BaseControl,null,(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Row Gap (px)","dev-talks"),value:O,onChange:e=>N("rowGapMedium",e,"rgm"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Column Gap (px)","dev-talks"),value:y,onChange:e=>N("columnGapMedium",e,"cgm"),min:0,max:i,step:4}))),(0,e.createElement)(a.PanelBody,{id:"dev-talks-mobile-column-gap",title:(0,o.__)("Column Gap - Mobile","dev-talks"),initialOpen:!1,className:"has-range-control"},(0,e.createElement)(a.BaseControl,null,(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Row Gap (px)","dev-talks"),value:w,onChange:e=>N("rowGapSmall",e,"rgs"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Column Gap (px)","dev-talks"),value:B,onChange:e=>N("columnGapSmall",e,"cgs"),min:0,max:i,step:4})))),(0,e.createElement)(a.PanelBody,{id:"dev-talks-mobile-spacings",title:(0,o.__)("Spacing - Tablet","dev-talks"),initialOpen:!1,className:"has-range-control"},(0,e.createElement)(a.BaseControl,null,(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Margin Top (px)","dev-talks"),value:c,onChange:e=>N("marginTopMedium",e,"mtm"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Margin Bottom (px)","dev-talks"),value:u,onChange:e=>N("marginBottomMedium",e,"mbm"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Margin Left (px)","dev-talks"),value:v,onChange:e=>N("marginLeftMedium",e,"mlm"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Margin Right (px)","dev-talks"),value:h,onChange:e=>N("marginRightMedium",e,"mrm"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Padding Top (px)","dev-talks"),value:p,onChange:e=>N("paddingTopMedium",e,"ptm"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Padding Bottom (px)","dev-talks"),value:b,onChange:e=>N("paddingBottomMedium",e,"pbm"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Padding Left (px)","dev-talks"),value:k,onChange:e=>N("paddingLeftMedium",e,"plm"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Padding Right (px)","dev-talks"),value:C,onChange:e=>N("paddingRightMedium",e,"prm"),min:0,max:i,step:4}))),(0,e.createElement)(a.PanelBody,{id:"dev-talks-mobile-spacings",title:(0,o.__)("Spacing - Mobile","dev-talks"),initialOpen:!1,className:"has-range-control"},(0,e.createElement)(a.BaseControl,null,(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Margin Top (px)","dev-talks"),value:_,onChange:e=>N("marginTopSmall",e,"mts"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Margin Bottom (px)","dev-talks"),value:f,onChange:e=>N("marginBottomSmall",e,"mbs"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Margin Left (px)","dev-talks"),value:M,onChange:e=>N("marginLeftSmall",e,"mls"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Margin Right (px)","dev-talks"),value:T,onChange:e=>N("marginRightSmall",e,"mrs"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Padding Top (px)","dev-talks"),value:x,onChange:e=>N("paddingTopSmall",e,"pts"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Padding Bottom (px)","dev-talks"),value:E,onChange:e=>N("paddingBottomSmall",e,"pbs"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Padding Left (px)","dev-talks"),value:R,onChange:e=>N("paddingLeftSmall",e,"pls"),min:0,max:i,step:4}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Padding Right (px)","dev-talks"),value:S,onChange:e=>N("paddingRightSmall",e,"prs"),min:0,max:i,step:4})))))}),"withInspectorControl");(0,n.addFilter)("blocks.registerBlockType","dev-talks/block-spacing",(e=>{if(void 0!==e.attributes&&!m.includes(e.name)){let t={marginTopMedium:0,marginBottomMedium:0,paddingTopMedium:0,paddingBottomMedium:0,marginLeftMedium:0,marginRightMedium:0,paddingLeftMedium:0,paddingRightMedium:0,marginTopSmall:0,marginBottomSmall:0,paddingTopSmall:0,paddingBottomSmall:0,marginLeftSmall:0,marginRightSmall:0,paddingLeftSmall:0,paddingRightSmall:0};if(r.includes(e.name)){const e={rowGapSmall:0,columnGapSmall:0,rowGapMedium:0,columnGapMedium:0};t={...t,...e}}e.attributes={...e.attributes,additionalAttributes:{type:"object",default:t}}}return e})),(0,n.addFilter)("editor.BlockEdit","dev-talks/block-spacing",d);const g=["core/heading","core/paragraph","core/column","core/group","core/button","core/columns","core/buttons"],c=(e,t,l)=>{const a=(e?e.split(" "):[]).filter((e=>0!==e.indexOf(l)));return t?(a.push(`${l}`),a.join(" ")):a.join(" ")},u=(e,t,l)=>{const a=(e?e.split(" "):[]).filter((e=>0!==e.indexOf(l+"-")));return t?(a.push(`${l}-${t}`),a.join(" ")):a.join(" ")},p=(e,t,l,a)=>{const n=(e?e.split(" "):[]).filter((e=>0!==e.indexOf(l+"-")&&a!==e));return t?(n.push(`${l}-${t} ${a}`),n.join(" ")):n.join(" ")},b=(0,t.createHigherOrderComponent)((t=>n=>{if(!g.includes(n.name))return(0,e.createElement)(t,n);const{attributes:i,setAttributes:r}=n,{className:m}=i;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,n),(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(a.PanelBody,{id:"dev-talks-responsive",title:(0,o.__)("Responsive","dev-talks"),initialOpen:!1,className:"has-toggle-control"},(0,e.createElement)(a.BaseControl,null,"core/columns"===n.name&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.ToggleControl,{label:(0,o.__)("Reverse Columns (Mobile)","dev-talks"),checked:!!i.reverseColumnsMobile,onChange:e=>{r({reverseColumnsMobile:e,className:c(m,e,"dev-talks-reverse-columns-mobile")})}}),(0,e.createElement)(a.ToggleControl,{label:(0,o.__)("Reverse Columns (Tablet)","dev-talks"),checked:!!i.reverseColumnsTablet,onChange:e=>{r({reverseColumnsTablet:e,className:c(m,e,"dev-talks-reverse-columns-tablet")})}}),(0,e.createElement)(a.ToggleControl,{label:(0,o.__)("Stack Columns (Tablet)","dev-talks"),checked:!!i.stackOnTablet,onChange:e=>{r({stackOnTablet:e,className:c(m,e,"dev-talks-scom")})}})),"core/buttons"===n.name&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.ToggleControl,{label:(0,o.__)("Center Align Button - Mobile","dev-talks"),checked:!!i.centerAlignMobile,onChange:e=>{r({centerAlignMobile:e,className:c(m,e,"dev-talks-center-align-button-mobile")})}}),(0,e.createElement)(a.ToggleControl,{label:(0,o.__)("Center Align Button - Tablet","dev-talks"),checked:!!i.centerAlignTablet,onChange:e=>{r({centerAlignTablet:e,className:c(m,e,"dev-talks-center-align-button-tablet")})}})),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Font Size - Mobile","dev-talks"),value:i.fontSizeMobile,onChange:e=>{r({fontSizeMobile:e,className:p(m,e,"fss","has-custom-font")})},min:0,max:50,step:2}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Line Height - Mobile","dev-talks"),value:i.lineHeightMobile,onChange:e=>{r({lineHeightMobile:e,className:p(m,e,"lhs","has-custom-font")})},min:0,max:50,step:2}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Font Size - Tablet","dev-talks"),value:i.fontSizeTablet,onChange:e=>{r({fontSizeTablet:e,className:p(m,e,"fsm","has-custom-font")})},min:0,max:50,step:2}),(0,e.createElement)(a.RangeControl,{label:(0,o.__)("Line Height - Tablet","dev-talks"),value:i.lineHeightTablet,onChange:e=>{r({lineHeightTablet:e,className:p(m,e,"lhm","has-custom-font")})},min:0,max:50,step:2}),(0,e.createElement)(a.SelectControl,{label:(0,o.__)("Text Alignment - Mobile","dev-talks"),value:i.mobileTextAlignment,options:[{value:"",label:(0,o.__)("None","dev-talks")},{value:"left",label:(0,o.__)("Left")},{value:"center",label:(0,o.__)("Center")},{value:"right",label:(0,o.__)("Right")}],onChange:e=>{r({mobileTextAlignment:e,className:u(m,e,"dev-talks-mobile-text-align")})}}),(0,e.createElement)(a.SelectControl,{label:(0,o.__)("Text Alignment - Tablet","dev-talks"),value:i.tabletTextAlignment,options:[{value:"",label:(0,o.__)("None","dev-talks")},{value:"left",label:(0,o.__)("Left","dev-talks")},{value:"center",label:(0,o.__)("Center","dev-talks")},{value:"right",label:(0,o.__)("Right","dev-talks")}],onChange:e=>{r({tabletTextAlignment:e,className:u(m,e,"dev-talks-tablet-text-align")})}}))))))}),"withInspectorControl");(0,n.addFilter)("blocks.registerBlockType","dev-talks/block-responsive",(e=>("undefined"!==e.name&&g.includes(e.name)&&(e.attributes=Object.assign(e.attributes,{..."core/columns"===e.name&&{reverseColumnsMobile:{type:"boolean",default:!1},reverseColumnsTablet:{type:"boolean",default:!1},stackOnTablet:{type:"boolean",default:!1}},..."core/buttons"===e.name&&{centerAlignMobile:{type:"boolean",default:!1},centerAlignTablet:{type:"boolean",default:!1}},mobileTextAlignment:{type:"string",default:""},tabletTextAlignment:{type:"string",default:""},fontSizeMobile:{type:"number",default:0},fontSizeTablet:{type:"number",default:0},lineHeightMobile:{type:"number",default:0},lineHeightTablet:{type:"number",default:0}})),e))),(0,n.addFilter)("editor.BlockEdit","dev-talks/block-responsive",b),(0,n.addFilter)("blocks.getSaveContent.extraProps","dev-talks/extra-props",(function(e,t,l){return"core/heading"===t.name&&l.hasItemProp?{...e,itemProp:"name"}:e})),(0,n.addFilter)("blocks.registerBlockType","dev-talks/add-has-item-prop-attribute",(function(e,t){return void 0!==e.attributes&&"core/heading"===t&&(e.attributes=Object.assign(e.attributes,{hasItemProp:{type:"boolean"}})),e}))}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=function(t,l,n,o){if(!l){var i=1/0;for(d=0;d<e.length;d++){l=e[d][0],n=e[d][1],o=e[d][2];for(var r=!0,m=0;m<l.length;m++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[m])}))?l.splice(m--,1):(r=!1,o<i&&(i=o));if(r){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[l,n,o]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={991:0,782:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,o,i=l[0],r=l[1],m=l[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(m)var d=m(a)}for(t&&t(l);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},l=self.webpackChunkdev_talks=self.webpackChunkdev_talks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var n=a.O(void 0,[782],(function(){return a(367)}));n=a.O(n)}();