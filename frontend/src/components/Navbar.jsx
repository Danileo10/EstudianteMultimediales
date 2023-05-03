import React from 'react'
import "../assets/styles/Navbar.css"
import Bienestar from "../assets/bienestar.png"
import Perfil from "../assets/perfil.png"

const Navbar = () => {
    return (
        <div>
            <nav>
                <img src="" alt="menu" class="menu" />

                <div class="navbar-left">
                    <img src={Bienestar} alt="logo" class="logo" />

                    <ul>
                        <li>
                            <a href="/home">Inicio</a>
                        </li>
                        <li>
                            <a href="/eventos">Eventos</a>
                        </li>
                        <li>
                            <a href="/actividades">Mis Horas</a>
                        </li>
                    </ul>
                </div>

                <div class="navbar-right">
                    <ul>
                        <li className="logo-perfil">
                            <a href="/perfil">
                                <img src={Perfil} alt="perfil"  />
                            </a>
                            
                        </li>
                    </ul>
                </div>
                <div class="desktop-menu inactive">
                    <ul>
                        <li>
                            <a href="/#" class="title">Mi perfil</a>
                        </li>

                        <li>
                            <a href="/#">Cerrar sesión</a>
                        </li>
                    </ul>
                </div>

                <div class="mobile-menu inactive">
                    <ul>
                        <li>
                            <a href="/#">Inicio</a>
                        </li>
                        <li>
                            <a href="/#">Eventos</a>
                        </li>
                        <li>
                            <a href="/#">Mis Horas</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="/#">Mi perfil</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="/" class="email">juan.otaloram@example.com</a>
                        </li>
                        <li>
                            <a href="/" class="sign-out">Cerrar sesión</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
