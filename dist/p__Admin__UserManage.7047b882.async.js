(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[210],{32070:function(){},61004:function(W,j,e){"use strict";e.r(j),e.d(j,{default:function(){return H}});var c=e(11849),x=e(90636),E=e(3182),U=e(12968),b=e(20352),g=e(67294),a=e(28991),y=e(81253),m=e(57663),s=e(71577),u=e(59250),T=e(13013),B=e(30887),S=e(18515),f=e(84305),D=e(39559),t=e(85893),C=e(57254),P=e(44545),k=e(94184),N=e.n(k),Q=e(32070),L=["key","name"],F=function(r){var l=r.children,d=r.menus,n=r.onSelect,v=r.className,o=r.style,O=(0,g.useContext)(D.ZP.ConfigContext),i=O.getPrefixCls,I=i("pro-table-dropdown"),K=(0,t.jsx)(S.Z,{onClick:function(p){return n&&n(p.key)},items:d==null?void 0:d.map(function(Z){return{label:Z.name,key:Z.key}})});return(0,t.jsx)(T.Z,{overlay:K,className:N()(I,v),children:(0,t.jsxs)(s.Z,{style:o,children:[l," ",(0,t.jsx)(C.Z,{})]})})},M=function(r){var l=r.className,d=r.style,n=r.onSelect,v=r.menus,o=v===void 0?[]:v,O=r.children,i=(0,g.useContext)(D.ZP.ConfigContext),I=i.getPrefixCls,K=I("pro-table-dropdown"),Z=(0,t.jsx)(S.Z,{onClick:function(R){n==null||n(R.key)},items:o.map(function(p){var R=p.key,J=p.name,A=(0,y.Z)(p,L);return(0,a.Z)((0,a.Z)({key:R},A),{},{title:A.title,label:J})})});return(0,t.jsx)(T.Z,{overlay:Z,className:N()(K,l),children:(0,t.jsx)("a",{style:d,children:O||(0,t.jsx)(P.Z,{})})})};M.Button=F;var $=M,z=e(10826),G=e(93387),w=[{dataIndex:"id",valueType:"indexBorder",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",copyable:!0},{title:"\u7528\u6237\u8D26\u6237",dataIndex:"userAccount",copyable:!0},{title:"\u5934\u50CF",dataIndex:"avatarUrl",render:function(r,l){return(0,t.jsx)("div",{children:(0,t.jsx)(b.Z,{src:l.avatarUrl,width:100})})}},{title:"\u6027\u522B",dataIndex:"gender"},{title:"\u7535\u8BDD",dataIndex:"phone",copyable:!0},{title:"\u90AE\u4EF6",dataIndex:"email",copyable:!0},{title:"\u72B6\u6001",dataIndex:"userStatus"},{title:"\u661F\u7403\u7F16\u53F7",dataIndex:"planetCode"},{title:"\u89D2\u8272",dataIndex:"userRole",valueType:"select",valueEnum:{0:{text:"\u666E\u901A\u7528\u6237",status:"Default"},1:{text:"\u7BA1\u7406\u5458",status:"Success"}}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime"},{title:"\u64CD\u4F5C",valueType:"option",render:function(r,l,d,n){return[(0,t.jsx)("a",{onClick:function(){var o;n==null||(o=n.startEditable)===null||o===void 0||o.call(n,l.id)},children:"\u7F16\u8F91"},"editable"),(0,t.jsx)("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view"),(0,t.jsx)($,{onSelect:function(){return n==null?void 0:n.reload()},menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}],H=function(){var h=(0,g.useRef)();return(0,t.jsx)(z.ZP,{columns:w,actionRef:h,cardBordered:!0,request:(0,E.Z)((0,x.Z)().mark(function r(){var l,d,n,v,o=arguments;return(0,x.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=o.length>0&&o[0]!==void 0?o[0]:{},d=o.length>1?o[1]:void 0,n=o.length>2?o[2]:void 0,console.log(d,n),i.next=6,(0,G.pz)();case 6:return v=i.sent,i.abrupt("return",{data:v});case 8:case"end":return i.stop()}},r)})),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"id",search:{labelWidth:"auto"},form:{syncToUrl:function(l,d){return d==="get"?(0,c.Z)((0,c.Z)({},l),{},{created_at:[l.startTime,l.endTime]}):l}},pagination:{pageSize:5},dateFormatter:"string",headerTitle:"\u9AD8\u7EA7\u8868\u683C"})}},34952:function(W,j,e){"use strict";var c=e(22122),x=e(15105),E=e(67294),U=function(a,y){var m={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&y.indexOf(s)<0&&(m[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(a);u<s.length;u++)y.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(a,s[u])&&(m[s[u]]=a[s[u]]);return m},b={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},g=E.forwardRef(function(a,y){var m=function(t){var C=t.keyCode;C===x.Z.ENTER&&t.preventDefault()},s=function(t){var C=t.keyCode,P=a.onClick;C===x.Z.ENTER&&P&&P()},u=a.style,T=a.noStyle,B=a.disabled,S=U(a,["style","noStyle","disabled"]),f={};return T||(f=(0,c.Z)({},b)),B&&(f.pointerEvents="none"),f=(0,c.Z)((0,c.Z)({},f),u),E.createElement("div",(0,c.Z)({role:"button",tabIndex:0,ref:y},S,{onKeyDown:m,onKeyUp:s,style:f}))});j.Z=g}}]);
