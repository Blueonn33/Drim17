﻿import React, { Component } from 'react';
import '../../custom.css';
import './Footer.css';
import { FaFacebook, FaInstagram } from "react-icons/fa";

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer id='footer'>
                <div className="row" id="dev">
                    <h5 id="credits">Маргарита Бонева</h5>
                </div>
                <div className="row" id="dev">
                    <h5 id="contact">Телефон за връзка: 087087087</h5>
                </ div>
                <div id="main-content" className="row">
                    <div>
                        <a href="https://www.youtube.com/channel/UCdOH10Te0taKiNJA8GJHhvw" className="fa fa-footer" >
                            <FaFacebook /></a>
                        <a href="https://www.instagram.com/margarita.boneva.925/" className="fa fa-footer">
                            <FaInstagram /></a>
                    </div>
  
                </div>
            </footer>
        );
    }
}