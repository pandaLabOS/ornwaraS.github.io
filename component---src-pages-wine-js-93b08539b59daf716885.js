"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[435],{6173:function(e,t,l){l.r(t),l.d(t,{default:function(){return r}});var n=l(7294);function r(){let e=[],[t,l]=n.useState([]);const r={display:"flex",flexDirection:"row",justifyContent:"start",marginTop:"1.5rem",marginRight:"1rem",backgroundColor:"#FCEDDC",borderRadius:"10px",padding:"1rem",height:"405px"},a={display:"flex",flexDirection:"column",fontSize:"24px"};return n.useEffect((async()=>{console.log("Hello");let t=await fetch("https://api.sampleapis.com/wines/reds"),i=await t.json();for(let l=0;l<i.length;l++)e.push(n.createElement("div",{style:r},n.createElement("img",{style:{borderRadius:"5px"},src:i[l].image}),n.createElement("div",{style:{marginLeft:"1rem"}},n.createElement("h2",{style:{fontSize:"28px"}},i[l].wine),n.createElement("div",{style:a},n.createElement("div",null,n.createElement("b",null,"Winery: "),i[l].winery),n.createElement("div",null,n.createElement("b",null,"Rating: "),i[l].rating.average),n.createElement("div",null,n.createElement("b",null,"Reviews: "),i[l].rating.reviews),n.createElement("div",null,n.createElement("b",null,"Location: "),i[l].location)))));l(e)}),[]),n.createElement("div",null,n.createElement("div",{style:{backgroundColor:"#BE3455",marginTop:"-30px"}},n.createElement("h1",{style:{textAlign:"center",color:"#FCEDDC",fontSize:"64px"}},"WINES"),n.createElement("ul",null,t)))}}}]);
//# sourceMappingURL=component---src-pages-wine-js-93b08539b59daf716885.js.map