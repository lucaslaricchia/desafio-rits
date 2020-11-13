import React from 'react'

import tableIcon from '../assets/Imagens/Grupo 13737.png'
import '../styles/components/greencard.css'

export default function GreenCard (){

    return (
        <div className="greencard-container">
            <div className="green-div">
                <p>1</p>
            </div>
            <div className="card-div">
            <img src={tableIcon} className="table-icon" alt="icon" />
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
        </div>
    )
}