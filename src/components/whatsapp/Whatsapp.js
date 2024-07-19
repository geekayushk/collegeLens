import React from 'react'
import './Whatsapp.css'
const Whatsapp = () => {
    return (
        <>
            <a
                href={`https://wa.me/${919153375491}`}
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </>
    )
}

export default Whatsapp
