(this["webpackJsonpmicheline-app"]=this["webpackJsonpmicheline-app"]||[]).push([[0],{22:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a,r,i,o,s,c=t(0),m=t.n(c),u=t(9),d=t.n(u),g=(t(22),t(7)),l=t(10),b=t(11),h=t(17),p=t(15),j=t(2),f=t(3),x=t(16),O=t(1),v=f.a.div(a||(a=Object(j.a)(["\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 100vh;\n  box-sizing: border-box;\n  width: 37.5rem;\n  box-shadow: 5px 5px 15px -5px #000000;\n  background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);\n"]))),C=f.a.div(r||(r=Object(j.a)(["\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  padding: 1rem;\n  flex: 1;\n  max-width: 50%;\n\n  p {\n    background: lightsteelblue;\n    border-radius: 0.5rem;\n    padding: 5px;\n  }\n"]))),k=f.a.form(i||(i=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  justify-content: center;\n  align-items: center;\n  button {\n    cursor: pointer;\n    padding: 1rem;\n    margin: 0 auto;\n    background: transparent;\n    border: 0;\n    width: 3rem;\n  }\n"]))),y=f.a.input(o||(o=Object(j.a)(["\n  flex: 1;\n  border: 0;\n  padding: 1rem;\n  border-radius: 0.3rem;\n  margin-left: 0.5rem;\n  outline: none;\n  background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);\n"]))),w=f.a.input(s||(s=Object(j.a)(["\n  width: 6.25rem;\n  border: 0;\n  padding: 1rem;\n  border-radius: 0.3rem;\n  margin-left: 3rem;\n  outline: none;\n  background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);\n"]))),S=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={mensagens:[],nome:"",mensagemUsuario:""},e.doubleClickDeletar=function(n,t){var a=Object(g.a)(e.state.mensagens).filter((function(e){return e.mensagem!==n}));e.setState({mensagens:a}),alert("A mensagem foi deletada!")},e.onChangeNome=function(n){e.setState({nome:n.target.value})},e.onChangeMensagemUsuario=function(n){e.setState({mensagemUsuario:n.target.value})},e.enviarMensagem=function(n){n.preventDefault();var t={nome:e.state.nome,mensagem:e.state.mensagemUsuario},a=[].concat(Object(g.a)(e.state.mensagens),[t]);e.setState({mensagens:a,mensagemUsuario:""})},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(v,{children:[Object(O.jsx)(C,{children:this.state.mensagens.map((function(n,t){return Object(O.jsxs)("p",{onDoubleClick:function(){return e.doubleClickDeletar(n.mensagem,t)},children:[Object(O.jsx)("strong",{children:n.nome}),": ",n.mensagem]},t)}))}),Object(O.jsxs)(k,{onSubmit:this.enviarMensagem,children:[Object(O.jsx)(w,{placeholder:"Nome",value:this.state.nome,onChange:this.onChangeNome}),Object(O.jsx)(y,{placeholder:"Mensagem",value:this.state.mensagemUsuario,onChange:this.onChangeMensagemUsuario}),Object(O.jsx)("button",{children:Object(O.jsx)(x.a,{size:"1.5rem",color:"#404040"})})]})]})}}]),t}(m.a.Component),U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),i(e),o(e)}))};d.a.render(Object(O.jsx)(m.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),U()}},[[28,1,2]]]);
//# sourceMappingURL=main.cb80c4f0.chunk.js.map