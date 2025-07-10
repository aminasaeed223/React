function customerender(reactelement, main1){
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    document.setAttribute('href', reactelement.props.href)
    document.setAttribute('target', reactelement.props.target)

    main1.appendChild(domelement)
}


const main = document.querySelector('#root')
const reactelement= {
    type:'a',
    props:{
        href: 'www.google.com',
        target:'_blank'
    },
    children: 'visit us on google.com'

}
customerender(reactelement, main)