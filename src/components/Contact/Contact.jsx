import React from 'react'
import './Contact.css'

export default function Contact() {
    let mystyle = {
        color: '#fff'
    }
    let mystyle2 = {
        color: '#000'
    }
    return (
        <div className="main">

            <h1 className="text-center" >Contact Me</h1>
            <div className="info">
                <p>
                    Created by : Raj Patel<br />
                    Email Address : patelraj200208@gmail.com<br />
                    Github link : https://github.com/Raj01Patel
                </p>
            </div>

        </div>
    )
}