import { useAppContext } from '../../Application';
import './style.css';


const Footer = () =>{
    const {version, name} = useAppContext();
    return(
        <footer>
            <div className="footer">
                <p className="mini row wrap"><span>{name} v{version}</span> <span>О нас</span> <span>Политика конфиденциальности</span> <span>Правила использования</span> <span>Политика в отношении файлов cookie</span></p>
            </div>
        </footer>
    )
}


export default Footer
