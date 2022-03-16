import React from 'react'
import MyForm from "../form/form.component";

const Footer: React.FC = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer_feedBack'}>
                <div className={'footer_feedBack_title'}>
                    Leave your data so <br/> we can contact with you
                </div>
                <div className={'formWrapper'}>
                    <MyForm/>
                </div>
            </div>
            {/*<div className={'footer_socials'}>*/}
            {/*</div>*/}
        </footer>
    )
}

export default Footer