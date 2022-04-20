import React from "react"
import Head from 'next/head'

function Header() {
    return ( 
        <header>
            <Head>
            <link
                rel="stylesheet"
                href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css"
            />
            </Head>
            <p>Header</p>
        </header>
    )
    
        
}

export default Header;