import { Link } from 'react-router-dom';
import { useAppContext } from '../../Application';
import './style.css';


const Footer = () =>{
    const {version, name} = useAppContext();
    return(
        <footer>
            <div className="footer">
                <p className="mini row wrap"><span>{name} v{version}</span> <span>О нас</span> 
                <Link to="/privacy">Политика конфиденциальности</Link> 
                <Link to="/terms">Пользовательское Соглашение</Link> 
                <Link to="/cookies">Политика в отношении файлов cookie</Link></p>
            </div>
        </footer>
    )
}


export default Footer
