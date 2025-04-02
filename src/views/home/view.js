import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import Header from "../../components/header/comp";
import { useAppContext } from "../../Application";
import './style.css';
import Footer from "../../components/footer/comp";


export default function HomeView(){
  const { pagename, setPagename } = useAppContext();
    
  useEffect(() => {
      setPagename("Главная");
  }, [setPagename]);

    return (
        <>
          <Header />
              <div className="welcome">
                <div className="content">
                  <h1>Проект находится в этапе разработки</h1>
                  <p>Скоро мы подготовим оборудование и запустим сервис!</p>
                </div>
              </div>
            <main>
              <h2>Начните с простого</h2>
              <div className="row">
                <div className="clm btw gap">
                  <div className="clm gap lblborard">
                      <button className="black">
                        <i className="fa fa-sitemap" aria-hidden="true"></i>
                        <span>Домен третьего уровня</span>
                      </button>
                      <button className="black">
                        <i className="fa fa-server" aria-hidden="true"></i> 
                        <span>Настройка DNS записей</span>
                      </button>
                      <button className="black">
                        <i className="fa fa-server" aria-hidden="true"></i> 
                        <span>Настройка DNS записей</span>
                      </button>
                      <button>
                        <i className="fa fa-code-fork" aria-hidden="true"></i> 
                        <span>Интеграция вашего проекта</span>
                      </button>
                </div>
                <p className="mini">*администрация вправе отказать в предоставлении услуг</p>
                </div>

                <div className="cartbar">
                  <div className="cart">
                    <div className="head">
                      <p><span className="pay">Бесплатно</span></p>
                      <p>домен в зоне <b>*.mizura.online</b></p>
                    </div>
                    <div>
                      <p className="mini">Cервис администрирования ресурсных записей DNS</p>
                      <p>Панель MIZURA</p>
                    </div>
                    <p className="mini">Особенности</p>
                    <ul>
                      <li>Защита от DDoS-атак</li>
                      <li>Бесплатные SSL-сертификаты</li>
                      <li>Кеширование статических файлов</li>
                      <li>Сжатие JavaScript, CSS и HTML</li>
                      <li>Доступ к сети доставки контента (CDN)</li>
                      <li>Оптимизация изображений (Polish)</li>
                      <li>Минификация ресурсов</li>
                      <li>Поддержка HTTP/2</li>
                    </ul>
                    <div>
                      <p className="mini">Поставщик</p>
                      <p>Cloudflare</p>
                    </div>
                  </div>

                  <div className="cart">
                    <div className="head">
                      <p><span className="pay">50 руб</span> <span className="mini">в месяц</span></p>
                      <p>домен в зоне <b>*.salt.spb.ru</b></p>
                    </div>
                    <div>
                      <p className="mini">Cервис администрирования ресурсных записей DNS</p>
                      <p>Панель MIZURA</p>
                    </div>
                    <p className="mini">Особенности</p>
                    <p>Перевод доменной зоны говорит сам за себя</p>
                    <div>
                      <p className="mini">Поставщик</p>
                      <p>Cloud.ru</p>
                    </div>
                  </div>

                  <div className="cart">
                    <div className="head">
                      <p><span className="pay">По согласованию</span></p>
                      <p>домен в зоне <b>*.mizura.ru</b></p>
                    </div>
                    <div>
                      <p className="mini">Cервис администрирования ресурсных записей DNS</p>
                      <p>Панель MIZURA</p>
                    </div>
                    <p className="mini">Особенности</p>
                    <ul> 
                      <li>Доступ только для участников проекта.</li> 
                      <li>Возможность публикации контента.</li> 
                      <li>Участие в развитии проекта.</li> 
                      <li>Денежные вознаграждения при монетизации.</li>
                      <li>Доступ к эксклюзивным материалам.</li> 
                     </ul>
                    <div>
                      <p className="mini">Поставщик</p>
                      <p>MIZURA</p>
                    </div>
                  </div>

                </div>
              </div>
            </main>
            <Footer />
        </>
    )
}
