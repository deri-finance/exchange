webpackJsonp([2],{"0Nqt":function(t,i){},"9mnt":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e,s=a("a3Yh"),n=a.n(s),l=a("Xgv0"),c=(a("zf2T"),a("SXXC")),o=a.n(c),d=(a("0Nqt"),a("ZpE2"),new l.a),r=new l.a;var v={data:function(){return{minAddLiquidity:"",unclaimed:"--",mytradingpencentage:"--",towpool:!1,nettext:"--",settimehour:"-- m -- s",bacpools:!1,netlogo:"",addbtntext:"ADD LIQUIDITY",remobebtntext:"REMOVE LIQUIDITY",myharvestderi:"--",claimed:"--",currentblock:"--",margin:"--",address:"",basesymbol:"--",balance:"--",symbol:"--",unlock:!1,settimeout:"-- d -- h -- m -- s",my_liquidity:"--",liquidity_margin:"",liquidity_volume:"",total_liquidity:"--",PerLiquidityShare:"--",connectbtn:!0,maxRemovableShares:"",modaladd:!1,modalremove:!1,id:0,wrong:"",network:"",pencentage:"--",maxbalance:"",apy:"--",mytradingvolumecurrent:"--",myharvesrcurrent:"--",totaltradingvolumecurrent:"--",myclaimedderi:"--",myUnclaimedderi:"--",bac:{minAddLiquidity:"",unclaimed:"--",towpool:!1,nettext:"--",bacpools:!1,netlogo:"",addbtntext:"ADD LIQUIDITY",remobebtntext:"REMOVE LIQUIDITY",myharvestderi:"--",claimed:"--",currentblock:"--",margin:"--",address:"",basesymbol:"--",balance:"--",symbol:"--",unlock:!1,settimeout:"-- d -- h -- m -- s",my_liquidity:"--",liquidity_margin:"",liquidity_volume:"",total_liquidity:"--",PerLiquidityShare:"--",connectbtn:!0,maxRemovableShares:"",modaladd:!1,modalremove:!1,id:0,wrong:"",network:"",pencentage:"--",maxbalance:"",apy:"--"}}},mounted:function(){o()("button").attr("disabled",!0),o()(".connect").attr("disabled",!1),o()(".close").attr("disabled",!1)},methods:(e={showli:function(){"none"==o()(".libar").css("display")?o()(".libar").css({display:"block"}):o()(".libar").css({display:"none"})},tradeclaim:function(){var t=this,i=o()("#tradeclaimmyderi");0!=this.myUnclaimedderi?(this.disableButton(i),d.tradeClaim().then(function(a){if(!a.success)return alert("Claim failed"),void t.enableButton(i);t.enableButton(i),t.myUnclaimedderi=0})):alert("Sorry,no DERI to claim yet")},settimeh:function(){var t=new Date,i=59-t.getMinutes(),a=59-t.getSeconds();this.settimehour=i+" m "+a+" s"},select_network:function(t){this.network=t,this.chanId=t,o()("#selectwork").modal("hide"),this.connectWallet()},reset:function(){this.getWalletBalance(),this.getSpecification(),this.getLiquidityInfo(),this.liquidity_margin="",this.liquidity_volume=""},bacreset:function(){this.bacgetWalletBalance(),this.bacgetSpecification(),this.bacgetLiquidityInfo(),this.bac.liquidity_margin="",this.bac.liquidity_volume=""},removemax:function(){this.liquidity_volume=this.maxRemovableShares},bacremovemax:function(){this.bac.liquidity_volume=this.bac.maxRemovableShares},addmax:function(){this.liquidity_margin=this.maxbalance},bacaddmax:function(){this.bac.liquidity_margin=this.bac.maxbalance}},n()(e,"bacaddmax",function(){this.bac.liquidity_margin=this.bac.maxbalance}),n()(e,"closemodal_remove",function(){this.modalremove=!1,this.liquidity_volume=""}),n()(e,"bacclosemodal_remove",function(){this.bac.modalremove=!1,this.bac.liquidity_volume=""}),n()(e,"closemodal_add",function(){this.modaladd=!1,this.liquidity_margin=""}),n()(e,"bacclosemodal_add",function(){this.bac.modaladd=!1,this.bac.liquidity_margin=""}),n()(e,"mintDToken",function(){var t=this,i=o()("#claimmyderi");"1"==ethereum.networkVersion?0!=this.unclaimed?(this.disableButton(i),d.mintDToken().then(function(a){a.success||(alert("Claim failed"),t.enableButton(i),t.reset())})):alert("Sorry,no DERI to claim yet"):alert("Please switch to Ethereum Mainnet in your wallet to claim DERI")}),n()(e,"bacmintDToken",function(){var t=this,i=o()("#claimmyderi");"1"==ethereum.networkVersion?0!=this.bac.unclaimed?(this.disableButton(i),r.mintDToken().then(function(a){a.success||alert("Claim failed"),t.enableButton(i),t.bacuserData(),t.bacreset()})):alert("Sorry,no DERI to claim yet"):alert("Please switch to Ethereum Mainnet in your wallet to claim DERI")}),n()(e,"getLiquidityInfo",function(){var t=this;d.getLiquidityInfo().then(function(i){t.maxRemovableShares=i.shares;var a=+i.poolLiquidity;if(t.stotal=a,t.my_liquidity=i.shares,t.total_liquidity=a,"NaN"==i.shareValue)t.PerLiquidityShare="--";else{var e=+i.shareValue;t.PerLiquidityShare=e.toFixed(6)}t.pencentage=i.shares*i.shareValue/i.poolLiquidity*100,console.log(t.pencentage),isNaN(t.pencentage)?t.pencentage="0%":"0"==i.shares?t.pencentage="0%":t.pencentage=t.pencentage.toFixed(2)+"%"}).catch(function(t){console.log(t)})}),n()(e,"bacgetLiquidityInfo",function(){var t=this;r.getLiquidityInfo().then(function(i){t.bac.maxRemovableShares=i.shares;var a=+i.poolLiquidity;if(console.log(i),t.bac.stotal=a,t.bac.my_liquidity=i.shares,t.bac.total_liquidity=a,"NaN"==i.shareValue)t.bac.PerLiquidityShare="--";else{var e=+i.shareValue;t.bac.PerLiquidityShare=e.toFixed(6)}t.bac.pencentage=i.shares*i.shareValue/i.poolLiquidity*100,"0"==i.shares?t.bac.pencentage="0%":t.bac.pencentage=t.bac.pencentage.toFixed(2)+"%"}).catch(function(t){console.log(t)})}),n()(e,"getWalletBalance",function(){var t=this;d.getWalletBalance().then(function(i){t.maxbalance=i,t.balance=i}).catch(function(t){console.log(t)})}),n()(e,"bacgetWalletBalance",function(){var t=this;r.getWalletBalance().then(function(i){t.bac.maxbalance=i,t.bac.balance=i}).catch(function(t){console.log(t)})}),n()(e,"getSpecification",function(){var t=this;d.getSpecification().then(function(i){t.minAddLiquidity=i.minAddLiquidity,t.symbol=i.bSymbol.toUpperCase()}).catch(function(t){console.log(t)})}),n()(e,"bacgetSpecification",function(){var t=this;r.getSpecification().then(function(i){t.bac.minAddLiquidity=i.minAddLiquidity,t.bac.symbol=i.bSymbol.toUpperCase()}).catch(function(t){console.log(t)})}),n()(e,"current",function(){var t=new Date,i=t.getUTCDate(),a=t.getUTCDay();0!=a&&(a=7-a);var e=i+a,s=(t.setUTCDate(e),t.setUTCHours(23),t.setUTCMinutes(59),t.setUTCSeconds(59),t.getUTCDate()),n=t.getUTCHours(),l=t.getUTCMinutes(),c=t.getUTCSeconds(),o=this;setInterval(function(){var t=new Date,i=t.getUTCDate(),a=t.getUTCHours(),e=t.getUTCMinutes(),d=t.getUTCSeconds(),r=s-i+" d "+(n-a)+" h "+(l-e)+" m "+(c-d)+" s";o.settimeout=r},1e3)}),n()(e,"getBlock",function(t){var i=this;this.$axios.get("https://mining.deri.finance/block",{params:{pooladdress:t}}).then(function(t){t.data.startBlock;i.$axios.get("https://api.etherscan.io/api?module=proxy&action=eth_blockNumber").then(function(t){if(t.data.jsonrpc){var a=+t.data.result-11903480;i.currentblock=a}})})}),n()(e,"connectWallet",function(){var t=this;d.connectWallet().then(function(i){if(i.success){var a=d.account;t.address=a.slice(0,6)+"***"+a.slice(a.length-4,a.length),t.connectbtn=!1,t.wrong="",0==t.network&&(t.netlogo="bsc",t.nettext="BSC"),1==t.network&&(t.netlogo="eth",t.nettext="ETH"),2==t.network&&(t.netlogo="heco",t.nettext="HECO"),d.initialize(t.id,t.network).then(function(i){"0"==d.apy?t.apy="--":t.apy=(100*d.apy).toFixed(2)+"%",t.network=d.chanId,t.address=a.slice(0,6)+"***"+a.slice(a.length-4,a.length),t.connectbtn=!1;var e=t;t.usetData();var s,n=setInterval(function(){e.usetData()},6e4),l=setInterval(function(){e.settimeh()},1e3);if(ethereum.networkVersion!=t.network){var c=void 0;return"1"==t.network&&(c="ETHEREUM"),"56"==t.network&&(c="BSC"),"128"==t.network&&(c="HECO"),t.wrong="(Wrong Network! Switch to "+c+")",o()("button").attr("disabled",!0),o()(".connect").attr("disabled",!1),void o()(".close").attr("disabled",!1)}if(o()("button").attr("disabled",!1),t.isUnlock(),t.getWalletBalance(),t.getSpecification(),t.current(),console.log(d.tradeDeriInfo),t.totaltradingvolumecurrent=+d.tradeDeriInfo.poolVolume,t.mytradingvolumecurrent=+d.tradeDeriInfo.userVolume,t.myharvesrcurrent=+d.tradeDeriInfo.userHarvest,t.myclaimedderi=+d.tradeDeriInfo.userClaimedDeri,t.myUnclaimedderi=d.tradeDeriInfo.amount,0!=t.mytradingvolumecurrent){var v=t.totaltradingvolumecurrent/t.mytradingvolumecurrent*100;isNaN(v)?t.mytradingpencentage="0%":t.mytradingpencentage=v+"%"}else t.mytradingpencentage="0%";1==t.network?(t.bacpools=!0,o()(".modal_addliquidity").css({height:"221vh"}),o()(".bscmodal_addliquidity").css({height:"221vh"}),o()(".modal_removeliquidity").css({height:"221vh"}),o()(".bscmodal_removeliquidity").css({height:"221vh"}),r.connectWallet().then(function(i){r.initialize(1,1).then(function(){if("0"==r.apy?t.bac.apy="--":t.bac.apy=(100*r.apy).toFixed(2)+"%",t.bacisUnlock(),t.bacgetWalletBalance(),t.bacgetSpecification(),t.bacgetLiquidityInfo(),t.bacusetData(),t.totaltradingvolumecurrent+=+r.tradeDeriInfo.poolVolume,t.mytradingvolumecurrent+=+r.tradeDeriInfo.userVolume,t.myharvesrcurrent+=+r.tradeDeriInfo.userHarvest,0!=t.mytradingvolumecurrent){var i=t.totaltradingvolumecurrent/t.mytradingvolumecurrent*100;isNaN(i)?t.mytradingpencentage="0%":t.mytradingpencentage=i+"%"}else t.mytradingpencentage="0%";s=setInterval(function(){e.bacusetData()},6e4)})})):t.bacpools=!1,t.getBlock(d.addresses.pool);var u=setInterval(function(){e.getBlock(d.addresses.pool)},2e4);t.$once("hook:beforeDestroy",function(){clearInterval(n),clearInterval(u),clearInterval(l),s&&clearInterval(s)}),t.getLiquidityInfo(),o()("#Unlock").attr("disabled",!1)})}}).catch(function(t){alert("Cannot connect wallet")})}),n()(e,"removeLiquidity",function(){var t=this,i=o()("#removebut"),a=this.liquidity_volume,e=+this.maxRemovableShares,s=e-a;this.address?s<1&&0!=s?alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.'):+a>e?alert("The input liquidity cannot exceed  "+e):+a<=0||isNaN(a)?alert("Invalid Liquidity!"):(this.disableButton(i),d.removeLiquidity(a).then(function(a){if(!a.success)return t.enableButton(i),t.reset(),void alert("failure of transaction");t.modalremove=!1,t.enableButton(i),t.reset()})):alert("Please Connect MetaMask wallet first!")}),n()(e,"bacremoveLiquidity",function(){var t=this,i=o()("#removebut"),a=this.bac.liquidity_volume,e=+this.bac.maxRemovableShares,s=e-a;this.address?s<1&&0!=s?alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.'):+a>e?alert("The input liquidity cannot exceed  "+e):+a<=0||isNaN(a)?alert("Invalid Liquidity!"):(this.disableButton(i),d.removeLiquidity(a).then(function(a){if(!a.success)return t.enableButton(i),t.bacreset(),void alert("failure of transaction");t.bac.modalremove=!1,t.enableButton(i),t.bacreset()})):alert("Please Connect MetaMask wallet first!")}),n()(e,"addLiquidity",function(){var t=this,i=o()("#addbut");this.address?d.getSpecification().then(function(a){t.minAddLiquidity=a.minAddLiquidity;var e=t.liquidity_margin;+e>t.maxbalance?alert("not sufficient funds"):+e<+t.minAddLiquidity?alert("The input liquidity shall not be less than "+t.minAddLiquidity):+e<=0||isNaN(e)?alert("Please enter the correct format!"):(t.disableButton(i),d.addLiquidity(e).then(function(a){a.success||alert("failure of transaction"),t.modaladd=!1,t.enableButton(i),t.reset()}))}):alert("Please Connect MetaMask wallet first!")}),n()(e,"bacaddLiquidity",function(){var t=this,i=o()("#addbut");this.address?r.getSpecification().then(function(a){t.bac.minAddLiquidity=a.minAddLiquidity;var e=t.bac.liquidity_margin;+e>t.bac.maxbalance?alert("not sufficient funds"):+e<+t.bac.minAddLiquidity?alert("The input liquidity shall not be less than "+t.bac.minAddLiquidity):+e<=0||isNaN(e)?alert("Please enter the correct format!"):(t.disableButton(i),r.addLiquidity(e).then(function(a){a.success||alert("failure of transaction"),t.bac.modaladd=!1,t.enableButton(i),t.bacreset()}))}):alert("Please Connect MetaMask wallet first!")}),n()(e,"disableButton",function(t){t.find("span.spinner").show(),t.attr("disabled",!0)}),n()(e,"enableButton",function(t){t.find("span.spinner").hide(),t.attr("disabled",!1)}),n()(e,"authorization",function(){var t=this,i=o()("#Unlock");this.disableButton(i),d.unlock().then(function(a){t.enableButton(i),t.isUnlock()}).catch(function(t){console.log(t)})}),n()(e,"bacauthorization",function(){var t=this,i=o()("#Unlock");this.disableButton(i),r.unlock().then(function(a){t.enableButton(i),t.bacisUnlock()}).catch(function(t){console.log(t)})}),n()(e,"isUnlock",function(){var t=this;d.isUnlocked().then(function(i){t.unlock=!!i}).catch(function(t){})}),n()(e,"bacisUnlock",function(){var t=this;r.isUnlocked().then(function(i){t.bac.unlock=!!i}).catch(function(t){})}),n()(e,"usetData",function(){var t=this;d.userData().then(function(i){t.unclaimed=(+d.unclaimed).toFixed(2),t.claimed=(+d.claimed).toFixed(2),t.myharvestderi=(+d.deriHarvested).toFixed(2)})}),n()(e,"bacusetData",function(){var t=this;r.userData().then(function(i){t.bac.unclaimed=(+r.unclaimed).toFixed(2),t.bac.claimed=(+r.claimed).toFixed(2),t.bac.myharvestderi=(+r.deriHarvested).toFixed(2)})}),e)},u={render:function(){var t=this,i=this,e=i.$createElement,s=i._self._c||e;return s("div",{attrs:{id:"premining"}},[s("div",{staticClass:"modal fade",staticStyle:{top:"50%",left:"50%",color:"black",transform:"translate(-50%, -25%)"},attrs:{id:"selectwork",tabindex:"-1",role:"dialog","aria-labelledby":"selectwork","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[i._m(0),i._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"chain",on:{click:function(t){return i.select_network(1)}}},[s("i",{staticClass:"icon-mainnet"}),i._v(" "),s("span",{staticClass:"icon-network-name"},[i._v("ETHEREUM")]),i._v(" "),s("i",{staticClass:"icon-network eth"})]),i._v(" "),s("div",{staticClass:"chain",on:{click:function(t){return i.select_network(0)}}},[s("i",{staticClass:"icon-mainnet"}),i._v(" "),s("span",{staticClass:"icon-network-name"},[i._v("BSC")]),i._v(" "),s("i",{staticClass:"icon-network bsc"})]),i._v(" "),s("div",{staticClass:"chain",on:{click:function(t){return i.select_network(2)}}},[s("i",{staticClass:"icon-mainnet"}),i._v(" "),s("span",{staticClass:"icon-network-name"},[i._v("HECO")]),i._v(" "),s("i",{staticClass:"icon-network heco"})])])])])]),i._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:i.modaladd,expression:"modaladd"}],staticClass:"modal_addliquidity"},[s("div",{staticClass:"box"},[s("div",{staticClass:"close",on:{click:i.closemodal_add}},[s("img",{attrs:{src:a("GMBp"),alt:""}})]),i._v(" "),s("div",{staticClass:"btitle"},[i._v("\n        Deposit "+i._s(i.symbol)+"\n      ")]),i._v(" "),s("div",{staticClass:"wblance"},[i._v("\n        "+i._s(i.balance)+" "+i._s(i.symbol)+" Available\n      ")]),i._v(" "),s("div",{staticClass:"addvolume"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_margin,expression:"liquidity_margin"}],attrs:{type:"text",placeholder:"liquidity volume",id:"liquidity-margin"},domProps:{value:i.liquidity_margin},on:{input:function(t){t.target.composing||(i.liquidity_margin=t.target.value)}}}),i._v(" "),s("div",{staticClass:"max",on:{click:i.addmax}},[s("span",[i._v("MAX")])])])]),i._v(" "),s("div",{staticClass:"btn_box"},[s("div",{staticClass:"cancel"},[s("button",{staticClass:"btncancle",on:{click:i.closemodal_add}},[i._v("\n            CANCEL\n          ")])]),i._v(" "),s("div",{staticClass:"confirm"},[s("button",{staticClass:"btnconfirm",attrs:{id:"addbut"},on:{click:i.addLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n            CONFIRM\n          ")])])]),i._v(" "),s("div")])]),i._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:i.modalremove,expression:"modalremove"}],staticClass:"modal_removeliquidity"},[s("div",{staticClass:"box"},[s("div",{staticClass:"close",on:{click:i.closemodal_remove}},[s("img",{attrs:{src:a("GMBp"),alt:""}})]),i._v(" "),s("div",{staticClass:"btitle"},[i._v("\n        Withdraw "+i._s(i.symbol)+"\n      ")]),i._v(" "),s("div",{staticClass:"wblance"},[i._v("\n        "+i._s(i.my_liquidity)+" Shares Available\n      ")]),i._v(" "),s("div",{staticClass:"addvolume"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_volume,expression:"liquidity_volume"}],attrs:{type:"text",placeholder:"liquidity volume",id:"liquidity-margin"},domProps:{value:i.liquidity_volume},on:{input:function(t){t.target.composing||(i.liquidity_volume=t.target.value)}}}),i._v(" "),s("div",{staticClass:"max",on:{click:i.removemax}},[s("span",[i._v("MAX")])])])]),i._v(" "),s("div",{staticClass:"btn_box"},[s("div",{staticClass:"cancel"},[s("button",{staticClass:"btncancle",on:{click:i.closemodal_remove}},[i._v("\n            CANCEL\n          ")])]),i._v(" "),s("div",{staticClass:"confirm"},[s("button",{staticClass:"btnconfirm",attrs:{id:"removebut"},on:{click:i.removeLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n            CONFIRM\n          ")])])]),i._v(" "),s("div")])]),i._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:i.bac.modaladd,expression:"bac.modaladd"}],staticClass:"bscmodal_addliquidity"},[s("div",{staticClass:"box"},[s("div",{staticClass:"close",on:{click:i.bacclosemodal_add}},[s("img",{attrs:{src:a("GMBp"),alt:""}})]),i._v(" "),s("div",{staticClass:"btitle"},[i._v("\n        Deposit "+i._s(i.bac.symbol)+"\n      ")]),i._v(" "),s("div",{staticClass:"wblance"},[i._v("\n        "+i._s(i.bac.balance)+" "+i._s(i.bac.symbol)+" Available\n      ")]),i._v(" "),s("div",{staticClass:"addvolume"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.bac.liquidity_margin,expression:"bac.liquidity_margin"}],attrs:{type:"text",placeholder:"liquidity volume",id:"liquidity-margin"},domProps:{value:i.bac.liquidity_margin},on:{input:function(t){t.target.composing||i.$set(i.bac,"liquidity_margin",t.target.value)}}}),i._v(" "),s("div",{staticClass:"max",on:{click:i.bacaddmax}},[s("span",[i._v("MAX")])])])]),i._v(" "),s("div",{staticClass:"btn_box"},[s("div",{staticClass:"cancel"},[s("button",{staticClass:"btncancle",on:{click:i.bacclosemodal_add}},[i._v("\n            CANCEL\n          ")])]),i._v(" "),s("div",{staticClass:"confirm"},[s("button",{staticClass:"btnconfirm",attrs:{id:"addbut"},on:{click:i.bacaddLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n            CONFIRM\n          ")])])]),i._v(" "),s("div")])]),i._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:i.bac.modalremove,expression:"bac.modalremove"}],staticClass:"bscmodal_removeliquidity"},[s("div",{staticClass:"box"},[s("div",{staticClass:"close",on:{click:i.bacclosemodal_remove}},[s("img",{attrs:{src:a("GMBp"),alt:""}})]),i._v(" "),s("div",{staticClass:"btitle"},[i._v("\n        Withdraw "+i._s(i.bac.symbol)+"\n      ")]),i._v(" "),s("div",{staticClass:"wblance"},[i._v("\n        "+i._s(i.bac.my_liquidity)+" Shares Available\n      ")]),i._v(" "),s("div",{staticClass:"addvolume"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.bac.liquidity_volume,expression:"bac.liquidity_volume"}],attrs:{type:"text",placeholder:"liquidity volume",id:"liquidity-margin"},domProps:{value:i.bac.liquidity_volume},on:{input:function(t){t.target.composing||i.$set(i.bac,"liquidity_volume",t.target.value)}}}),i._v(" "),s("div",{staticClass:"max",on:{click:i.bacremovemax}},[s("span",[i._v("MAX")])])])]),i._v(" "),s("div",{staticClass:"btn_box"},[s("div",{staticClass:"cancel"},[s("button",{staticClass:"btncancle",on:{click:i.bacclosemodal_remove}},[i._v("\n            CANCEL\n          ")])]),i._v(" "),s("div",{staticClass:"confirm"},[s("button",{staticClass:"btnconfirm",attrs:{id:"removebut"},on:{click:i.bacremoveLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n            CONFIRM\n          ")])])]),i._v(" "),s("div")])]),i._v(" "),s("div",{staticClass:"nav"},[s("div",{staticClass:"logo"},[i._m(1),i._v(" "),s("div",{staticClass:"connectw",staticStyle:{"text-align":"right"}},[i.connectbtn?s("button",{staticClass:"connect br10-rem",attrs:{type:"button",id:"connect-wallet","data-toggle":"modal","data-target":"#selectwork"}},[i._v("\n          Connect wallet\n        ")]):s("button",{staticClass:"connect",attrs:{"data-toggle":"modal","data-target":"#selectwork"}},[s("i",{class:i.netlogo}),i._v(" "+i._s(i.address)+"\n        ")]),i._v(" "),s("br"),i._v(" "),s("span",{staticStyle:{color:"red"}},[i._v(i._s(i.wrong))])])]),i._v(" "),s("div",{staticClass:"check"},[s("ul",[s("li",{on:{click:i.showli}},[s("img",{attrs:{src:a("RWEA")}})])])])]),i._v(" "),s("div",{staticClass:"libar"},[s("ul",[i._m(2),i._v(" "),s("router-link",{attrs:{to:"/standardInterface"}},[s("li",[i._v("Exchange")])])],1)]),i._v(" "),s("div",{staticClass:"container-fluid",staticStyle:{"padding-left":"40px","padding-right":"40px"}},[s("div",{staticClass:"row justify-content-center",staticStyle:{background:"#19202b","margin-top":"20px","margin-left":"0","margin-right":"0"}},[s("div",{staticClass:"mt-2 fcw",attrs:{role:"tabpanel",id:"liquidity"}},[s("div",{staticClass:"title"},[s("span",[i._v(" POOL @ "+i._s(i.nettext))])]),i._v(" "),s("div",{staticClass:"describe"},[s("span",[i._v(" Provide "+i._s(i.symbol)+"  to Earn DERI ")])]),i._v(" "),s("div",{staticClass:"middel"},[s("div",{staticClass:"claim_box"},[i._m(3),i._v(" "),s("div",{staticClass:"bar"}),i._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"textbox"},[s("div",[i._v("Current Epoch Blocks")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.currentblock))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Current Epoch Remaining Time")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.settimeout))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("My Harvest in Current Epoch (estimated)")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.myharvestderi)+" DERI")])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Claimed DERI")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.claimed))])])]),i._v(" "),s("div",{staticClass:"hr"}),i._v(" "),s("div",{staticClass:"one"},[s("div",[i._v("Unclaimed DERI")]),i._v(" "),s("div",{staticClass:"bole"},[i._v(i._s(i.unclaimed))])]),i._v(" "),s("div",{staticClass:"cbutton"},[s("button",{staticClass:"claim",staticStyle:{color:"#fff"},attrs:{type:"button",id:"claimmyderi"},on:{click:i.mintDToken}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                CLAIM MY DERI\n              ")])])]),i._v(" "),s("div",{staticClass:"add_remove"},[s("div",{staticClass:"liqutditytit"},[s("span",[i._v(" Provide "+i._s(i.symbol)+"  Earn DERIs ")])]),i._v(" "),s("div",{staticClass:"bar"}),i._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"textbox"},[s("div",[i._v("Pool Total Liquidity")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.total_liquidity)+" "+i._s(i.symbol))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("APY")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.apy)+" ")])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Liquidity Share Value")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.PerLiquidityShare)+" "+i._s(i.symbol))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("My Liquidity Pencentage")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.pencentage))])])]),i._v(" "),s("div",{staticClass:"hr"}),i._v(" "),s("div",{staticClass:"one"},[s("div",[i._v("Staked Balance")]),i._v(" "),s("div",{staticClass:"bole"},[i._v(i._s(i.my_liquidity))])]),i._v(" "),i._m(4),i._v(" "),s("div",{staticClass:"button"},[i.unlock?s("div",{staticClass:"lock"},[s("div",{staticClass:"addliquidity"},[i.unlock?s("button",{staticClass:"add",staticStyle:{color:"#fff"},attrs:{type:"button",id:"addLiquidityButton"},on:{click:function(){t.modaladd=!0}}},[i._v("\n                    "+i._s(i.addbtntext)+"\n                  ")]):i._e()]),i._v(" "),s("div",{staticClass:"removeliquidity"},[s("button",{staticClass:"remove",staticStyle:{color:"#fff"},attrs:{type:"button"},on:{click:function(){t.modalremove=!0}}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                    "+i._s(i.remobebtntext)+"\n                  ")])])]):s("div",{staticClass:"unlock"},[s("button",{staticClass:"add",staticStyle:{color:"#fff"},attrs:{type:"button",id:"Unlock",disabled:"disabled"},on:{click:i.authorization}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                  APPROVE\n                ")])])])])]),i._v(" "),i.bacpools?s("div",[s("div",{staticClass:"topool"},[s("div",{staticClass:"describe"},[s("span",[i._v(" Provide "+i._s(i.bac.symbol)+"  to Earn DERI ")])]),i._v(" "),s("div",{staticClass:"middel"},[s("div",{staticClass:"claim_box"},[i._m(5),i._v(" "),s("div",{staticClass:"bar"}),i._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"textbox"},[s("div",[i._v("Current Epoch Blocks")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.currentblock))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Current Epoch Remaining Time")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.settimeout))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("My Harvest in Current Epoch (estimated)")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.bac.myharvestderi)+" DERI")])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Claimed DERI")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.bac.claimed))])])]),i._v(" "),s("div",{staticClass:"hr"}),i._v(" "),s("div",{staticClass:"one"},[s("div",[i._v("Unclaimed DERI")]),i._v(" "),s("div",{staticClass:"bole"},[i._v(i._s(i.bac.unclaimed))])]),i._v(" "),s("div",{staticClass:"cbutton"},[s("button",{staticClass:"claim",staticStyle:{color:"#fff"},attrs:{type:"button",id:"claimmyderi"},on:{click:i.mintDToken}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                CLAIM MY DERI\n              ")])])]),i._v(" "),s("div",{staticClass:"add_remove"},[s("div",{staticClass:"liqutditytit"},[s("span",[i._v(" Provide "+i._s(i.bac.symbol)+"  Earn DERIs ")])]),i._v(" "),s("div",{staticClass:"bar"}),i._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"textbox"},[s("div",[i._v("Pool Total Liquidity")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.bac.total_liquidity)+" "+i._s(i.bac.symbol))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("APY")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.bac.apy)+" ")])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Liquidity Share Value")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.bac.PerLiquidityShare)+" "+i._s(i.bac.symbol))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("My Liquidity Pencentage")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.bac.pencentage))])])]),i._v(" "),s("div",{staticClass:"hr"}),i._v(" "),s("div",{staticClass:"one"},[s("div",[i._v("Staked Balance")]),i._v(" "),s("div",{staticClass:"bole"},[i._v(i._s(i.bac.my_liquidity))])]),i._v(" "),i._m(6),i._v(" "),s("div",{staticClass:"button"},[i.bac.unlock?s("div",{staticClass:"lock"},[s("div",{staticClass:"addliquidity"},[i.bac.unlock?s("button",{staticClass:"add",staticStyle:{color:"#fff"},attrs:{type:"button",id:"addLiquidityButton"},on:{click:function(){t.bac.modaladd=!0}}},[i._v("\n                    "+i._s(i.bac.addbtntext)+"\n                  ")]):i._e()]),i._v(" "),s("div",{staticClass:"removeliquidity"},[s("button",{staticClass:"remove",staticStyle:{color:"#fff"},attrs:{type:"button"},on:{click:function(){t.bac.modalremove=!0}}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                    "+i._s(i.bac.remobebtntext)+"\n                  ")])])]):s("div",{staticClass:"unlock"},[s("button",{staticClass:"add",staticStyle:{color:"#fff"},attrs:{type:"button",id:"Unlock",disabled:"disabled"},on:{click:i.authorization}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                  APPROVE\n                ")])])])])])])]):i._e(),i._v(" "),i._m(7),i._v(" "),s("div",{staticClass:"middel"},[s("div",{staticClass:"claim_box"},[i._m(8),i._v(" "),s("div",{staticClass:"bar"}),i._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"textbox"},[s("div",[i._v("Current Hour Remaining Time")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.settimehour))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("My Harvest in Current Hour (Est)")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.myharvesrcurrent))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Claimed DERI")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.myclaimedderi))])])]),i._v(" "),s("div",{staticClass:"hr"}),i._v(" "),s("div",{staticClass:"one"},[s("div",[i._v("Unclaimed DERI")]),i._v(" "),s("div",{staticClass:"bole"},[i._v(i._s(i.myUnclaimedderi))])]),i._v(" "),s("div",{staticClass:"cbutton"},[s("button",{staticClass:"claim",staticStyle:{color:"#fff"},attrs:{type:"button",id:"tradeclaimmyderi"},on:{click:i.tradeclaim}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                CLAIM MY DERI\n              ")])])]),i._v(" "),s("div",{staticClass:"add_remove"},[i._m(9),i._v(" "),s("div",{staticClass:"bar"}),i._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"textbox"},[s("div",[i._v("Total Trading Volume in Current Hour")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.totaltradingvolumecurrent))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("My Trading Volume in Current Hour")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.mytradingvolumecurrent))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("My Trading Volume Pencentage")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.mytradingpencentage))])])]),i._v(" "),s("div",{staticClass:"hr"}),i._v(" "),s("div",{staticClass:"button",staticStyle:{"margin-top":"70px"}},[s("router-link",{attrs:{to:"/standardInterface"}},[s("button",{staticClass:"claim",staticStyle:{color:"#fff"},attrs:{type:"button",id:"trade"}},[i._v("\n                TRADE\n              ")])])],1)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"modal-header",staticStyle:{"border-bottom":"0"}},[i("span",{staticClass:"modal-title",staticStyle:{margin:"0 auto","margin-top":"30px","font-size":"20px"},attrs:{id:"exampleModalLabel"}},[this._v("Select network")]),this._v(" "),i("button",{staticClass:"close",staticStyle:{padding:"0",margin:"0"},attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{staticStyle:{color:"gray"},attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{target:"_blank",href:"https://deri.finance"}},[i("img",{attrs:{src:a("xAza")}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{target:"_blank",href:"https://deri.finance"}},[i("li",[this._v("\n          Home\n        ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"myclaim"},[i("span",[this._v(" My Harvest in Current Epoch  ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"two"},[i("div",[this._v("Shares")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"myclaim"},[i("span",[this._v(" My Harvest in Current Epoch  ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"two"},[i("div",[this._v("Shares")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"describe"},[i("span",[this._v(" Trade to  Earn DERI ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"myclaim"},[i("span",[this._v(" My Harvest of Trading Mining  ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"liqutditytit"},[i("span",[this._v(" Trade to  Earn DERI ")])])}]};var m=a("C7Lr")(v,u,!1,function(t){a("LHhz"),a("shTE"),a("N+ss")},"data-v-48dfdc16",null);i.default=m.exports},GMBp:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACsUlEQVRIS5WWy29OURTFf4v4D4hXDDDxjnhOSJlJK4yIhhZFW0VIRBhJDYgYGHi1xCMeKTGQtEJiJCTViCBeiRkSKcLQVLas5tzP1d7br92TO7jn7LXWfh4xjEXEJGAdsBaYD0xIx38Bb4EHQI+kb2VuVPQjIiYCR4GdwBugG3gP9KfzU4C5wHpgIXAVOCbp+2B/QwAiYg1wG+gDjkgy01KLiHnASWAFsFmSVVXsP4CIaAVOA3slmdWILSK2AheAQ5L8HbAKQGJ+D6iT9HjEnnMHI6IGeAhszJQMAKSYfwQOjpb5YCJJyRlglpOfAZwHpkuqzS5ERL2xJd2pkoNGYKyka7m7910QklqUSvELsDSf0IhoAHypuUxVROwCOoBGSV05AFfYK2CGAZpdjpKWFch10s8VgUTEDuAi0CrpcsHdZ8AtA/QAzyUdL+kJE3BVVJRExHbgErC7yHnK6xFgpQE+AQckuZkKLSLccA5FC/AHMONS5wnA3d9hgN/AakkvqiSzKYXEx4Z1ngAWAb2jAXAjZbFuqVbOEVEB+AzsrxKizHlbCpGTWy1EdUCnFbhm+ySdKEly5tzjw47dmA6Xk9wmyd8hFhGHgRoDOHFNkpaXdOUVYJ8kJ7liORADdxbc7QW6DDAZcJgWS/JIHrCI2JCmqsPnTi9imSkxwRu5u3OA18DMbFSY3TRJLq0MwLU+RpIVlFpEbALGSbqZu+uS/yGpOQPw5vKwM9vrwzms9i8itgBWPFtSf35cO+t3gVpJT6o5KgmZl84joF6SJ8S/fZDivgc4lapjVEoSc1eZt+DZjEDRyrQST8an6fCHKjmYnVbmKqAhY14KkJS4stqBbcBLvxxySz8AL33vYr84lgBW2+6YDyZT+KrIVcPU9HKwqgXA+BTWn8C79GzplvS1TOVfVtBGNY2lnVcAAAAASUVORK5CYII="},LHhz:function(t,i){},"N+ss":function(t,i){},RWEA:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAiCAYAAAAzrKu4AAACoUlEQVRYR+1YXUiTURh+zv696La2LkKri9imRpfdWOi0lnMWjlqmmP2AoBlJUiJERJJsNp3mAnfRpEIkbc01olokRt1FP25ISr8Qu85UlttOfF8oO7qBX7j4iJ2783zP+5znvN/7Hb7zEqwY6u1aHUlITyKRMICQLQA2rOSs03wWlH6FRPKESuLuyEw4lKxLlidarUK9IO0CpQ2EQLpOi69JhlLEQYgrkhNvQTj8iwv6Y0yrVWxekAYoaPGalDJEIiDB7zlxI2eON6bOy+8loI0ZWk+QLAXpi3x630S4mkJM8vZfv750bvnXKksUEs3WfAcoPStoW5kmE9JNNLm6SRCiy/RagvQpDRFNnv5HBo8EQX6SyLOcMfq30ZmMyxoTmt1sxv7/jCmVSrSdb4bpQBnm5uZx0+3BnaF7KTdeX2vFibpqqFQq3PcF0NnVi8XFxVXcU/U1OF5jhUIhx4jXD5vjBmKxWErNtDV2ub0VnFDyqDvdhMdPnzOYuXwfXE4bgzn7B3DN7mSwqoMmOLs6GOy60wV7d78wY69fBaHetJEJGvX60XjuIoO5XQ4Yy0oY7POXb9i918hgnoE+GIqLGGx65iOKSs3CjE0Ex7AtL5cJGrw7jAvtVxisx34VlkMVDBYKT8FQbmGw/p5OVJpYs2/eTcJYaRVmrPpIFWwdl5aDotEo9putmPowzQgV6LUYG7kNuVzO45RSnGlp42soeezaWQDvsAcymWyZ19DcCp//kTBjHLu0ZA8qjGX4OT+PW4NDq0wtKep1O1B79DBUKiW8vgCejb9IuVhhvg7HrBa++EcfPMT4xMuUPA7MHrBpU5PmQTZj2YwJzYBQvoh/rUV7GRHr9U20F16uKEXZIuC/FrE2VZbMia8NlXTIiKVx9xvGwBZ8WJr64gAAAABJRU5ErkJggg=="},shTE:function(t,i){}});