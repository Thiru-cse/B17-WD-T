var div1=document.createElement("div");
div1.setAttribute("id","div1");
div1.innerText="Hello";
// <div id="div1">Hello</div>

var div2=document.createElement("div");
div2.setAttribute("id","div2");
div2.innerText="World";
// <div id="div2">World</div>

div1.appendChild(div2);
document.body.append(div1)