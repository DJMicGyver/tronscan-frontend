(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1443:function(e,t,a){e.exports=a.p+"static/media/logo_default.22fc28d0.png"},1445:function(e,t,a){"use strict";a.d(t,"a",function(){return E});var n=a(1450),r=a.n(n),l=a(2),o=a.n(l),c=a(30),i=a(5),s=a(15),u=a(14),m=a(20),p=a(19),d=a(21),f=a(0),g=a.n(f),b=a(16);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).loadDatas=Object(i.a)(o.a.mark(function e(){var t,n,r,l,c=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<c.length&&void 0!==c[0]?c[0]:1,n=1<c.length&&void 0!==c[1]?c[1]:40,r=a.state.filter,e.next=5,b.b.getTokens(w({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=w({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(w({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange&&a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props,t=e.tableData,n=(e.filterDropdownVisible,a.state.searchText),r=new RegExp(n,"gi");a.setState({filterDropdownVisible:!1,filtered:!!n,data:t.map(function(e){return e.name.match(r)?w({},e,{name:g.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(n,")|(?=").concat(n,")"),"i")).map(function(e,t){return e.toLowerCase()===n.toLowerCase()?g.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a={},n=[],r=!0,l=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var s=c.value;if(s.sorter&&!s.filterDropdown){var u={sorter:t(s.key)};n.push(w({},s,{},u))}else if(!s.sorter&&s.filterDropdown){var m=w({},a);n.push(w({},s,{},m))}else if(s.sorter&&s.filterDropdown){var p=w({sorter:t(s.key)},a);n.push(w({},s,{},p))}else n.push(s)}}catch(e){l=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}return n},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:w({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,l=e.column,o=e.bordered,c=e.pagination,i=void 0===c||c,s=e.scroll,u=e.Footer,m=e.locale,p=e.addr,d=e.transfers,f=e.nopadding,b=(e.contractAddress,e.isPaddingTop,this.setColumn(l)),h=i?w({total:t},this.state.pagination):i;return g.a.createElement("div",null," ",p?g.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==d?" transfer-mt-100":" transfer-pt-100")+(f?" transfer-mp-0":"")},g.a.createElement(r.a,{bordered:o,columns:b,rowKey:function(e,t){return t},dataSource:n,locale:m,scroll:s,footer:u,pagination:h,loading:a,onChange:this.handleTableChange})," "):g.a.createElement("div",{className:"card table_pos"},g.a.createElement(r.a,{bordered:o,columns:b,footer:u,rowKey:function(e,t){return t},dataSource:n,locale:m,scroll:s,pagination:h,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(f.Component)},3472:function(e,t,a){"use strict";a.r(t);var n,r=a(1377),l=a.n(r),o=a(267),c=a.n(o),i=a(39),s=a.n(i),u=a(2),m=a.n(u),p=a(5),d=a(15),f=a(14),g=a(20),b=a(19),h=a(21),w=a(0),E=a.n(w),k=a(29),x=a(383),y=a(10),v=a(52),O=a.n(v),_=a(3),N=a(16),C=a(23),j=a(268),S=a(387),T=a(87),A=a(1445),D=a(4),P=a(18),M=a(53),R=a(92),I=a(42),L=a(8),B=a.n(L),F=a(9),U=a.n(F),W=a(140),z=a(64),K=Object(W.a)(n=function(e){function t(e){var n;Object(d.a)(this,t),(n=Object(g.a)(this,Object(b.a)(t).call(this,e))).loadPage=Object(p.a)(m.a.mark(function e(){var t,a,r,l,o,c,i,s,u=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0<u.length&&void 0!==u[0]?u[0]:1,a=1<u.length&&void 0!==u[1]?u[1]:20,r=n.state.filter,l=n.props.intl,n.setState({loading:!0}),r.name)return e.next=8,B.a.get(D.f+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&name="+r.name);e.next=13;break;case 8:o=e.sent,c=o.data.data.length,i=o.data.totalAll,e.next=18;break;case 13:return e.next=15,B.a.get(D.f+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&totalAll=1&showAll=2");case 15:o=e.sent,c=o.data.total,i=o.data.totalAll;case 18:return 0===(s=o.data.data).length&&T.toastr.warning(l.formatMessage({id:"warning"}),l.formatMessage({id:"record_not_found"})),n.setState({loading:!1,tokens:s,total:c,totalAll:i}),e.abrupt("return",c);case 22:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=s()(Object(S.a)(n.props.location,"search"));0<e.length?n.setState({filter:{name:"".concat(e)}}):n.setState({filter:{}})},n.onChange=function(e,t){n.loadPage(e,t)},n.searchName=function(e){0<e.length?n.setState({filter:{name:"%25".concat(e,"%25")}}):"#/tokens/list"!==window.location.hash?window.location.hash="#/tokens/list":n.setState({filter:{}})},n.onBuyInputChange=function(e,t,a){var r=n.props.intl;a<e&&(e=a),e=e.replace(/^0|[^\d*]/g,""),n.setState({buyAmount:e});var l=(n.buyAmount.value=e)*t;n.priceTRX.innerHTML=r.formatNumber(l,{maximumFractionDigits:6})},n.preBuyTokens=function(e){n.state.buyAmount;var t=n.props;t.currentWallet,t.wallet.isOpen?n.setState({alert:E.a.createElement(O.a,{showConfirm:!1},E.a.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},E.a.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times"})),E.a.createElement("h5",{style:{color:"black"}},Object(_.c)("buy_token_info")),0===e.remaining&&E.a.createElement("span",null," ",Object(_.c)("no_token_to_buy")),E.a.createElement("div",{className:"input-group mt-5"},E.a.createElement("input",{type:"number",ref:function(e){return n.buyAmount=e},className:"form-control",max:e.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(t){n.onBuyInputChange(t.target.value,e.trxNum/e.num*Math.pow(10,e.precision)/D.M,e.remaining)}})),E.a.createElement("div",{className:"text-center mt-3 text-muted"},E.a.createElement("b",null,"= ",E.a.createElement("span",{ref:function(e){return n.priceTRX=e}},"0")," TRX")),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.buyTokens(e)}},Object(_.c)("participate"))))}):n.setState({alert:E.a.createElement(O.a,{info:!0,showConfirm:!1},E.a.createElement("div",{className:"token-sweet-alert"},E.a.createElement("a",{className:"close",onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times"})),E.a.createElement("span",null,Object(_.c)("login_first")),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(_.c)("OK"))))})},n.buyTokens=function(e){var t=e.trxNum/e.num*Math.pow(10,e.precision),a=n.state.buyAmount;if(!(a<=0)){var r=n.props,l=r.currentWallet,o=(r.wallet,a*(t/D.M));l.balance/D.M<o?n.setState({alert:E.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},E.a.createElement("div",{className:"mt-5 token-sweet-alert"},E.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),E.a.createElement("span",null,Object(_.c)("not_enough_trx_message")),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(_.c)("confirm"))))}):n.setState({alert:E.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},E.a.createElement("div",{className:"mt-5 token-sweet-alert"},E.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),E.a.createElement("p",{className:"ml-auto buy_confirm_message"},Object(_.c)("buy_confirm_message_1")),E.a.createElement("span",null,a," ",e.name," ",Object(_.b)("for")," ",parseFloat((a*(t/D.M)).toFixed(6))," TRX?"),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.confirmTransaction(e)}},Object(_.c)("confirm"))))})}},n.submit=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,r,l,o,c,i,s,u,p,d,f,g,b,h,w;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.trxNum/t.num*Math.pow(10,t.precision),r=n.props,l=r.account,o=r.currentWallet,c=n.state.buyAmount,!U.a.get("islogin")&&"ACCOUNT_LEDGER"!==n.props.walletType.type&&"ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=32;break}if(s=n.props.tronWeb(),u=n.props.account.tronWeb,e.prev=6,"ACCOUNT_LEDGER"===n.props.walletType.type)return e.next=10,s.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((c*a).toFixed(0)),n.props.walletType.address).catch(function(e){return!1});e.next=16;break;case 10:return p=e.sent,e.next=13,Object(I.c)(p,s);case 13:d=e.sent,f=d.result,i=f;case 16:if("ACCOUNT_TRONLINK"===n.props.walletType.type)return e.next=19,u.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((c*a).toFixed(0)),u.defaultAddress.hex).catch(function(e){return!1});e.next=25;break;case 19:return g=e.sent,e.next=22,Object(I.c)(g,u);case 22:b=e.sent,h=b.result,i=h;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.log(e.t0);case 30:e.next=36;break;case 32:return e.next=34,N.b.participateAsset(o.address,t.ownerAddress,t.id+"",parseInt((c*a).toFixed(0)))(l.key);case 34:w=e.sent,i=w.success;case 36:if(i)return n.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:i,buyAmount:0}),e.abrupt("return",!0);e.next=41;break;case 41:return e.abrupt("return",!1);case 42:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t){return e.apply(this,arguments)}}(),n.confirmTransaction=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=n.props).account,r=a.intl,n.state.buyAmount,n.setState({alert:E.a.createElement(O.a,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:r.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),e.next=5,n.submit(t);case 5:if(!e.sent){e.next=9;break}n.setState({alert:E.a.createElement(O.a,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},E.a.createElement("div",{className:"mt-5 token-sweet-alert"},E.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},E.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),E.a.createElement("h5",{style:{color:"black"}},Object(_.c)("transaction")," ",Object(_.c)("confirm")),E.a.createElement("span",null,Object(_.c)("success_receive")," ",t.name," ",Object(_.c)("tokens")),E.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(_.c)("OK"))))}),e.next=10;break;case 9:n.setState({alert:E.a.createElement(O.a,{danger:!0,title:"Error",onConfirm:function(){return n.setState({alert:null})}},Object(_.c)("fail_transaction"))});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.customizedColumn=function(){var e=n.props.intl,t=a(1443);return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:c()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,n){return E.a.createElement("div",{className:"table-imgtext"},n.imgUrl?E.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==n.id?E.a.createElement("div",{className:"token-img-top"},E.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}}),E.a.createElement("i",null)):E.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}})):E.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},E.a.createElement("img",{style:{width:"42px",height:"42px"},src:a(1443)})),E.a.createElement("div",null,E.a.createElement("h5",null,E.a.createElement(C.f,{name:n.name,id:n.id,namePlus:n.name+" ("+n.abbr+")",address:n.ownerAddress})),E.a.createElement("p",{style:{wordBreak:"break-all"}},n.description)))}},{title:"ID",render:function(e,t){return E.a.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"fund_raised"}),render:function(e,t){return E.a.createElement("div",null,E.a.createElement(y.c,{value:t.participated/D.M,maximumFractionDigits:1})," ","TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"reputation"}),dataIndex:"reputation",key:"reputation",align:"center",className:"ant_table",render:function(t){var a=l()(t);return E.a.createElement("div",null,a&&e.formatMessage({id:a}))}},{title:e.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e){return null===e&&(e=0),E.a.createElement("div",null,E.a.createElement(y.c,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"created_token_time"}),dataIndex:"dateCreated",key:"dateCreated",render:function(e){return E.a.createElement(y.a,{value:e})},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:e.formatMessage({id:"participate"}),align:"center",render:function(e,t){return t.isBlack?E.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:!0},Object(_.c)("participate")):t.endTime<new Date||100===t.issuedPercentage?E.a.createElement("span",{style:{fontWeight:"normal"}},Object(_.c)("finish")):t.startTime>new Date?E.a.createElement("span",{style:{fontWeight:"normal"}},Object(_.c)("not_started")):E.a.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return n.preBuyTokens(t)}},Object(_.c)("participate"))},className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,totalAll:0,filter:{}};var r=s()(Object(S.a)(e.location,"search"));return 0<r.length&&(n.state.filter.name="".concat(r)),n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=t.alert,r=t.loading,l=t.total,o=t.totalAll,c=this.props,i=(c.match,c.intl),s=this.customizedColumn(),u=i.formatMessage({id:"part_total"})+" "+l+"/"+o+" "+i.formatMessage({id:"part_pass"});return E.a.createElement("main",{className:"container header-overlap token_black"},n,r&&E.a.createElement("div",{className:"loading-style"},E.a.createElement(R.b,null)),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-md-12 table_pos"},l?E.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},u," ",E.a.createElement("span",null,E.a.createElement(j.a,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"}))," ","\xa0\xa0"," ",E.a.createElement(z.a,{to:"/exchange/trc10",style:{display:"none"}},Object(_.b)("Trade_on_Poloni DEX"),">")):"",E.a.createElement(A.a,{bordered:!0,loading:r,column:s,data:a,total:l,rowClassName:"table-row",onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(w.Component))||n,H={loadTokens:x.b,login:P.v,reloadWallet:M.c};t.default=Object(k.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},H)(Object(y.h)(K))}}]);