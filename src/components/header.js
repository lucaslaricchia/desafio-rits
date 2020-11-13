import React from 'react';
import logo from "../assets/Imagens/logo-rits.png";
import '../styles/components/header.css'
export default function Header(){

    return (
        <header>
        <img src={logo} className="logo-rits" alt="Logo Rits" />
        <nav>
          <ul>
            <li>
              <a href="/">Menu 1</a>
            </li>
            <li>
              <a href="/">Menu 2</a>
            </li>
            <li>
              <a href="/">Menu 3</a>
            </li>
          </ul>
        </nav>
      </header>
    )

}