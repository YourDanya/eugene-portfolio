import React from 'react'
import {NextPage} from "next";
import {AiOutlineInstagram} from "react-icons/ai";

const Contact: NextPage = () => {
    return (
        <div className={'page_container'}>
            <div className={'page_top'}>
                <div className="page_line"/>
                <div className="page_label">Contact</div>
                <div className="page_line"/>
            </div>
            <p className="contact_text">
                Have camera, will travel. Available for assignments, large and small,
                especially ones that require extensive trekking or extreme weather conditions.
            </p>
            <div className="page_line"/>
            <div className="contact_socials">
                <a className={'contact_socials_inst'}>
                    <AiOutlineInstagram className={'inst'}/>
                </a>
                <p className={'contact_socials_email'}>eugenes16@hotmail.com</p>
                <p className={'contact_socials_number'}>0 (66) 384 78 22</p>
            </div>
        </div>
    )
}

export default Contact