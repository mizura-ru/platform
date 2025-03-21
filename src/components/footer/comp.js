import './style.css';
import cloudru from '../../imgs/cloud_ru.svg';
import cloudflare from '../../imgs/cloudflare.svg';
import vkbiz from '../../imgs/vkbiz.svg';
import './style.css';
import { useAppContext } from '../../Application';

const Footer = () =>{
    const {version, name} = useAppContext();
    return(
        <footer>
            <div className="footer">
                <p className="mini pdn4">{name} v{version}</p>
                <div>
                <div className="row">
                    <img src={cloudru} alt="cloud.ru" />
                    <img src={vkbiz} alt="vk workspace" />
                    <img src={cloudflare} alt="cloudflare" />
                </div>
                <p className="mini">*при поддержке</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer
