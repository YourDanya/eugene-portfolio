import React, {useState} from 'react'
import axios, {AxiosError} from "axios";

const MyForm: React.FC = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const [message, setMessage] = useState('')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const res = await axios({
                url: 'https://eugene-portfolio.vercel.app/api/hello',
                method: 'POST',
                data: values
            })
            const message = res.data.message
            setMessage(message)
        } catch (err: any) {
            const message = err.response.data.message
            setMessage(message)
        }
        // setValues({name: '', email: '', phone: ''})
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <form onSubmit={onSubmit} className={'form'}>
            <input
                placeholder={'Name'}
                type={'text'}
                name={'name'}
                value={values.name}
                onChange={onChange}
                className={'form_input'}
            />
            <input
                placeholder={'Email'}
                type={'email'}
                name={'email'}
                value={values.email}
                onChange={onChange}
                className={'form_input'}
            />
            <input
                placeholder={'Phone'}
                type={'tel'}
                name={'phone'}
                value={values.phone}
                onChange={onChange}
                className={'form_input'}
            />
            {
                message ?
                    <div className="form_message">
                        {message}
                    </div> : ''
            }
            <button className={'form_button'}>submit</button>
        </form>
    )
}

export default MyForm