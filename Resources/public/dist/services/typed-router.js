define(["services/husky/mediator","suluarticle/services/base-router","suluarticle/utils/template-helper"],function(a,b,c){"use strict";var d={list:c.transformTemplateData(_.template("articles<% if (!!data.type) { %>:<%= data.type %><% } %>/<%= data.locale %>")),add:c.transformTemplateData(_.template("articles/<%= data.locale %>/add:<%= data.type %>"))},e=function(b,c,d){"undefined"==typeof c&&(c=!0),a.emit("sulu.router.navigate",b,c,d||!1)};return{toList:function(a,b,c,f){e(d.list({locale:a,type:b}),c,f)},toAdd:function(a,b){e(d.add({locale:a,type:b}))},toEdit:function(a,c,d){b.toEdit(a,c,d)},toEditForce:function(a,c,d){b.toEditForce(a,c,d)},toEditUpdate:function(a,c,d){b.toEditUpdate(a,c,d)},toPageEdit:function(a,c,d){b.toPageEdit(a,c,d)},toPageAdd:function(a,c){b.toPageAdd(a,c)}}});