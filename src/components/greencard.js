import React from 'react'

import tableIcon from '../assets/Imagens/Grupo 13737.png'
import '../styles/components/greencard.css'

export default function GreenCard (props){

    return (
        <div className="greencard-container">
            <div className="green-div">
                <p>{props.number}</p>
            </div>
            <div className="card-div">
            <img src={tableIcon} className="table-icon" alt="icon" />
            <p>{props.text}</p>
            </div>
        </div>
    )
}