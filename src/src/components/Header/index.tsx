import Logo from '../../../assets/Logo.svg'
import InputAdd from '../InputAdd'
import style from './style.module.css'

function Header() {
    return (
        <header className={style.header}>
            <div className={style.header_content}>
                <img src={Logo} alt="Logo" />
                <InputAdd />
            </div>
        </header>
    )
}

export default Header