(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[10],{162:function(e,a,t){"use strict";function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,n=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!a||t.length!==a);r=!0);}catch(l){n=!0,c=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw c}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return r(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return n}))},253:function(e,a,t){"use strict"},319:function(e,a,t){"use strict";a.a=t.p+"static/media/icon-search.3af04577.svg"},570:function(e,a,t){},894:function(e,a,t){"use strict";var r=t(2),n=t(3),c=t(6),i=t.n(c),s=t(0),l=t.n(s),o=t(7),d=t(37),u=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(r.a)({},a,{ref:t,className:i()(a.className,e)}))}))},b=t(38),f=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.variant,d=e.as,u=void 0===d?"img":d,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(o.a)(t,"card-img");return l.a.createElement(u,Object(r.a)({ref:a,className:i()(s?f+"-"+s:f,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var j=f,m=u("h5"),h=u("h6"),p=Object(d.a)("card-body"),v=Object(d.a)("card-title",{Component:m}),O=Object(d.a)("card-subtitle",{Component:h}),g=Object(d.a)("card-link",{Component:"a"}),x=Object(d.a)("card-text",{Component:"p"}),y=Object(d.a)("card-header"),N=Object(d.a)("card-footer"),k=Object(d.a)("card-img-overlay"),w=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,u=e.text,f=e.border,j=e.body,m=e.children,h=e.as,v=void 0===h?"div":h,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(o.a)(t,"card"),x=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return l.a.createElement(b.a.Provider,{value:x},l.a.createElement(v,Object(r.a)({ref:a},O,{className:i()(c,g,d&&"bg-"+d,u&&"text-"+u,f&&"border-"+f)}),j?l.a.createElement(p,null,m):m))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=j,w.Title=v,w.Subtitle=O,w.Body=p,w.Link=g,w.Text=x,w.Header=y,w.Footer=N,w.ImgOverlay=k;a.a=w},955:function(e,a,t){"use strict";t.r(a);var r=t(172),n=t.n(r),c=t(24),i=t(173),s=t(162),l=t(0),o=t.n(l),d=t(12),u=t(900),b=t(956),f=t(894),j=t(901),m=t(2),h=t(3),p=t(6),v=t.n(p),O=t(7),g=t(39),x=o.a.forwardRef((function(e,a){var t=e.active,r=e.disabled,n=e.className,c=e.style,i=e.activeLabel,s=e.children,l=Object(h.a)(e,["active","disabled","className","style","activeLabel","children"]),d=t||r?"span":g.a;return o.a.createElement("li",{ref:a,style:c,className:v()(n,"page-item",{active:t,disabled:r})},o.a.createElement(d,Object(m.a)({className:"page-link",disabled:r},l),s,t&&i&&o.a.createElement("span",{className:"sr-only"},i)))}));x.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},x.displayName="PageItem";var y=x;function N(e,a,t){function r(e){var r=e.children,n=Object(h.a)(e,["children"]);return o.a.createElement(x,n,o.a.createElement("span",{"aria-hidden":"true"},r||a),o.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),r.displayName=e,r}var k=N("First","\xab"),w=N("Prev","\u2039","Previous"),E=N("Ellipsis","\u2026","More"),P=N("Next","\u203a"),I=N("Last","\xbb"),S=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,c=e.size,i=Object(h.a)(e,["bsPrefix","className","children","size"]),s=Object(O.a)(t,"pagination");return o.a.createElement("ul",Object(m.a)({ref:a},i,{className:v()(r,s,c&&s+"-"+c)}),n)}));S.First=k,S.Prev=w,S.Ellipsis=E,S.Item=y,S.Next=P,S.Last=I;var C=S,A=(t(570),t(319)),L=(t(253),t(25)),T=t.n(L),R=t(1);a.default=function(){var e=o.a.useState({data:[],pagination:[],next:0,previous:0,first:0,last:0,skip:0,loading:!1,search:""}),a=Object(s.a)(e,2),t=a[0],r=a[1],l=function(){var e=Object(i.a)(n.a.mark((function e(){var a,i,s=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.length>0&&void 0!==s[0]?s[0]:12,i=s.length>1&&void 0!==s[1]?s[1]:0,!(t.search.length>0)){e.next=8;break}return r((function(e){return Object(c.a)(Object(c.a)({},e),{},{loading:!0})})),e.next=6,T.a.get("/get/article?take="+a+"&skip="+i+"&search="+t.search).then((function(e){r((function(a){return Object(c.a)(Object(c.a)({},a),{},{data:e.data.data.article.data,pagination:e.data.data.article.pagination,next:e.data.data.article.next,previous:e.data.data.article.previous,first:e.data.data.article.first,last:e.data.data.article.last,loading:!1})}))})).catch((function(e){console.log(e)}));case 6:e.next=9;break;case 8:m();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(n.a.mark((function e(){var a,t,i=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:12,t=i.length>1&&void 0!==i[1]?i[1]:0,r((function(e){return Object(c.a)(Object(c.a)({},e),{},{loading:!0})})),e.next=5,T.a.get("/get/article?take="+a+"&skip="+t).then((function(e){r((function(a){return Object(c.a)(Object(c.a)({},a),{},{data:e.data.data.article.data,pagination:e.data.data.article.pagination,next:e.data.data.article.next,previous:e.data.data.article.previous,first:e.data.data.article.first,last:e.data.data.article.last,loading:!1})}))})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){m()}),[]),Object(R.jsx)("div",{className:"blog-grid",children:Object(R.jsx)("section",{className:"masthead",children:Object(R.jsxs)("div",{className:"container h-100",children:[Object(R.jsx)("div",{className:"row",children:Object(R.jsx)("div",{className:"container title-bg-banner",children:Object(R.jsx)("label",{className:"container",children:"Artikel"})})}),Object(R.jsx)("div",{className:"row blog-grid-panel",children:Object(R.jsx)("div",{className:"col-md-12 form-inline",children:Object(R.jsx)("div",{className:"col-md-3 search-box",children:Object(R.jsxs)(u.a,{className:"mb-3",children:[Object(R.jsx)(b.a,{placeholder:"Search","aria-label":"Search","aria-describedby":"Search",onChange:function(e){return r((function(a){return Object(c.a)(Object(c.a)({},a),{},{search:e.target.value})}))}}),Object(R.jsx)(u.a.Append,{onClick:function(){return l()},style:{cursor:"pointer"},children:Object(R.jsx)(u.a.Text,{id:"basic-addon2",children:Object(R.jsx)("img",{src:A.a})})})]})})})}),Object(R.jsx)("div",{className:"row data-grid",children:function(){var e=[];return t.data.map((function(a){e.push(Object(R.jsx)("div",{className:"data-grid-card",children:Object(R.jsxs)(f.a,{style:{width:"21.5rem"},children:[Object(R.jsx)(f.a.Img,{style:{height:220},variant:"top",src:localStorage.getItem("host")+a.image}),Object(R.jsxs)(f.a.Body,{children:[Object(R.jsxs)("div",{className:"field-post-content",children:[Object(R.jsx)("label",{className:"time-post-content",children:a.post_date}),Object(R.jsx)("label",{className:"category-post-content",children:"Marketing"})]}),Object(R.jsx)(f.a.Title,{children:a.intro}),Object(R.jsx)(f.a.Text,{children:a.wording}),Object(R.jsx)(d.b,{to:"/artikel/".concat(a.kategori,"/").concat(a.slug),children:Object(R.jsx)(j.a,{variant:"primary",children:"Baca selengkapnya"})})]})]})}))})),e}()}),Object(R.jsx)("div",{className:"row pagination col-md-12",children:1==t.loading?"Loading...":Object(R.jsx)(C,{children:function(){for(var e=[],a=function(a){var r=a-1;r*=12,t.search.length>0?e.push(Object(R.jsx)(C.Item,{onClick:function(){return l(12,r)},children:a})):e.push(Object(R.jsx)(C.Item,{onClick:function(){return m(12,r)},children:a}))},r=1;r<=t.pagination.length;r++)a(r);return e}()})})]})})})}}}]);
//# sourceMappingURL=10.1380e48c.chunk.js.map