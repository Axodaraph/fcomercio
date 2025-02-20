import './navbar.css'
import { ShopingList } from './ShopingList'

export function NavBar(){
    function showList () {
        <ShopingList />
    }

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
                <button className="header__menu-add" onClick={showList}></button>
                <button className="header__menu-user"></button>
            </div>
        </header>
    )
}