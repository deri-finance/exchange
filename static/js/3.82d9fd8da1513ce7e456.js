webpackJsonp([3],{"0Nqt":function(t,i){},"9mnt":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("Xgv0"),s=(a("zf2T"),a("hcrA")),n=a.n(s),l=(a("0Nqt"),new e.a);var o={data:function(){return{minAddLiquidity:"",unclaimed:"--",addbtntext:"ADD LIQUIDITY",remobebtntext:"REMOVE LIQUIDITY",myharvestderi:"--",claimed:"--",currentblock:"--",margin:"--",address:"",basesymbol:"--",balance:"--",symbol:"--",unlock:!1,settimeout:"-- d -- h -- m -- s",my_liquidity:"--",liquidity_margin:"",liquidity_volume:"",total_liquidity:"--",PerLiquidityShare:"--",connectbtn:!0,maxRemovableShares:"",modaladd:!1,modalremove:!1,id:0,wrong:"",network:"",pencentage:"--",maxbalance:"",apy:"--",boolstaking:!1}},mounted:function(){this.connectWallet()},methods:{reset:function(){this.getWalletBalance(),this.getSpecification(),this.getLiquidityInfo(),this.liquidity_margin="",this.liquidity_volume=""},removemax:function(){this.liquidity_volume=this.maxRemovableShares},addmax:function(){this.liquidity_margin=this.maxbalance},closemodal_remove:function(){this.modalremove=!1,this.liquidity_volume=""},closemodal_add:function(){this.modaladd=!1,this.liquidity_margin=""},mintDToken:function(){var t=this,i=n()("#claimmyderi");"1"==ethereum.networkVersion?0!=this.unclaimed?(this.disableButton(i),l.mintDToken().then(function(a){if(!a.success)return alert("Claim failed"),t.enableButton(i),t.reset(),void t.userData();t.enableButton(i),t.userData(),t.reset()})):alert("Sorry,no DERI to claim yet"):alert("Please switch to Ethereum Mainnet in your wallet to claim DERI")},getLiquidityInfo:function(){var t=this;l.getLiquidityInfo().then(function(i){t.maxRemovableShares=i.shares;var a=+i.poolLiquidity;if(t.stotal=a,t.my_liquidity=i.shares,t.total_liquidity=a,"NaN"==i.shareValue)t.PerLiquidityShare="--";else{var e=+i.shareValue;t.PerLiquidityShare=e.toFixed(6)}t.pencentage=i.shares*i.shareValue/i.poolLiquidity*100,"0"==i.shares?t.pencentage="0%":t.pencentage=t.pencentage.toFixed(2)+"%"}).catch(function(t){console.log(t)})},getWalletBalance:function(){var t=this;l.getWalletBalance().then(function(i){var a=i;t.maxbalance=+i,t.boolstaking?t.balance=i:t.balance=(+a).toFixed(2)}).catch(function(t){console.log(t)})},getSpecification:function(){var t=this;l.getSpecification().then(function(i){t.minAddLiquidity=i.minAddLiquidity,t.symbol=i.bSymbol.toUpperCase()}).catch(function(t){console.log(t)})},current:function(){var t=new Date,i=t.getUTCDate(),a=t.getUTCDay();0!=a&&(a=7-a);var e=i+a,s=(t.setUTCDate(e),t.setUTCHours(23),t.setUTCMinutes(59),t.setUTCSeconds(59),t.getUTCDate()),n=t.getUTCHours(),l=t.getUTCMinutes(),o=t.getUTCSeconds(),c=this;setInterval(function(){var t=new Date,i=t.getUTCDate(),a=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),d=s-i+" d "+(n-a)+" h "+(l-e)+" m "+(o-r)+" s";c.settimeout=d},1e3)},getBlock:function(t){var i=this;this.$axios.get("https://mining.deri.finance/block",{params:{pooladdress:t}}).then(function(t){t.data.startBlock;i.$axios.get("https://api.etherscan.io/api?module=proxy&action=eth_blockNumber").then(function(t){if(t.data.jsonrpc){var a=+t.data.result-11857946;i.currentblock=a}})})},connectWallet:function(){var t=this;l.connectWallet().then(function(i){i.success&&l.initialize(0).then(function(i){var a=l.account;"0"==l.apy?t.apy="--":t.apy=(100*l.apy).toFixed(2)+"%",t.address=a.slice(0,6)+"***"+a.slice(a.length-4,a.length),t.connectbtn=!1;var e=t;t.usetData();var s=setInterval(function(){e.usetData()},6e4);if(1==ethereum.networkVersion){t.isUnlock(),t.getWalletBalance(),t.getSpecification(),t.current(),t.getBlock(l.addresses.pool);var o=setInterval(function(){e.getBlock(l.addresses.pool)},2e4);t.$once("hook:beforeDestroy",function(){clearInterval(s),clearInterval(o)}),t.getLiquidityInfo(),n()("#Unlock").attr("disabled",!1)}else t.wrong="(Wrong Network! Switch to Ethereum"})}).catch(function(t){alert("Cannot connect wallet")})},removeLiquidity:function(){var t=this,i=n()("#removebut"),a=this.liquidity_volume,e=+this.maxRemovableShares,s=e-a;this.address?s<1&&0!=s?alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.'):+a>e?alert("The input liquidity cannot exceed  "+e):+a<=0||isNaN(a)?alert("Invalid Liquidity!"):(this.disableButton(i),l.removeLiquidity(a).then(function(a){if(!a.success)return t.enableButton(i),t.reset(),void alert("failure of transaction");t.modalremove=!1,t.enableButton(i),t.reset()})):alert("Please Connect MetaMask wallet first!")},addLiquidity:function(){var t=this,i=n()("#addbut");this.address?l.getSpecification().then(function(a){t.minAddLiquidity=a.minAddLiquidity;var e=t.liquidity_margin;+e>t.maxbalance?alert("not sufficient funds"):+e<+t.minAddLiquidity?alert("The input liquidity shall not be less than "+t.minAddLiquidity):+e<=0||isNaN(e)?alert("Please enter the correct format!"):(t.disableButton(i),l.addLiquidity(e).then(function(a){a.success||alert("failure of transaction"),t.modaladd=!1,t.enableButton(i),t.reset()}))}):alert("Please Connect MetaMask wallet first!")},disableButton:function(t){t.find("span.spinner").show(),t.attr("disabled",!0)},enableButton:function(t){t.find("span.spinner").hide(),t.attr("disabled",!1)},authorization:function(){var t=this,i=n()("#Unlock");this.disableButton(i),l.unlock().then(function(a){t.enableButton(i),t.isUnlock()}).catch(function(t){console.log(t)})},isUnlock:function(){var t=this;l.isUnlocked().then(function(i){t.unlock=!!i}).catch(function(t){})},usetData:function(){var t=this;l.userData().then(function(i){t.unclaimed=(+l.unclaimed).toFixed(2),t.claimed=(+l.claimed).toFixed(2),t.myharvestderi=(+l.deriHarvested).toFixed(2)})}}},c={render:function(){var t=this,i=this,e=i.$createElement,s=i._self._c||e;return s("div",{attrs:{id:"premining"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:i.modaladd,expression:"modaladd"}],staticClass:"modal_addliquidity"},[s("div",{staticClass:"box"},[s("div",{staticClass:"close",on:{click:i.closemodal_add}},[s("img",{attrs:{src:a("GMBp"),alt:""}})]),i._v(" "),s("div",{staticClass:"btitle"},[i._v("\n        Deposit "+i._s(i.symbol)+"\n      ")]),i._v(" "),s("div",{staticClass:"wblance"},[i._v("\n        "+i._s(i.balance)+" "+i._s(i.symbol)+" Available\n        ")]),i._v(" "),s("div",{staticClass:"addvolume"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_margin,expression:"liquidity_margin"}],attrs:{type:"text",placeholder:"liquidity volume",id:"liquidity-margin"},domProps:{value:i.liquidity_margin},on:{input:function(t){t.target.composing||(i.liquidity_margin=t.target.value)}}}),i._v(" "),s("div",{staticClass:"max",on:{click:i.addmax}},[s("span",[i._v("MAX")])])])]),i._v(" "),s("div",{staticClass:"btn_box"},[s("div",{staticClass:"cancel"},[s("button",{staticClass:"btncancle",on:{click:i.closemodal_add}},[i._v("\n            CANCEL\n          ")])]),i._v(" "),s("div",{staticClass:"confirm"},[s("button",{staticClass:"btnconfirm",attrs:{id:"addbut"},on:{click:i.addLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n            CONFIRM\n          ")])])]),i._v(" "),s("div")])]),i._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:i.modalremove,expression:"modalremove"}],staticClass:"modal_removeliquidity"},[s("div",{staticClass:"box"},[s("div",{staticClass:"close",on:{click:i.closemodal_remove}},[s("img",{attrs:{src:a("GMBp"),alt:""}})]),i._v(" "),s("div",{staticClass:"btitle"},[i._v("\n        Withdraw "+i._s(i.symbol)+"\n      ")]),i._v(" "),s("div",{staticClass:"wblance"},[i._v("\n        "+i._s(i.my_liquidity)+" Shares Available\n      ")]),i._v(" "),s("div",{staticClass:"addvolume"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_volume,expression:"liquidity_volume"}],attrs:{type:"text",placeholder:"liquidity volume",id:"liquidity-margin"},domProps:{value:i.liquidity_volume},on:{input:function(t){t.target.composing||(i.liquidity_volume=t.target.value)}}}),i._v(" "),s("div",{staticClass:"max",on:{click:i.removemax}},[s("span",[i._v("MAX")])])])]),i._v(" "),s("div",{staticClass:"btn_box"},[s("div",{staticClass:"cancel"},[s("button",{staticClass:"btncancle",on:{click:i.closemodal_remove}},[i._v("\n            CANCEL\n          ")])]),i._v(" "),s("div",{staticClass:"confirm"},[s("button",{staticClass:"btnconfirm",attrs:{id:"removebut"},on:{click:i.removeLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n            CONFIRM\n          ")])])]),i._v(" "),s("div")])]),i._v(" "),s("div",{staticClass:"nav"},[i._m(0),i._v(" "),s("div",{staticClass:"check"},[s("ul",[i._m(1),i._v(" "),i._m(2),i._v(" "),s("router-link",{attrs:{to:"/standardInterface"}},[s("li",[i._v("Exchange")])])],1)]),i._v(" "),s("div",{staticClass:"connectw"},[i.connectbtn?s("button",{staticClass:"connect",attrs:{type:"button",id:"connect-wallet"},on:{click:i.connectWallet}},[i._v("\n        CONNECT WALLET\n      ")]):i._e(),i._v(" "),s("span",{staticClass:"id",staticStyle:{color:"#fff",float:"right"}},[i._v(i._s(i.address))]),i._v(" "),s("br"),i._v(" "),s("span",{staticStyle:{color:"red"},attrs:{id:"wrong"}},[i._v(i._s(i.wrong))])])]),i._v(" "),s("div",{staticClass:"container-fluid",staticStyle:{"padding-left":"40px","padding-right":"40px"}},[s("div",{staticClass:"row justify-content-center",staticStyle:{background:"#19202b","margin-top":"20px","margin-left":"0","margin-right":"0"}},[s("div",{staticClass:"mt-2 fcw",attrs:{role:"tabpanel",id:"liquidity"}},[s("div",{staticClass:"title"},[s("span",[i._v(i._s(i.symbol)+" POOL")])]),i._v(" "),s("div",{staticClass:"describe"},[s("span",[i._v(" Provide "+i._s(i.symbol)+"  to Earn DERI ")])]),i._v(" "),s("div",{staticClass:"middel"},[s("div",{staticClass:"claim_box"},[i._m(3),i._v(" "),s("div",{staticClass:"bar"}),i._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"textbox"},[s("div",[i._v("Current Epoch Blocks")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.currentblock))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Current Epoch Remaining Time")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.settimeout))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("My Harvest in Current Epoch (estimated)")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.myharvestderi)+" DERI")])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Claimed DERI")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.claimed))])])]),i._v(" "),s("div",{staticClass:"hr"}),i._v(" "),s("div",{staticClass:"one"},[s("div",[i._v("Unclaimed DERI")]),i._v(" "),s("div",{staticClass:"bole"},[i._v(i._s(i.unclaimed))])]),i._v(" "),s("div",{staticClass:"cbutton"},[s("button",{staticClass:"claim",staticStyle:{color:"#fff"},attrs:{type:"button",id:"claimmyderi"},on:{click:i.mintDToken}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                CLAIM MY DERI\n              ")])])]),i._v(" "),s("div",{staticClass:"add_remove"},[s("div",{staticClass:"liqutditytit"},[s("span",[i._v(" Provide "+i._s(i.symbol)+"  Earn DERIs ")])]),i._v(" "),s("div",{staticClass:"bar"}),i._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"textbox"},[s("div",[i._v("Pool Total Liquidity")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.total_liquidity)+" "+i._s(i.symbol))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("APY")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.apy)+" ")])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("Liquidity Share Value")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.PerLiquidityShare)+" "+i._s(i.symbol))])]),i._v(" "),s("div",{staticClass:"textbox"},[s("div",[i._v("My Liquidity Pencentage")]),i._v(" "),s("div",{staticClass:"white"},[i._v(i._s(i.pencentage))])])]),i._v(" "),s("div",{staticClass:"hr"}),i._v(" "),s("div",{staticClass:"one"},[s("div",[i._v("Staked Balance")]),i._v(" "),s("div",{staticClass:"bole"},[i._v(i._s(i.my_liquidity))])]),i._v(" "),i._m(4),i._v(" "),s("div",{staticClass:"button"},[i.unlock?s("div",{staticClass:"lock"},[s("div",{staticClass:"addliquidity"},[i.unlock?s("button",{staticClass:"add",staticStyle:{color:"#fff"},attrs:{type:"button",id:"addLiquidityButton"},on:{click:function(){t.modaladd=!0}}},[i._v("\n                    "+i._s(i.addbtntext)+"\n                  ")]):i._e()]),i._v(" "),s("div",{staticClass:"removeliquidity"},[s("button",{staticClass:"remove",staticStyle:{color:"#fff"},attrs:{type:"button"},on:{click:function(){t.modalremove=!0}}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                    "+i._s(i.remobebtntext)+"\n                  ")])])]):s("div",{staticClass:"unlock"},[s("button",{staticClass:"add",staticStyle:{color:"#fff"},attrs:{type:"button",id:"Unlock",disabled:"disabled"},on:{click:i.authorization}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                  APPROVE\n                ")])])])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"logo"},[i("a",{attrs:{target:"_blank",href:"https://deri.finance"}},[i("img",{attrs:{src:a("xAza")}})]),this._v(" "),i("img",{staticStyle:{"margin-left":"27px"},attrs:{src:a("NtU8"),alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{attrs:{target:"_blank",href:"https://deri.finance"}},[i("li",[this._v("Home")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",{staticClass:"active1"},[this._v("\n            Liquidity\n            "),i("div",{staticClass:"bar"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"myclaim"},[i("span",[this._v(" My Harvest in Current Epoch  ")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"two"},[i("div",[this._v("Shares")])])}]};var r=a("C7Lr")(o,c,!1,function(t){a("FOJ1"),a("iNAy")},"data-v-def89db2",null);i.default=r.exports},FOJ1:function(t,i){},GMBp:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACsUlEQVRIS5WWy29OURTFf4v4D4hXDDDxjnhOSJlJK4yIhhZFW0VIRBhJDYgYGHi1xCMeKTGQtEJiJCTViCBeiRkSKcLQVLas5tzP1d7br92TO7jn7LXWfh4xjEXEJGAdsBaYD0xIx38Bb4EHQI+kb2VuVPQjIiYCR4GdwBugG3gP9KfzU4C5wHpgIXAVOCbp+2B/QwAiYg1wG+gDjkgy01KLiHnASWAFsFmSVVXsP4CIaAVOA3slmdWILSK2AheAQ5L8HbAKQGJ+D6iT9HjEnnMHI6IGeAhszJQMAKSYfwQOjpb5YCJJyRlglpOfAZwHpkuqzS5ERL2xJd2pkoNGYKyka7m7910QklqUSvELsDSf0IhoAHypuUxVROwCOoBGSV05AFfYK2CGAZpdjpKWFch10s8VgUTEDuAi0CrpcsHdZ8AtA/QAzyUdL+kJE3BVVJRExHbgErC7yHnK6xFgpQE+AQckuZkKLSLccA5FC/AHMONS5wnA3d9hgN/AakkvqiSzKYXEx4Z1ngAWAb2jAXAjZbFuqVbOEVEB+AzsrxKizHlbCpGTWy1EdUCnFbhm+ySdKEly5tzjw47dmA6Xk9wmyd8hFhGHgRoDOHFNkpaXdOUVYJ8kJ7liORADdxbc7QW6DDAZcJgWS/JIHrCI2JCmqsPnTi9imSkxwRu5u3OA18DMbFSY3TRJLq0MwLU+RpIVlFpEbALGSbqZu+uS/yGpOQPw5vKwM9vrwzms9i8itgBWPFtSf35cO+t3gVpJT6o5KgmZl84joF6SJ8S/fZDivgc4lapjVEoSc1eZt+DZjEDRyrQST8an6fCHKjmYnVbmKqAhY14KkJS4stqBbcBLvxxySz8AL33vYr84lgBW2+6YDyZT+KrIVcPU9HKwqgXA+BTWn8C79GzplvS1TOVfVtBGNY2lnVcAAAAASUVORK5CYII="},NtU8:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAgCAYAAADwkoGKAAAL/ElEQVR4Xu2bO2xUSRaGq7rbbaYHv4A1ywx4mDU73g0gICEmIYCEBAISYhISctQSAVhGgLAAgQiQeAi5hURCQkJMQoK0O8NrwB7jWYaxx9i42/2q0Xddxzq+vrcfhh0E7pJamNu3Xuf85z+PqramwTYyMpIcHx/vqFarHYlEYu38/Hxiampqxlo7Mzk5OXvlypVSg0O1XlsFErC19ihgSqVSPe/fv+90zqXk/bm5OTM9PW34t1wuV5xzM6lUamrLli3vstlseRXIrrXFGhJYBiznnD179uyaUqm0PpFIdJfL5fao/hpYpVLJ8KGlUqmSc+4PY8zv/f39+Ww2W21pYPVJQIBlBwcH17a3t2eKxWJnpVJZa4xJ1BJHHLCkT6VScW1tbe+NMe/m5+fncrncO2OMW30iXp07tjDU0NDQxmQyualYLNYEkxZRPWAJg9EnkUgAsokbN25MrE4xr75d2/Pnz7dXq9WBfD7f1sz2awELUGUyGdPf328eP34cDDswMDC3Y8eOJwcPHqw0M0/r3c9TAvbMmTNfWWsHCoVCspkt1ALWpk2bzJEjR0xbW5s5deqU2bNnj9m7d+9cOp1+Yq1tAasZQX+m7350YMFSR48eNRs2bAgCejJH/jbGzBljlgALN2yM+doYA6ij4i+ehZ8XrbXFv0Lefn1kwhKLVhoxDN+vEUMN761qLdGJ032dtbZmAuTn04kYfVYUz/qxFsW70nECVzg/Pz9QLpc/2BUCqmPHjpmurq7IRDICWMz5T2PMV00A5Rdr7f+aeH/FrzrnMn59oui3xpixesJ2zvUYY7aEJo4zHHmN718bY0h4vjfGiD7yxpiXtQDtnMM4mU/A9Ye1tul41jlHjP2tMWaNXxSAZr+xhuz7fGOMSas+r+3IyEj61atXP8SVFbRwAA6ggYWeP39uJiYmgjoWn76+voCpcIMxLYqxwsBiIwhW3CWCYpO65PFXAguFAXwNrNEGgLXeGLNVyYG6ni4gR9UP+f5nn43/oBSF3J5aa2Nrg865TmNMv8rkf7PWjjZrUZ4ptxljqArQ0MN/rbXzcWP52iYywgilz082m82m0un0NmstQoxtu3fvNjt37gziJlzc27dvzYMHD8zDhw+D/8NUAK9Gm/UCWqR15xzAQohiIQgXd1lYNGPnsMReNS6K/a1Zoa3kfc8EGljM2whjhYH1uzHml3rlFljJOYcRaWBhaAArNjZ1zuEi/vEJgcV6xetgAAvA6u7u7s/n84LSZTqAjQ4cOBCASjcBGIxVB1R0iwIW9IniagGrzxjztzCwwrFALeBohmm0n491wozVKLAIKr9Ta8KF1mU63l8hsFBMh3KFBWstgGyqecYCJMI+gATGquUKiUE1sHj3Ca4wOTY21l8sFlnYkobb2759exB8Uz7AzYXB1cTKPxqwjDHT3tUsHjGF1qGDfiwdt4CQYL+oWDIc/9CHGIXxAb7U997APB50MAtMKmtgDNwWIFr3AcDCyFCUrBNFTRpjwgE88/GMUw5ca7eXgawDYBHrsb5GEiPGoS0Dlh8/Lg5m7s3KdS8AK5vNJjKZzPeVSqVbwEPsJLESfxNT0Xbt2mVwiSsB18zMzExHRweUvrhJ51yYsRYW5X26ZxcYK0grfXvl2U8LX4Qs7wAEiWMY86mPF7Tbjco4pT9G8MLTuwYWScO4FyIxlGZ5FPkza3fOwbCsW1pDTOcZKwysWrYLsNgb4CHgFwNgnb+GmKTeOP/xxhcFLEALeGqeLfsJCGOeBpX306dPb02n0+twd7S7d+8ugkmvBuAdPnw4LuuLXDju8tGjR+bOnTvvhoaGnmnr8bSP4iQ4J8aCXXSg+3dljcwRBSyOi1A4YGHzKFViRoDFvDCWBhbZ1liICURwJQ8QWJxgVisM9tDjsybmx9UFQW4EsHgurimOPdgzgJC4UxgLRcGUsjeMTAfKAIt36wGL8YX52A9sJplcEKQr4xN2og/PYWCAJY39ShwsY0mCg1yfBYIcHBzcXK1WNxInEZQLQ0UhZd++fYF7rNUAE3EXmeP9+/cDYLW1tU3dunULFlhsEfFEoJeIsbWlvPRK0ow15VPyqmc5wCquPY6xYKVndYLiMLCgbpSh3QKAoRygEw4YK1xuiBKZ3ldg6R7EA8rFzvh1yt4I0sXtAQgBFs9lPNgKkOrYZzErj5BRs8CCmQEpRgRb/juUxS4A69y5cxvz+fxmAFHPzeEiDx06FPsewLx06ZIZHR0NACpjJpPJN7dv34YhagELakfhAq4o6sV6AQtCk/gG5RLb0J8+sJwkBLAFwuc7FCbs2AiwSONhrDgXgHU+D6fjPtsVNpD9MoaMw/5YHywglg6wnvg96b2tBFjEh7jfMEPD3ICIdZDCiysPgnQlI5Edcv7RGEOWS31LmgYWbPkvBSzk+jzY6MWLF3ump6dBfENNlx7CHQDS1atXA6bSIF2zZs3Y9evXAUUYWChbaF9AIFnIkmqyF4goRQtfxowCZBywUBigqJfGowBZB1YPMAUMQe2Jy44NCW7p3lEqoNUuROIlvTfcDsxKRR63g56kAs3aASNrwhXKOqOAhWGxXpERwBcX//8B1uXLlzOTk5MouKHbDQCGmhYf4q4wy+ECjx8/vnhHi9sNqVTq2c2bNxFSPWARvNc8snHO4YpYrygF8GApuglDIDQq2uwNhQljrQRYKIxxNyolwpYAtKkbtM65jwksGIZkQoDFfmHwcLISZ0Q8/8mDDvYRGaEHmIy4TjPWC2st4QeuEIDSR8gBub4IFkIta+3atdtKpVLNIqnWGjEUjVKEBhnP+O7EiRNBjEXj8l+5XP4xl8stAYxzLpwBLWQUzQNLjlpiz9S8ADSwADmAqNWHWEbHLigMFwM74CYD2foMbKJeRT5kVHHAktMIcfPEdaxTGAsGlbkxGhgLQ9PAIpEhBtI1Qtw2lf3wfsEAZ4tks8ypgYXB4gopq+gjlcaAxYZPnjxJlsDiGmItfbuBv/fv3x8UUYmr7t27F3xwi7BVtVp9ncvlCCiXtA8AFlkRIBHGwkoA1xLdKdrHChBg+KiEABdBLzsM9gkCCtTAGrfW/urXjYIlFsHiXykrxuLDMZaAUNYIGIixRN7B0Y3vp/fWCLCQBwVZYSwBljYkxifGijMknguwZO2xwPKZMHLjXZ1ILXgC2SX1rHXr1n1TKBR6K5VK3XpF+NoMoKKgCqCEqQBVOp2eKhQKo7lcbhkNewXpDAirgrFquhV/OKyFH8asViJjQZ3Mr4EVVrQeI6Bzzww6dgmA5V0AAS1lBwEGa8eSC845DmVxl8tsST1AxtqIBViAUh8jaWBhSAA9zFhhYHF8RMFTl3IADh4jbERSzyOx4nsdiONBcJHshYRIGoDT+sRIBDN4ggVXqMCV6urq6isUCrBXzaaBxYu4RDJByQLlanImk3kR9wseT73USKSgGdRaGrgmgrtAsbL+KEOQGAvhcFaHUqB0/o0zHHnO7YBpf1aoj5OmeO6BxZoZT2pKPOY7XBBrk5KAyDFujVpZAAIGIJ4R0M1aa3HBxDM8g+V0HYu6HorFVQVuzbtrFIwHqndrhT7IiDKOZItyVQigYWDEWFKkrkc6xLqjy17KZrPpdDq91Vq77IhHIy3sCpeZpnPv29vbX167dm2xvlMPrJ/6e+o74ThJny1GxVBR95diziPrKWTxDpUHkIhjyd2q0HcGI4y7jxW618V4cWtgjoCB1C+xJPYq+3H0aUZYVXpc7pSVIifijlapVPou6vxQRqx1g9R9hqD61KD+0uaPtSKYq729fXMymeyOirmigEVMRVDX09MzNjw8HHuH50sTYms/yyVQk565+TA6Ospxz/owuMLAIqYiK+rv7x9r/WC1BbV6fp8aV6Kzs3OTc65X/zxMA6tYLFaTyeTb2dlZygqtH0u0cNXQNQgCOjs8PLyhUCh8W6lUgtqRAIuf11Mg7O3tfdP61XMLUbVS4FjpUES11m6mig2w8vl8KZ/Pj1+4cIEUe0W/Cmmp4suUQF1XGN720NDQ16lUqm96ehrmGs1ms0vO/75MMbV21awEmgYWE5AxUsDLZrOfTY2qWcG03v8wCfwJX8xandg2gpwAAAAASUVORK5CYII="},iNAy:function(t,i){}});