import mizuralogo from '../../imgs/mizura.svg';
import {Link} from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <>
            <header>
                <div className="header">
                    <img className='logo' src={mizuralogo} alt='logo' />
                    <div className="row gapx3">
                        <Link>Программные решения</Link>
                        <Link>Тарифы</Link>
                        <Link>Документация</Link>
                        <Link>Сообщества</Link>
                        <Link>Поддержка</Link>
                        <Link>Связаться</Link>
                        <Link>Блог</Link>
                    </div>
                    <div className="row gap">
                        <button>Войти</button>
                        <button className="black">Зарегистрироваться</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
