"use strict";(global.webpackChunkangular_electron=global.webpackChunkangular_electron||[]).push([[592],{493:function(D,u,i){i.d(u,{O:function(){return S}});var o=i(5134),l=i(7289),n=i(504),v=i(4964),r=i(2921),s=function(){var e=function(){function t(a){(0,o.Z)(this,t),this.electronService=a}return(0,l.Z)(t,[{key:"clearAll",value:function(){return(0,r.of)(this.electronService.ipcRenderer.sendSync("clear-data")).pipe((0,r.catchError)(function(c){return new r.Observable(c.json)}))}},{key:"getData",value:function(){return(0,r.of)(this.electronService.ipcRenderer.sendSync("get-data")).pipe((0,r.catchError)(function(c){return new r.Observable(c.json)}))}},{key:"addItem",value:function(){return console.log("run add item in database"),(0,r.of)(this.electronService.ipcRenderer.sendSync("add-data")).pipe((0,r.catchError)(function(c){return new r.Observable(c.json)}))}}]),t}();return e.\u0275fac=function(a){return new(a||e)(n.LFG(v.d))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),d=function(){var e=function(){function t(){(0,o.Z)(this,t)}return(0,l.Z)(t,[{key:"clearAll",value:function(){return(0,r.of)("zzq see get data in web")}},{key:"getData",value:function(){return(0,r.of)([{id:-1,name:"zzq see get data in web"}])}},{key:"addItem",value:function(){return console.log("run add item in web"),(0,r.of)([{id:-1,name:"zzq see get data in web"}])}}]),t}();return e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),S=function(){var e=function(){function t(a,c,f){(0,o.Z)(this,t),this.electronService=a,this.databaseDataServiceService=c,this.webDataService=f}return(0,l.Z)(t,[{key:"getData",value:function(){return this.electronService.isElectron?this.databaseDataServiceService.getData():this.webDataService.getData()}},{key:"addItem",value:function(){return this.electronService.isElectron?this.databaseDataServiceService.addItem():this.webDataService.addItem()}},{key:"clearAll",value:function(){return console.log("zzq see clear data"),this.electronService.isElectron?this.databaseDataServiceService.clearAll():this.webDataService.clearAll()}}]),t}();return e.\u0275fac=function(a){return new(a||e)(n.LFG(v.d),n.LFG(s),n.LFG(d))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);