(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(7),o=n.n(a),i=(n(14),n(2)),u=n(3),l=n(5),h=n(4),b=n(8),j=function(e){return Object(r.jsx)("button",{className:"".concat(e.winnerClass," square"),onClick:e.onClick,children:e.value})},v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"createBoard",value:function(e,t){for(var n=[],s=0,c=0;c<e;c+=1){for(var a=[],o=0;o<t;o+=1)a.push(this.renderSquare(s++,c+1,o+1));n.push(Object(r.jsx)("div",{className:"board-row",children:a},c))}return n}},{key:"renderSquare",value:function(e,t,n){var s=this,c=!this.props.winnerSquares||this.props.winnerSquares[0]!==e&&this.props.winnerSquares[1]!==e&&this.props.winnerSquares[2]!==e?"":"square--green";return Object(r.jsx)(j,{winnerClass:c,value:this.props.squares[e],onClick:function(){return s.props.onClick(e,t,n)}},e)}},{key:"render",value:function(){return Object(r.jsx)("div",{children:this.createBoard(3,3)})}}]),n}(c.a.Component),p=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0,r=0,s=t;r<s.length;r++){var c=Object(b.a)(s[r],3),a=c[0],o=c[1],i=c[2],u=t[n];if(e[a]&&e[a]===e[o]&&e[a]===e[i])return{winner:e[a],winnerRow:u};n++}return{winner:null,winnerRow:null}},d={history:[{squares:Array(9).fill(null)}],reverseMove:!1,currentStepNumber:0,currentLocation:"",xIsNext:!0},m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state=d,r}return Object(u.a)(n,[{key:"handleClick",value:function(e,t,n){var r=this.state.history.slice(0,this.state.currentStepNumber+1),s=r[r.length-1].squares.slice();p(s).winner||s[e]||(s[e]=this.state.xIsNext?"X":"O",this.setState({history:r.concat([{squares:s,stepNumber:r.length,currentLocation:"Row: ".concat(t,", Col: ").concat(n)}]),currentStepNumber:r.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({currentStepNumber:e,xIsNext:e%2===0})}},{key:"sortMoves",value:function(){this.setState({reverseMove:!this.state.reverseMove})}},{key:"reset",value:function(){this.setState({history:[{squares:Array(9).fill(null)}],currentStepNumber:0,xIsNext:!0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,s=n[this.state.currentStepNumber],c=p(s.squares),a=c.winner,o=c.winnerRow,i=n.map((function(e,n){console.log("currentLocation",e);var s=e.currentLocation?"(".concat(e.currentLocation,")"):"",c=e.stepNumber?"Go to move #".concat(e.stepNumber):"Go to game start",a=n===t.state.currentStepNumber?"button--green":"";return Object(r.jsx)("li",{children:Object(r.jsx)("button",{className:"".concat(a," button"),onClick:function(){return t.jumpTo(n)},children:"".concat(c," ").concat(s)})},n)}));return this.state.reverseMove&&i.reverse(),e=a?"Winner ".concat(a):10===n.length?"Draw. No one won.":"Next player: ".concat(this.state.xIsNext?"X":"O"),Object(r.jsxs)("div",{className:"game",children:[Object(r.jsx)("div",{className:"game-board",children:Object(r.jsx)(v,{squares:s.squares,winnerSquares:o,onClick:function(e,n,r){return t.handleClick(e,n,r)}})}),Object(r.jsxs)("div",{className:"game-info",children:[Object(r.jsx)("div",{children:e}),Object(r.jsx)("button",{className:"button",onClick:function(){return t.sortMoves()},children:"Sort moves"}),Object(r.jsx)("button",{className:"button button--new-game",onClick:function(){return t.reset()},children:"New game"}),Object(r.jsx)("ol",{children:i})]})]})}}]),n}(c.a.Component);var f=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(m,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};o.a.render(Object(r.jsx)(f,{}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.7b3bab5c.chunk.js.map