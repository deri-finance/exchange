webpackJsonp([3],{C7kY:function(t,a){},JblG:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("a3Yh"),s=e.n(i),n=e("hcrA"),l=e.n(n),r=e("Xgv0"),o=e("zf2T"),c=e("zH3I"),d=e.n(c),u=new r.a;function v(t){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0==a?Object(o.a)(t):a>0?Object(o.a)(t).times(Object(o.a)("1"+"0".repeat(a))):Object(o.a)(t).div(Object(o.a)("1"+"0".repeat(-a)))}(t,-18)}var m={name:"trade",data:function(){var t;return t={address:"",IndexPrice:"---",announcement:!1,liquidateprice:"",reslutlong:!0,resultshort:!0,walletBalance:"",TotalPayment:"--",ofContracts:"--",Positionafterexcution:"--",xleverage:"--",TransactionFee:"---",MinMaintenanceMarginRatio:"---",MinInitialMarginRatio:"---",FundingRateCoefficient:"---",Multiplier:"---",BaseToken:"---",Timestamp:"",ByLiquidator:"",LiquidationPrice:"---",UnrealizedPnL:"---",MarginHeld:"---",margin:"---",AverageEntryPrice:"---",position:"---",depositMargin:"",withdrawMargin:"",addmargin:0,MenualMargin:"",ContractVolume:"",unlock:!1,checkbuy:!0,leverage:0,hidemargin:!0,showmargin:!1,optional:!1,symbol:"---",balance:"--",maxmargin:"",mfee:"",connectbtn:!0,wrong:"",existing:""},s()(t,"Timestamp",""),s()(t,"date",""),t},watch:{ContractVolume:{handler:function(t,a){var e=this.position,i=+t;this.ofContracts=i,"---"!=e?(e=+e,l()("#groups").hasClass("checkshort")?this.Positionafterexcution=e-i:this.Positionafterexcution=e+i):l()("#groups").hasClass("checkshort")?this.Positionafterexcution="-"+i:this.Positionafterexcution=i,this.showmargin?this.calMargin(i):this.calMargin(i,this.leverage),0==this.addmargin?(this.existing="(deducted from existing margin)",this.TotalPayment=0):this.existing=""}},MenualMargin:{handler:function(t,a){this.addmargin=+t;var e=this.mfee+this.addmargin;0==this.addmargin?(this.existing="(deducted from existing margin)",this.TotalPayment=0):(this.existing="",this.TotalPayment=e)}},addmargin:{handler:function(t,a){0==t?(this.existing="(deducted from existing margin)",this.TotalPayment=0):this.existing=""}}},mounted:function(){this.dit();var t=this;localStorage.getItem("timestamp")||localStorage.setItem("timestamp",0),this.connectwallet();var a=setInterval(function(){l.a.ajax({url:"https://oracle.deri.finance/price",type:"GET",success:function(a){var e=v(a.price);e=(e=+e).toFixed(2),t.IndexPrice=e}})},1e3);this.$once("hook:beforeDestroy",function(){clearInterval(a)})},methods:{closeannouncement:function(){this.announcement=!1,localStorage.setItem("show",!1)},liquidateEvent:function(){var t=this;u.liquidateEvent().then(function(a){var e=a.length;if(a.length){var i=a[e-1].returnValues;t.liquidateprice=v(i.price),localStorage.getItem("timestamp")!=i.timestamp&&(t.announcement=!0,localStorage.setItem("show",!0)),"true"==localStorage.getItem("show")&&(t.announcement=!0),localStorage.setItem("timestamp",i.timestamp);var s=i.liquidator;s=s.slice(0,6)+"***"+s.slice(s.length-4,s.length);var n=i.timestamp+"000";t.date=d()(+n).format("YYYY-MM-DD HH:mm:ss"),t.ByLiquidator=s}}).catch(function(t){console.log(t)})},place_order_sell:function(){var t=this;this.resultshort=!1;var a=this.TotalPayment,e=this.ContractVolume;return a<0&&(a=0),isNaN(e)?(alert("Please enter a positive number"),this.resultshort=!0,void l()("#modalshort").modal("hide")):+a>this.balance?(alert("insufficient balance in wallet"),this.resultshort=!0,void l()("#modalshort").modal("hide")):+e!==parseInt(e)?(this.ContractVolume="",this.resultshort=!0,alert("volume  must be round"),void l()("#modalshort").modal("hide")):(e*=-1,void u.tradeWithMargin(e,a).then(function(a){"Pool insufficient liquidity"==a.error&&alert("The pool has insufficient liquidity for your trade"),"Trader insufficient margin"==a.error&&alert("Trader insufficient margin"),t.resultshort=!0,l()("#modalshort").modal("hide"),t.reset()}).catch(function(t){}))},place_order_buy:function(){var t=this;this.reslutlong=!1;var a=this.TotalPayment,e=this.ContractVolume;return a<0?(alert("volume has to be greater than zero"),this.reslutlong=!0,void l()("#exampleModal").modal("hide")):+a>this.balance?(alert("not sufficient funds"),this.reslutlong=!0,void l()("#exampleModal").modal("hide")):isNaN(a)?(alert("Please enter the correct number"),this.reslutlong=!0,void l()("#exampleModal").modal("hide")):isNaN(e)?(alert("Please enter a positive number"),this.reslutlong=!0,void l()("#exampleModal").modal("hide")):e<0?(alert("volume has to be greater than zero"),this.reslutlong=!0,void l()("#exampleModal").modal("hide")):+e!==parseInt(e)?(this.ContractVolume="",alert("volume  must be round"),this.reslutlong=!0,void l()("#exampleModal").modal("hide")):void u.tradeWithMargin(e,a).then(function(a){"Pool insufficient liquidity"==a.message&&alert("The pool has insufficient liquidity for your trade"),"Trader insufficient margin"==a.message&&alert("Trader insufficient margin"),t.reslutlong=!0,l()("#exampleModal").modal("hide"),t.reset()}).catch(function(t){})},dit:function(){var t=this;l()(".rc-slider-dot").on("click",function(){var a=l()(this).index(),e=12.5*a,i=t.ContractVolume;l()(".rc-slider-handle").css("left",e+"%"),"0"==a?(t.leverage=0,t.xleverage="--",t.TotalPayment=t.mfee):(t.leverage=parseInt(l()(".rc-slider-mark-text").eq(a).text()),t.xleverage=t.leverage+"x"),i&&t.leverage&&t.calMargin(i,t.leverage),0==t.leverage&&(t.addmargin=0)})},calMargin:function(t,a){var e=this;if(this.showmargin){var i=void 0,s=this.MenualMargin;u.getEstimatedFee(t).then(function(t){var a=+t;a=e.upFixed(a,2),i=+a,e.mfee=+a,0!=e.MenualMargin?(s=+e.MenualMargin,i=s+i,i=i=+e.upFixed(i,3),e.TotalPayment=i):e.TotalPayment=0})}else if("0"==a){var n=void 0,l=0;u.getEstimatedFee(t).then(function(t){var a=+t;a=e.upFixed(a,2),n=+a,e.mfee=+a,l=+e.MenualMargin,n=l+n,n=n=+e.upFixed(n,3),e.TotalPayment=0!=l?n:0})}else u.getEstimatedMargin(t,a).then(function(i){var s=void 0,n=+i;n=+e.upFixed(n,2),u.getEstimatedFee(t).then(function(t){var i=+t;i=e.upFixed(i,2),s=+i,e.mfee=+i,e.showmargin?(n=+e.MenualMargin,s=n+s,s=s=+e.upFixed(s,3),e.TotalPayment=0!=n?s:0):void 0==a?(e.addmargin=0,e.TotalPayment=0):(e.addmargin=0,s=n+s,s=e.upFixed(s,3),e.addmargin=n,0!=e.addmargin?e.TotalPayment=s:e.TotalPayment=0)})})},closeposition:function(){var t=this,a=l()("#closeposition");this.disableButton(a),u.closePosition().then(function(e){t.reset(),t.enableButton(a)}).catch(function(e){alert("Unwind failure"),t.reset(),t.enableButton(a)})},upFixed:function(t,a){var e="0";if(Number(t)&&a>0)if(a=+a||2,/e/.test(t+=""))e=t;else if(/\./.test(t)){t=t+""+Array(a+1).join("0");var i=new RegExp("-?\\d*\\.\\d{0,"+a+"}"),s=i.exec(t)[0];if(+s>=+t)e=s;else{var n=+s+ +("0."+Array(a).join("0")+"1"),l=n+(/\./.test(n+"")?"":".")+""+Array(a+1).join("0");e=i.exec(l)[0]}}else e=t+"."+Array(a+1).join("0");return e},onwithdrawMargin:function(){var t=this,a=this.withdrawMargin,e=l()("#withdrawMarginButton");this.address?a>this.maxmargin?alert("under margin"):+a<=0||isNaN(a)?alert("It has to be greater than zero"):(this.disableButton(e),u.withdrawMargin(a).then(function(a){a.success||alert("insufficient margin o withdrow"),t.enableButton(e),t.reset()})):alert("Please Connect MetaMask wallet first!")},ondepositMargin:function(){var t=this,a=+this.depositMargin,e=l()("#depositMarginButton");this.address?a>this.walletBalance?alert("Insufficient balance in wallet"):+a<=0||isNaN(a)?alert("It has to be greater than zero"):(this.disableButton(e),u.depositMargin(a).then(function(a){a.success||alert("insufficient margin o withdrow"),t.enableButton(e),t.reset()})):alert("Please Connect MetaMask wallet first!")},hideoptional:function(){this.optional=!1},showoptional:function(){this.optional=!0},reset:function(){this.getPositionInfo(),this.getSpecification(),this.getWalletBalance(),this.depositMargin="",this.withdrawMargin="",this.ContractVolume="",this.MenualMargin="",this.ofContracts="--",this.Positionafterexcution="",this.TransactionFee=0,this.addmargin=0,this.TotalPayment=0},getSpecification:function(){var t=this;u.getSpecification().then(function(a){var e=100*a.minInitialMarginRatio,i=100*a.minMaintenanceMarginRatio,s=100*a.feeRatio;t.symbol=a.bSymbol,t.BaseToken=a.symbol,t.FundingRateCoefficient=a.fundingRateCoefficient,t.Multiplier=a.multiplier,t.MinInitialMarginRatio=e+"%",t.MinMaintenanceMarginRatio=i+"%",t.TransactionFee=s+"%"})},connectwallet:function(){var t=this;u.connectWallet().then(function(a){a.success?u.initialize(0).then(function(){t.connectbtn=!1;var a=u.account;a=a.slice(0,6)+"***"+a.slice(a.length-4,a.length),t.address=a,1!=ethereum.networkVersion&&(t.wrong="(Wrong Network! Switch to Ethereum)"),t.isUnlock(),t.getPositionInfo(),t.getSpecification(),t.getWalletBalance();var e=t,i=setInterval(function(){e.getPositionInfo(),e.liquidateEvent()},2e3);t.$once("hook:beforeDestroy",function(){clearInterval(i)})}):alert(a.error)}).catch(function(t){alert("Cannot connect wallet")})},getWalletBalance:function(){var t=this;u.getWalletBalance().then(function(a){var e=+a;t.walletBalance=e,t.balance=e.toFixed(2)}).catch(function(t){})},getPositionInfo:function(){var t=this;u.getPositionInfo().then(function(a){var e=+a.margin;t.maxmargin=e;var i=a.volume,s=+a.averageEntryPrice,n=+a.marginHeld,l=+a.pnl;if(t.margin=e.toFixed(2),t.position=i,isNaN(s)?t.AverageEntryPrice="---":t.AverageEntryPrice=s.toFixed(2),"0"==a.liquidationPrice)t.LiquidationPrice="---";else{var r=+a.liquidationPrice;t.LiquidationPrice=r.toFixed(2)}t.MarginHeld=n.toFixed(2),t.UnrealizedPnL=l.toFixed(8)}).catch(function(t){})},authorization:function(){var t=this,a=l()("#Unlock");this.disableButton(a),a.attr("disabled"),u.unlock().then(function(e){t.enableButton(a),t.isUnlock()}).catch(function(t){})},hideslid:function(){this.hidemargin=!0,this.showmargin=!1,this.leverage=0,this.MenualMargin="",this.addmargin=0,this.xleverage="--",this.TotalPayment=0},showsile:function(){l()(".rc-slider-handle").css("left","0%"),this.hidemargin=!1,this.showmargin=!0,this.leverage=0,this.leverage=0,this.addmargin=0,this.xleverage="--",this.TotalPayment=this.mfee},checkedlong:function(){l()("#groups").removeClass("checkshort"),this.leverage=0,this.checkbuy=!0,this.MenualMargin="",l()(".rc-slider-handle").css("left","0%"),this.addmargin=0,this.xleverage="--",this.ContractVolume="",this.TotalPayment=this.mfee,this.isUnlock()},checkshort:function(){l()("#groups").addClass("checkshort"),this.leverage=0,this.checkbuy=!1,this.MenualMargin="",l()(".rc-slider-handle").css("left","0%"),this.addmargin=0,this.xleverage="--",this.ContractVolume="",this.TotalPayment=0,this.isUnlock()},disableButton:function(t){t.find("span.spinner").show(),t.attr("disabled",!0)},enableButton:function(t){t.find("span.spinner").hide(),t.attr("disabled",!1)},isUnlock:function(){var t=this;u.isUnlocked().then(function(a){a?(l()("input").attr("disabled",!1),t.unlock=!0,l()(".input-group-text").css({background:"#fff"})):(l()("input").attr("disabled",!0),l()(".input-group-text").css({background:"#E9ECEF"}),t.unlock=!1)}).catch(function(t){})}}},p={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"trade"}},[i("div",{staticClass:"modal fade",staticStyle:{top:"50%",left:"50%",color:"black",transform:"translate(-50%, -25%)"},attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),i("div",{staticClass:"modal-body",staticStyle:{color:"black"}},[i("div",[i("label",{staticStyle:{color:"black"}},[t._v("# of Contracts")]),t._v(" "),i("span",{staticClass:"modal_contracts",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.ofContracts))])]),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Position after execution")]),t._v(" "),i("span",{staticClass:"afterposition",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.Positionafterexcution))])]),t._v(" "),t._m(1),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Leverage")]),t._v(" "),i("span",{staticClass:"modal_leverage",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.xleverage))])]),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Margin")]),t._v(" "),i("span",{staticClass:"symbol",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.symbol))]),t._v(" "),i("span",{staticClass:"modal_margin",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.addmargin))])]),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Transaction Fee")]),t._v(" "),i("span",{staticClass:"exis",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.existing))]),t._v(" "),i("span",{staticClass:"symbol",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.symbol))]),t._v(" "),i("span",{staticClass:"fee",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.mfee))])]),t._v(" "),i("br"),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Total Payment")]),t._v(" "),i("span",{staticClass:"symbol",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.symbol))]),t._v(" "),i("span",{staticClass:"payment",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.TotalPayment))])])]),t._v(" "),i("div",{staticClass:"modal-footer",staticStyle:{"justify-content":"center"}},[t.reslutlong?[i("button",{staticClass:"btn btn-secondary",staticStyle:{padding:"6px 20px 6px 20px"},attrs:{type:"button",id:"long_close","data-dismiss":"modal"}},[t._v("\n              Cancel\n            ")]),t._v(" "),i("button",{staticClass:"btn btn-primary",staticStyle:{padding:"6px 29px 6px 29px"},attrs:{type:"button",id:"resultlong"},on:{click:t.place_order_buy}},[t._v("\n              OK\n            ")])]:[t._m(2)]],2)])])]),t._v(" "),i("div",{staticClass:"modal fade",staticStyle:{top:"50%",left:"50%",color:"black",transform:"translate(-50%, -25%)"},attrs:{id:"modalshort",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),i("div",{staticClass:"modal-body",staticStyle:{color:"black"}},[i("div",[i("label",{staticStyle:{color:"black"}},[t._v("# of Contracts")]),t._v(" "),i("span",{staticClass:"modal_contracts",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.ofContracts))])]),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Position after execution")]),t._v(" "),i("span",{staticClass:"afterposition",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.Positionafterexcution))])]),t._v(" "),t._m(4),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Leverage")]),t._v(" "),i("span",{staticClass:"modal_leverage",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.xleverage))])]),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Margin")]),t._v(" "),i("span",{staticClass:"symbol",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.symbol))]),t._v(" "),i("span",{staticClass:"modal_margin",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.addmargin))])]),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Transaction Fee")]),t._v(" "),i("span",{staticClass:"exis",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.existing))]),t._v(" "),i("span",{staticClass:"symbol",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.symbol))]),t._v(" "),i("span",{staticClass:"fee",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.mfee))])]),t._v(" "),i("br"),t._v(" "),i("div",[i("label",{staticStyle:{color:"black"}},[t._v("Total Payment")]),t._v(" "),i("span",{staticClass:"symbol",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.symbol))]),t._v(" "),i("span",{staticClass:"payment",staticStyle:{color:"black",float:"right"}},[t._v(t._s(t.TotalPayment))])])]),t._v(" "),i("div",{staticClass:"modal-footer",staticStyle:{"justify-content":"center"}},[t.resultshort?[i("button",{staticClass:"btn btn-secondary",staticStyle:{padding:"6px 20px 6px 20px"},attrs:{type:"button","data-dismiss":"modal",id:"short_close"}},[t._v("\n              Cancel\n            ")]),t._v(" "),i("button",{staticClass:"btn btn-primary",staticStyle:{padding:"6px 29px 6px 29px"},attrs:{type:"button",id:"resultshort"},on:{click:t.place_order_sell}},[t._v("\n              OK\n            ")])]:[t._m(5)]],2)])])]),t._v(" "),i("div",{staticClass:"nav"},[t._m(6),t._v(" "),i("div",[i("ul",{staticStyle:{"list-style":"none",float:"left",padding:"0",margin:"0","margin-right":"5px"}},[i("li",[i("router-link",{staticClass:"bssy",attrs:{to:"/liquidity"}},[t._v("\n            Add Liquidity\n            ")])],1)]),t._v(" "),t.connectbtn?i("button",{staticClass:"connect br10-rem",attrs:{type:"button",id:"connect-wallet"},on:{click:t.connectwallet}},[t._v("\n        Connect wallet\n      ")]):t._e(),t._v(" "),i("span",{staticClass:"id",staticStyle:{color:"#fff"}},[t._v(t._s(t.address))]),t._v(" "),i("br"),t._v(" "),i("span",{staticStyle:{color:"red"},attrs:{id:"wrong"}},[t._v(t._s(t.wrong))])])]),t._v(" "),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row justify-content-center",staticStyle:{background:"#19202b","margin-top":"29px","margin-left":"0","margin-right":"0"}},[i("div",{staticClass:"tab-content",staticStyle:{"margin-top":"5px",width:"100%"}},[i("div",{staticClass:"tab-pane fade in active fcw show",attrs:{role:"tabpanel",id:"home"}},[i("div",{staticClass:"left"},[i("div",{staticClass:"text-mute"},[t._v("\n              Wallet Balance:\n              "),i("span",{staticClass:"text-mute",attrs:{id:"balance"}},[t._v(t._s(t.balance))]),t._v(" "),i("span",{staticClass:"text-mute symbol"},[t._v(t._s(t.symbol))])]),t._v(" "),i("div",{staticClass:"mb-3 mt-4 gruops checklong",attrs:{id:"groups"}},[i("div",{staticClass:"longs",attrs:{id:"checklongs"},on:{click:t.checkedlong}},[t._v("\n                LONG\n              ")]),t._v(" "),i("div",{staticClass:"shorts",attrs:{id:"checkshorts"},on:{click:t.checkshort}},[t._v("\n                SHORT\n              ")])]),t._v(" "),i("div",{staticClass:"input-group mb-3 mt-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.ContractVolume,expression:"ContractVolume"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Contract Volume","aria-label":"Contract-Volume","aria-describedby":"Contract-Volume",id:"place-order-volume",disabled:"disabled"},domProps:{value:t.ContractVolume},on:{input:function(a){a.target.composing||(t.ContractVolume=a.target.value)}}}),t._v(" "),t._m(7)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hidemargin,expression:"hidemargin"}],staticClass:"leverageWrapper mt-4",staticStyle:{width:"89%",height:"58px","margin-left":"7px"},attrs:{id:"leverageWrapper"}},[i("div",{staticClass:"leverage"},[i("div",{staticClass:"orderControlsInput slider"},[i("div",{staticClass:"rc-slider rc-slider-with-marks"},[i("div",{staticClass:"rc-slider-rail"}),t._v(" "),t._m(8),t._v(" "),i("div",{staticClass:"rc-slider-handle",staticStyle:{left:"0%",right:"auto",transform:"translateX(-50%)"},attrs:{tabindex:"0",role:"slider","aria-valuemin":"0","aria-valuemax":"8","aria-valuenow":"0","aria-disabled":"false"}}),t._v(" "),i("div",{staticClass:"rc-slider-mark"},[i("span",{staticClass:"rc-slider-mark-text",staticStyle:{transform:"translateX(-50%)",left:"3%"},attrs:{title:"Trade with NO additional margin if position with surplus margin"}},[t._v("zero\n                        "),i("svg",{staticClass:"bi bi-exclamation-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),t._v(" "),i("path",{attrs:{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"}})])]),i("span",{staticClass:"rc-slider-mark-text",staticStyle:{transform:"translateX(-50%)",left:"12.5%"}},[t._v("1x")]),i("span",{staticClass:"rc-slider-mark-text",staticStyle:{transform:"translateX(-50%)",left:"25%"}},[t._v("2x")]),i("span",{staticClass:"rc-slider-mark-text",staticStyle:{transform:"translateX(-50%)",left:"37.5%"}},[t._v("3x")]),i("span",{staticClass:"rc-slider-mark-text",staticStyle:{transform:"translateX(-50%)",left:"50%"}},[t._v("5x")]),i("span",{staticClass:"rc-slider-mark-text",staticStyle:{transform:"translateX(-50%)",left:"62.5%"}},[t._v("7x")]),i("span",{staticClass:"rc-slider-mark-text",staticStyle:{transform:"translateX(-50%)",left:"75%"}},[t._v("8x")]),i("span",{staticClass:"rc-slider-mark-text",staticStyle:{transform:"translateX(-50%)",left:"87.5%"}},[t._v("9x")]),i("span",{staticClass:"rc-slider-mark-text",staticStyle:{transform:"translateX(-50%)",left:"100%"}},[t._v("10x")])])])])]),t._v(" "),i("img",{staticClass:"editLeverage",staticStyle:{position:"relative",top:"-14px",left:"104%",width:"1.125em",height:"1.125em",cursor:"pointer"},attrs:{src:e("W/QM"),id:"showmargin",alt:""},on:{click:t.showsile}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showmargin,expression:"showmargin"}],staticClass:"input-group mb-3 mt-1",staticStyle:{width:"101%"},attrs:{id:"place_margin"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.MenualMargin,expression:"MenualMargin"}],staticClass:"form-control number-only",attrs:{type:"text",placeholder:"Manual Margin","aria-label":"Margin","aria-describedby":"Margin",id:"place-order-margin",disabled:"disabled"},domProps:{value:t.MenualMargin},on:{input:function(a){a.target.composing||(t.MenualMargin=a.target.value)}}}),t._v(" "),i("div",{staticClass:"input-group-append",staticStyle:{width:"65px"}},[i("span",{staticClass:"input-group-text symbol",staticStyle:{background:"#E9ECEF"},attrs:{id:"Margin"}},[t._v(t._s(t.symbol))])]),t._v(" "),i("div",{staticStyle:{display:"inline-block"}},[i("button",{staticClass:"close",attrs:{type:"button","aria-label":"关闭"}},[i("span",{staticStyle:{position:"relative",top:"10px",left:"5px"},attrs:{id:"closemargin","aria-hidden":"true"},on:{click:function(a){return a.preventDefault(),t.hideslid(a)}}},[t._v("×")])])])]),t._v(" "),i("div",{staticClass:"text-mute"},[i("div",{attrs:{id:"text-mute-long"}},[t._v("\n                Margin : "),i("span",{staticClass:"text-mute"},[t._v(t._s(t.addmargin))])])]),t._v(" "),i("div",{staticClass:"w-100 mt-4"},[t.unlock?[t.checkbuy?i("div",{attrs:{id:"affirm_long"}},[t._m(9)]):i("div",{attrs:{id:"affirm_short"}},[t._m(10)])]:[i("div",{staticClass:"col-12 ml-0 pl-0",staticStyle:{display:"block"}},[i("button",{attrs:{id:"Unlock"},on:{click:t.authorization}},[i("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"}}),t._v("\n                      UNLOCK\n                    ")])])]],2),t._v(" "),i("div",{staticClass:"hr"}),t._v(" "),i("div",{staticStyle:{height:"2em","margin-top":"8.7%"}},[t._v("\n              Optional\n              "),t.optional?i("svg",{staticClass:"bi bi-chevron-up",staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},on:{click:t.hideoptional}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}})]):i("svg",{staticClass:"bi bi-chevron-down",staticStyle:{cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},on:{click:t.showoptional}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.optional,expression:"optional"}],staticStyle:{"margin-bottom":"30px"},attrs:{id:"optional"}},[i("div",{staticClass:"mt-2",staticStyle:{"margin-bottom":"20px"}},[i("div",{staticClass:"text-mute"},[t._v("\n                  Position:\n                  "),i("span",{staticClass:"text-mute",attrs:{id:"balance"}},[t._v(t._s(t.position))]),t._v(" "),i("span",{staticClass:"text-mute symbol"},[t._v("Contracts ")])]),t._v(" "),i("button",{staticClass:"btn btn-danger mt-4",attrs:{type:"button",id:"closeposition"},on:{click:t.closeposition}},[i("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                  CLOSE POSITION\n                ")])]),t._v(" "),i("div",{staticStyle:{"margin-top":"1.9em"}},[i("div",{staticClass:"text-mute"},[t._v("deposit Margin")]),t._v(" "),i("div",{staticClass:"input-group mb-3 mt-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.depositMargin,expression:"depositMargin"}],staticClass:"form-control number-only",attrs:{type:"text",placeholder:"Deposit Margin","aria-label":"depositMargin","aria-describedby":"depositMargin",id:"depositMargin",disabled:"disabled"},domProps:{value:t.depositMargin},on:{input:function(a){a.target.composing||(t.depositMargin=a.target.value)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text symbol",staticStyle:{background:"#E9ECEF"}},[t._v(t._s(t.symbol))])]),t._v(" "),i("div",{staticClass:"w-100 mt-4 mb-2"},[i("button",{attrs:{type:"button",id:"depositMarginButton"},on:{click:t.ondepositMargin}},[i("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                      DEPOSIT MARGIN\n                    ")])])])]),t._v(" "),i("div",{staticClass:"mt-4"},[i("div",{staticClass:"text-mute"},[t._v("withdraw Margin")]),t._v(" "),i("div",{staticClass:"input-group mb-3 mt-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.withdrawMargin,expression:"withdrawMargin"}],staticClass:"form-control number-only",attrs:{type:"text",placeholder:"Withdraw Margin","aria-label":"withdrawMargin","aria-describedby":"withdrawMargin",id:"withdrawMargin",disabled:"disabled"},domProps:{value:t.withdrawMargin},on:{input:function(a){a.target.composing||(t.withdrawMargin=a.target.value)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text symbol",staticStyle:{background:"#E9ECEF"}},[t._v(t._s(t.symbol))])]),t._v(" "),i("div",{staticClass:"w-100 mt-4"},[i("button",{attrs:{type:"button",id:"withdrawMarginButton"},on:{click:t.onwithdrawMargin}},[i("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                      WITHDRAW MARGIN\n                    ")])])])])])]),t._v(" "),i("div",{staticClass:"right"},[i("div",{staticStyle:{background:"#141924","border-radius":"40px 0 40px 0",width:"90%",margin:"0 auto"}},[i("div",{staticClass:"card-body position"},[i("p",[t._v("Position Info")]),t._v(" "),i("hr",{staticStyle:{"border-top":"1px solid #253246"}}),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Position")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.position))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Average Entry Price")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.AverageEntryPrice))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Margin")]),t._v(" "),i("span",{staticClass:"marginNum float-right text-mute"},[t._v(t._s(t.margin))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Margin Held")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.MarginHeld))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Unrealized PnL")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.UnrealizedPnL))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Liquidation Price")]),t._v(" "),i("span",{staticClass:"Liquidationprice float-right text-mute"},[t._v(t._s(t.LiquidationPrice))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[i("router-link",{attrs:{to:"history"}},[t._v("Trade History")])],1)])])]),t._v(" "),t.announcement?i("div",{staticClass:"card card-bg mt-2",staticStyle:{background:"#141924","border-radius":"40px 0 40px 0",width:"90%",margin:"0 auto","margin-top":"13.4% !important"}},[i("div",{staticClass:"card-body position"},[i("button",{staticClass:"close",staticStyle:{padding:"0",margin:"0"},attrs:{type:"button",id:"trade_close"},on:{click:t.closeannouncement}},[i("span",{staticStyle:{color:"gray"},attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),t._m(11),t._v(" "),i("br"),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Liquidating Price ")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.liquidateprice))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Timestamp")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.date))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("By Liquidator")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.ByLiquidator))])])])]):t._e(),t._v(" "),i("div",{staticClass:"card card-bg pool-params mt-2",staticStyle:{background:"#141924","border-radius":"40px 0 40px 0",width:"90%",margin:"0 auto","margin-top":"13.4% !important","margin-bottom":"30px"}},[i("div",{staticClass:"card-body"},[i("p",[t._v("Contract Info")]),t._v(" "),i("hr",{staticStyle:{"border-top":"1px solid #253246"}}),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Base Token")]),t._v(" "),i("span",{staticClass:"symbol float-right text-mute"},[t._v(t._s(t.symbol))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Symbol")]),t._v(" "),i("span",{staticClass:"svalue float-right text-mute"},[t._v(t._s(t.BaseToken))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Index Price")]),t._v(" "),i("span",{staticClass:"indexprice float-right text-mute"},[t._v(t._s(t.IndexPrice))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Multiplier")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.Multiplier))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Funding Rate Coefficient")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.FundingRateCoefficient))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Min Initial Margin Ratio")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.MinInitialMarginRatio))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Min Maintenance Margin Ratio")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.MinMaintenanceMarginRatio))])]),t._v(" "),i("p",{staticClass:"card-text"},[i("span",{staticClass:"key text-muted"},[t._v("Transaction Fee ")]),t._v(" "),i("span",{staticClass:"value float-right text-mute"},[t._v(t._s(t.TransactionFee))])])])]),t._v(" "),t._m(12)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("span",{staticClass:"modal-title",staticStyle:{color:"black",margin:"0 auto"},attrs:{id:"exampleModalLabel"}},[this._v("CONFIRM")]),this._v(" "),a("button",{staticClass:"close",staticStyle:{padding:"0",margin:"0"},attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{staticStyle:{color:"gray"},attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("label",{staticStyle:{color:"black"}},[this._v("Direction")]),this._v(" "),a("span",{staticStyle:{color:"black",float:"right"}},[this._v("LONG")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-warning",attrs:{type:"button",id:"pengding",disabled:""}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),this._v("\n              Pending\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("span",{staticClass:"modal-title",staticStyle:{color:"black",margin:"0 auto"},attrs:{id:"exampleModalLabel"}},[this._v("CONFIRM")]),this._v(" "),a("button",{staticClass:"close",staticStyle:{padding:"0",margin:"0"},attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{staticStyle:{color:"gray"},attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("label",{staticStyle:{color:"black"}},[this._v("Direction")]),this._v(" "),a("span",{staticStyle:{color:"black",float:"right"}},[this._v("SHORT")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-warning",attrs:{type:"button",disabled:"",id:"short_pengding"}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),this._v("\n              Pending\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"login"},[a("a",{attrs:{href:"https://deri.finance/"}},[a("img",{attrs:{src:e("xAza"),alt:""}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text",staticStyle:{background:"#E9ECEF"},attrs:{id:"Contract-Volume"}},[this._v("Contracts")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"rc-slider-step"},[a("span",{staticClass:"rc-slider-dot",staticStyle:{left:"0%"}}),a("span",{staticClass:"rc-slider-dot",staticStyle:{left:"12.5%"}}),a("span",{staticClass:"rc-slider-dot",staticStyle:{left:"25%"}}),a("span",{staticClass:"rc-slider-dot",staticStyle:{left:"37.5%"}}),a("span",{staticClass:"rc-slider-dot",staticStyle:{left:"50%"}}),a("span",{staticClass:"rc-slider-dot",staticStyle:{left:"62.5%"}}),a("span",{staticClass:"rc-slider-dot",staticStyle:{left:"75%"}}),a("span",{staticClass:"rc-slider-dot",staticStyle:{left:"87.5%"}}),a("span",{staticClass:"rc-slider-dot",staticStyle:{left:"100%"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{attrs:{"data-toggle":"modal","data-target":"#exampleModal",id:"place-order-buy"}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),this._v("\n                      PLACE ORDER\n                    ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{attrs:{"data-toggle":"modal","data-target":"#modalshort",id:"place-order-sell"}},[a("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),this._v("\n                      PLACE ORDER\n                    ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"card-text"},[a("span",{staticClass:"key text-muted"},[this._v("Position liquidated at")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card card-bg mt-2",staticStyle:{"background-color":"rgba(0, 0, 0, 0.4)","border-radius":"30px 0 30px 0",width:"90%",display:"none",margin:"0 auto","margin-top":"30px !important"},attrs:{id:"trade"}},[e("div",{staticClass:"card-body position"},[e("button",{staticClass:"close",staticStyle:{padding:"0",margin:"0"},attrs:{type:"button",id:"trade_close"}},[e("span",{staticStyle:{color:"gray"},attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),e("p",{staticClass:"card-text"},[e("span",{staticClass:"key text-muted"},[t._v("trade")])]),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"card-text"},[e("span",{staticClass:"key text-muted"},[t._v("transactionHash ")]),t._v(" "),e("span",{staticClass:"transactionHash float-right text-mute",staticStyle:{display:"inline-block",width:"50px",overflow:"hidden",height:"20px"}},[t._v("---")])])])])}]};var h=e("C7Lr")(m,p,!1,function(t){e("ika4"),e("ltyC"),e("yTFE"),e("C7kY")},"data-v-984e98c2",null);a.default=h.exports},"W/QM":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACy3fD9AAABGUlEQVQ4EbWUMU7EMBBF4wAdB6CnhH57bsHVqFZC7C32GjRUZEHQoSC2AuF9P7ZDEizbZJeRvsbjmXmxbMdV9R9mrV2jnLUULIbfJz5CN+gBnSp37Auu8N/oxcdDZ3zQ4rchIRjjW3SNGvSFnJGUPYc456nVyu7UhG3Q+ainmy4EUpuGiVwKLIKVAothJcA/wXJAD1vhZb8PwG3ZJbmfK9WVRg6FeR1AEuYXdE+drpWzGHACa4jHVyM048k9idFPKcBG95B42c1am4QJQl0aSMEJ+kBZ2BQYfr1+tRoYYz6BXTB8Y/w+SmaCKFA9gB4zvdF0HZ3dY/LgwO5pYr905Hq+Xmcu7oy+mm1yTx28kgdW303ZeuZi0m07lme0PK7Fp6cAAAAASUVORK5CYII="},a3Yh:function(t,a,e){"use strict";a.__esModule=!0;var i,s=e("liLe"),n=(i=s)&&i.__esModule?i:{default:i};a.default=function(t,a,e){return a in t?(0,n.default)(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}},ika4:function(t,a){},ltyC:function(t,a){},yTFE:function(t,a){}});