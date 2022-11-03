import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function SmsList() {

    const [smsList, setSmsList] = useState([]);
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const data = async () => {
            const url = "http://localhost:5000/api/";
            const result = await axios.get(url);
            console.log(result.data);
            setSmsList(result.data)
        }
        data();
    }, []);


    const onSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/api/";
        try {
            const resp = await axios.post(url,
                {
                    Body: message,
                    From: '+12283358996',
                    To: phone
                })
            console.log(resp.data);

        } catch (error) {
            console.log(error.response);
        }

    }

    return (
        <div className='row m-5'>
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Envía un mensaje</h3>
                    <form onSubmit={onSubmit} >
                        <div className="form-group">
                            <input type="text"
                                className='form-control m-1'
                                placeholder='Escribe tu mensaje'
                                name='message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <input type="text"
                                className='form-control m-1'
                                placeholder='Número'
                                name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary m-1'>
                            Enviar
                        </button>
                    </form>
                </div>

            </div>
            <div className="col-md-8">
                <ul className="list-group">
                    <h2>Historial de mensaje enviados</h2>
                    {smsList.map((sms, i) => {
                        return (
                            <li className='list-group-item list-group-item-action'
                                key={sms.id}>
                                {sms.Body}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}
