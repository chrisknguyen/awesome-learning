(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{253:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(224),l=(n(281),n(227)),c=(n(241),function(e){var t=e.tags,n=e.tagSlugs;return r.a.createElement("div",{className:"Tags"},r.a.createElement("ul",{className:"Tags-list"},n.map((function(e,n){return r.a.createElement("li",{className:"Tags-listItem",key:t[n]+"slug"},r.a.createElement(l.a,{variation:"pill",path:e},t[n]))}))))}),s=n(262),o=(n(242),"CourseCard-Title"),u="CourseCard-Link",m="CourseCard-Description",d=function(e){var t=e.title,n=e.description,a=e.link;return r.a.createElement("li",{className:"CourseCard"},r.a.createElement(s.a,{is:"h3",mb:"16px","data-enzyme-id":o},r.a.createElement(l.a,{path:a},t)),r.a.createElement(s.a,{is:"p",mb:"16px","data-enzyme-id":m},n),r.a.createElement(l.a,{variation:"pill","data-enzyme-id":u,path:a},"Learn ",t))},f=n(276),g=(n(243),function(e){var t=e.course,n=t.frontmatter,a=n.tags,i=n.title,s=n.description,o=n.lessons,u=t.fields,m=u.tagSlugs,g=u.slug;return r.a.createElement("div",{className:"Course"},r.a.createElement("div",{className:"Course-backLink"},r.a.createElement(l.a,{variation:"tertiary",path:"/courses"},"Back to Courses")),r.a.createElement(f.a,{title:i},r.a.createElement("p",null,s)),r.a.createElement("ul",null,o.map((function(e){var t=e.link,n=e.title,a=e.description,i=""+g+t;return r.a.createElement(d,{key:n,title:n,link:i,description:a})}))),a.length>2&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Course-footer"}),r.a.createElement(f.a,{title:"Related Themes"},r.a.createElement(c,{tags:a,tagSlugs:m}))))}),p=n(226);n(225);n.d(t,"query",(function(){return v}));var v="309625229";t.default=function(e){var t=e.data,n=t.site.siteMetadata,a=n.title,l=n.subtitle,c=t.markdownRemark.frontmatter,s=c.title,o=c.description,u=null!==o?o:l;return r.a.createElement(i.a,{title:s+" - "+a,description:u},r.a.createElement(p.a,null,r.a.createElement(g,{course:t.markdownRemark})))}},262:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=function(e){var t=e.is,n=e.children,a=e.mt,i=e.mb,l=e.ml,c=e.mr,s=t;return r.a.createElement(s,{style:{marginTop:""+a,marginRight:""+c,marginBottom:""+i,marginLeft:""+l}},n)};i.defaultProps={is:"div",mb:"0px",mr:"0px",mt:"0px",ml:"0px"};var l=i;n.d(t,"a",(function(){return l}))},274:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(62),l=n.n(i),c=n(262),s=(n(228),function(e){var t=l()("SectionTitle",{"SectionTitle--body":"xl"===e.fontSize,"SectionTitle--uppercase":!0===e.textTransform}),n=""+e.headingLevel;return r.a.createElement(c.a,{mb:e.mb},r.a.createElement(n,{className:t}," ",e.children," "))});s.defaultProps={headingLevel:"h2",fontSize:"large",textTransform:!1,mb:"0px"};var o=s;n.d(t,"a",(function(){return o}))},276:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(62),l=n.n(i),c=n(274),s=(n(229),function(e){var t=e.className,n=e.children,a=e.title,i=e.subTitle,s=e.isLight,o=e.contentAlignment,u=e.titleAlignment,m=l()("ContentSection-title",{"ContentSection-title--alignCenter":"center"===u,"ContentSection-title--alignLeft":"left"===u,"ContentSection-title--textLight":s}),d=l()("ContentSection-content "+t,{"ContentSection-content--alignCenter":"center"===o,"ContentSection-content--alignLeft":"left"===o});return r.a.createElement("div",{className:"ContentSection"},a&&r.a.createElement("header",{className:m},r.a.createElement(c.a,null,a),i&&r.a.createElement(c.a,null,i)),r.a.createElement("div",{className:d},n))});s.defaultProps={className:"",title:null,subTitle:null,contentAlignment:"left",titleAlignment:"left",isLight:!1};var o=s;n.d(t,"a",(function(){return o}))},281:function(e,t,n){"use strict";n(302)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},302:function(e,t,n){var a=n(1),r=n(11),i=n(41),l=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(l,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);
//# sourceMappingURL=component---src-templates-course-template-js-07a8c26bc3c624c332e4.js.map