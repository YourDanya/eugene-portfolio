import React from 'react'
import {NextPage} from "next";

const About: NextPage = () => {
    return (
        <div className={'page_container'}>
            <div className={'page_top'}>
                <div className="page_line"/>
                <div className="page_label">About</div>
                <div className="page_line"/>
            </div>
            <div className="about_title">From Toronto, Ontario. At home everywhere.</div>
            <div className="about_text">
                I grew up in many different countries, which gave me access to an array
                of unique and beautiful landscapes. In these settings, nature inspired me greatly.
                My work displays my appreciation for the natural world I was raised in.
                <br/><br/>
                My paintings are characterized by light, shadows, and contrast.
                I use these elements to help environments tell emotional stories.
                <br/><br/>
                Today, I am a freelance artist located in Toronto, Ontario, Canada.
                If you would like to work together, or you are interested in commissioning work,
                I am available by email at <span style={{fontStyle: 'italic'}}>eugenes16@hotmail.com</span>
            </div>
            <div className="page_line">

            </div>
        </div>
    )
}

export default About