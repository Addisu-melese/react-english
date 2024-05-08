function customRender(renderingElement,container)
{
const docelement=document.createElement(renderingElement.type);
docelement.innerHTML=renderingElement.children
for(const prop in renderingElement.props){
    docelement.setAttribute(prop,renderingElement.props[prop])
}
container.appendChild(docelement)
}
const renderingElement={
type:"a",
props:{
    href:"#",
    target:"_blank"
},
children:"click me1"
}
const container=document.querySelector("#root")
customRender(renderingElement,container)