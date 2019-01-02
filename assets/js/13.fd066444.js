(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{187:function(t,a,n){"use strict";function s(t,a,n,s,e,o,r,c){var i,p="function"==typeof t?t.options:t;if(a&&(p.render=a,p.staticRenderFns=n,p._compiled=!0),s&&(p.functional=!0),o&&(p._scopeId="data-v-"+o),r?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},p._ssrRegister=i):e&&(i=c?function(){e.call(this,this.$root.$options.shadowRoot)}:e),i)if(p.functional){p._injectStyles=i;var v=p.render;p.render=function(t,a){return i.call(a),v(t,a)}}else{var u=p.beforeCreate;p.beforeCreate=u?[].concat(u,i):[i]}return{exports:t,options:p}}n.d(a,"a",function(){return s})},217:function(t,a,n){"use strict";n.r(a);var s=n(187),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),n("p",[t._v("The following demo shows how it would work in action, note that it will only trigger if the user entered a valid email since the validator early exits upon first failure.")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://baianat.github.io/vee-validate/examples/async-backend-validation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Async Backend Validation Example"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("Since there is no real DB in this example, it's being simulated by a dynamic array.")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"backend-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backend-validation","aria-hidden":"true"}},[this._v("#")]),this._v(" Backend Validation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You might need to also use your Laravel/Express or whatever back-end as your validation provider for numerous reasons, like checking if an email is unique since it is hard to implement on the client-side, we can achieve this using a custom rule and the "),a("code",[this._v("reasoning")]),this._v(" feature:")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'axios'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// great ajax library.")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Validator "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("isUnique")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" axios"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("post")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'/api/validate/email'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" email"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Notice that we return an object containing both a valid property and a data property.")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      valid"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("valid"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        message"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// The messages getter may also accept a third parameter that includes the data we returned earlier.")]),t._v("\nValidator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("extend")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'unique'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  validate"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" isUnique"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  getMessage"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("field"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="backend.md";a.default=e.exports}}]);