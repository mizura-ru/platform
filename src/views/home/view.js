import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";
import { Link } from "react-router-dom";
import YandexPartner from "../../tools/YandexPartner";

export default function HomeView(){
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
                    <Link><i className="fa fa-home" aria-hidden="true"></i><span>Главная</span></Link>
                    <Link><i className="fa fa-telegram" aria-hidden="true"></i><span>Telegram</span></Link>
                  </nav>
              </article>
              <section>
                  {pagename}
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
