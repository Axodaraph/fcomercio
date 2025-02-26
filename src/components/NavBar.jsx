import { Filters } from './Filters'
import './navbar.css'

export function NavBar(){

    return(
        <header className="header">
            <div className="header__logo">
                <div className='header__logo-img'></div>
                <div className="header__logo-lema">
                    <h2>Orozco Ventas</h2>
                    <p>lo mejor al mejor precio</p>
                </div>
            </div>
            <div className="header__menu">
            <Filters />
            </div>
        </header>
    )
}