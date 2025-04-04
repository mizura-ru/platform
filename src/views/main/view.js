import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";
import { Link } from "react-router-dom";
import YandexPartner from "../../tools/YandexPartner";

export default function MainView(){
  const { pagename, setPagename } = useAppContext();
    
  useEffect(() => {
      setPagename("Главная");
  }, [setPagename]);

    return (
        <>
          <Header />
            <main>
              <article className="leftBar">
                  <nav className="panel">
                    <Link><i className="fa fa-cogs" aria-hidden="true"></i><span>Главная</span></Link>
                    <Link><i className="fa fa-cogs" aria-hidden="true"></i><span>Новостная лента</span></Link>
                    <Link><i className="fa fa-cogs" aria-hidden="true"></i><span>Мой сообщества</span></Link>
                    <Link><i className="fa fa-cogs" aria-hidden="true"></i><span>Мои проекты</span></Link>
                    <Link><i className="fa fa-cogs" aria-hidden="true"></i><span>Мой профиль</span></Link>
                    <Link><i className="fa fa-cogs" aria-hidden="true"></i><span>Настройки</span></Link>
                  </nav>
                  <p className="mini">Важная информация</p>
                  <div className="panel">
                    <p className="mini cart"><i className="fa fa-shield" aria-hidden="true"></i> <span>Рекомендуем установить наш центр сертификации, чтобы гарантировать безопасность соединения.</span></p>
                  </div>
                  <p className="mini">Сайты резидентов</p>
                  <div className="panel">
                    <p className="mini cart"><i className="fa fa-globe" aria-hidden="true"></i> <span>Kaurcev Dev</span></p>
                  </div>
                  <div className="panel">
                    <p className="mini cart"><i className="fa fa-globe" aria-hidden="true"></i> <span>SashaTalk</span></p>
                  </div>
                  <p className="mini">Сервисы</p>
                  <div className="panel">
                    <p className="mini cart"><i className="fa fa-comments-o" aria-hidden="true"></i> <span>Статьи</span></p>
                  </div>
                  <div className="panel">
                    <p className="mini cart"><i className="fa fa-comments-o" aria-hidden="true"></i> <span>Софт</span></p>
                  </div>
                  <div className="panel">
                    <p className="mini cart"><i className="fa fa-comments-o" aria-hidden="true"></i> <span>Вопрос-ответ</span></p>
                  </div>
                  <div className="panel">
                    <p className="mini cart"><i className="fa fa-bug" aria-hidden="true"></i> <span>Баг-треккер</span></p>
                  </div>
              </article>
              <section>
                  <p className="mini">Проект находится на этапе разраотки</p>
                  <h1>{pagename}</h1>
                  <p><strong>Описание платформы для обмена мнениями и создания сообществ</strong></p>
                  <p>Наша платформа нацелена на создание удобного и интуитивно понятного пространства для обмена мнениями, где пользователи смогут формировать универсальные сообщества по интересам. Мы стремимся обеспечить максимально комфортные условия для взаимодействия и обмена информацией, предоставляя ряд функциональных возможностей, которые будут реализованы в ближайшем будущем.</p>
                  <p><strong>Основные функции платформы:</strong></p>
                  <ul>
                      <li><strong>Создание профиля:</strong> Пользователи смогут легко зарегистрироваться и авторизоваться на платформе, создавая индивидуальные профили для представления себя и своих интересов.</li>
                      <li><strong>Просмотр профилей других участников:</strong> После регистрации пользователи получат возможность просматривать профили других участников, что способствует налаживанию связей и обмену мнениями.</li>
                      <li><strong>Создание сообщества:</strong> Платформа позволит пользователям создавать собственные сообщества, объединяющие людей с общими интересами и целями.</li>
                      <li><strong>Создание страницы проекта:</strong> Участники смогут публиковать основную информацию о своих проектах, что обеспечит возможность представления идей и инициатив широкой аудитории.</li>
                      <li><strong>Функционал "вопрос-ответ":</strong> Мы внедрим систему, позволяющую пользователям задавать вопросы и получать ответы от других участников, что будет способствовать обмену знаниями и опытом.</li>
                      <li><strong>Алгоритмы подбора интересных сообществ:</strong> Платформа будет использовать интеллектуальные алгоритмы для рекомендаций, помогая пользователям находить сообщества, соответствующие их интересам.</li>
                      <li><strong>Возможность написания статей с использованием Markdown:</strong> Участники смогут создавать и публиковать интересные статьи, используя язык разметки Markdown, что обеспечит удобство форматирования текста.</li>
                      <li><strong>Интеграция с Telegram для кросспостинга:</strong> Платформа будет интегрирована с мессенджером Telegram, что позволит пользователям легко делиться контентом и получать уведомления о новых событиях.</li>
                  </ul>
                  <p>Мы уверены, что наша платформа станет ценным инструментом для общения и сотрудничества, способствуя созданию активных и интересных сообществ.</p>
              </section>
              <article  className="rightBar">
                  <div className="panel">
                      <h3>Актуальное</h3>
                      <p className="mini">Актуальные посты</p>
                      <h3>Топ проекты</h3>
                      <p className="mini">Проекты, покорившие топ</p>
                  </div>
                  <Footer />
                  <YandexPartner />
              </article>
            </main>
        </>
    )
}
