/*!build time : 2013-12-12 7:07:09 PM*/
KISSY.add("gallery/uploader/1.5/plugins/imageZoom/imageZoom",function(a,b,c,d){function e(a){var b=this;e.superclass.constructor.call(b,a)}var f="",g=b.all;return a.extend(e,c,{pluginInitializer:function(a){if(!a)return!1;var b=this,c=a.get("theme");if(!c)return!1;var e=b.get("imageHook"),f=new d({baseEl:c.get("queueTarget"),img:e});f.get("baseEl").delegate("click",e,function(a){var b=a.target;f.show(g(b))}),b.set("albums",f),a.on("success",b._successHandler,b)},_successHandler:function(a){var b=a.file,c=b.id,d=b.result,e=d.url,f=g(".J_Pic_"+c);f.attr("data-original-url",e)}},{ATTRS:{pluginId:{value:"imageZoom"},albums:{value:f},imageHook:{value:".preview-img"}}}),e},{requires:["node","base","gallery/albums/1.0/"]});