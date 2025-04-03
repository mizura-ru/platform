import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";

export default function PrivacyView(){
  const { appName, pagename, setPagename, appDomain, authoremail } = useAppContext();
    
    useEffect(() => {
        setPagename("Политика конфиденциальности");
    }, [setPagename]);

    const mailtogen = ({email}) =>{
        return `mailto:${email}`
    }
 

    return (
        <>
        <Header />
            <div className="welcome">
                <div className="contentd">
                    <h1>{pagename}</h1>
                </div>
            </div>
            <main className="maininfoandright">
                <div className="main">
                <p>Политика обработки персональных данных (далее – Политика или Политика конфиденциальности) разработана в соответствии с Федеральным законом от 27.07.2006. №152-ФЗ «О персональных данных» (далее – ФЗ-152).</p>
                <p>Данная политика конфиденциальности относится к сайту под доменным именем {appDomain}. Эта страница содержит сведения о том, какую информацию мы ({appName} или администрация сайта) или третьи лица могут получать, когда вы пользуетесь нашим сайтом.</p>
                <b>Если Вы не согласны с условиями нашей Политики конфиденциальности, не используйте сайт {appDomain}!</b>

                <h2>Данные, собираемые при посещении сайта</h2>
                <p>Персональные данные при посещении сайта передаются пользователем добровольно. К ним могут относиться:</p>
                <ul>
                    <li>фамилия, имя и отчество пользователей</li>
                    <li>дата или место рождения</li>
                    <li>ссылка на персональный сайт или соцсети</li>
                    <li>адреса электронной почты</li>
                    <li>номера телефонов</li>
                    <li>IP адрес и страна его регистрации</li>
                    <li>cookies (куки)</li>
                    <li>иные данные, собираемые счетчиками аналитики сторонних организаций, установленными на сайте.</li>
                </ul>
                <p>Мы не проверяем достоверность оставляемых данных, однако не гарантируем качественного исполнения заказов или обратной связи с нами при некорректных данных.</p>
                <p>Данные собираются имеющимися на сайте формами для заполнения (например, регистрации, оформления заказа, подписки, оставления отзыва, обратной связи и иными).</p>
                <p>Формы, установленные на сайте, могут передавать данные как напрямую на сайт, так и на сайты сторонних организаций (скрипты сервисов сторонних организаций).</p>
                <p>Эти данные направлены на внутренние отчеты, беспрепятственное предоставление информации и услуг, которые запрашивает пользователь, ответы на запросы пользователей, улучшение качества продуктов сайта, решение различного рода споров, мониторинг работы сайта, отправку различной электронной корреспонденции, сбор статистики, улучшение качества предоставления услуг сайта.</p>

                <h2>Предоставление данных третьим лицам</h2>
                <p>Мы не раскрываем личную информацию пользователей компаниям, организациям и частным лицам, не связанным с нами. Исключение составляют случаи, перечисленные ниже.</p>

                <h3>Данные пользователей в общем доступе</h3>
                <p>Персональные данные пользователя могут публиковаться в общем доступе в соответствии с функционалом сайта, например, при оставлении отзывов, может публиковаться указанное пользователем имя, такая активность на сайте является добровольной, и пользователь своими действиями дает согласие на такую публикацию.</p>

                <h3>По требованию закона</h3>
                <p>Информация может быть раскрыта в целях воспрепятствования мошенничеству или иным противоправным действиям; по требованию законодательства и в иных случаях, предусмотренных законом.</p>

                <h3>Для оказания услуг, выполнения обязательств</h3>
                <p>Пользователь соглашается с тем, что персональная информация может быть передана третьим лицам в целях оказания заказанных на сайте услуг, выполнении иных обязательств перед пользователем. К таким лицам, например, относятся курьерская служба, почтовые службы, службы грузоперевозок и иные.</p>

                <h3>Сервисам сторонних организаций, установленным на сайте</h3>
                <p>На сайте могут быть установлены формы, собирающие персональную информацию других организаций, в этом случае сбор, хранение защита персональной информации пользователя осуществляется сторонними организациями в соответствии с их политикой конфиденциальности. Сбор, хранение и защита полученной от сторонней организации информации осуществляется в соответствии с настоящей политикой конфиденциальности.</p>

                <h2>Прочие условия</h2>
                <p>Дети не имеют права пользоваться услугами сайта. Сайтом запрещено пользоваться детям до 18 лет.</p>

                <h2>Как мы защищаем вашу информацию</h2>
                <p>Мы принимаем соответствующие меры безопасности по сбору, хранению и обработке собранных данных для защиты их от несанкционированного доступа, изменения, раскрытия или уничтожения, ограничиваем нашим сотрудникам, подрядчикам и агентам доступ к персональным данным, постоянно совершенствуем способы сбора, хранения и обработки данных, включая физические меры безопасности, для противодействия несанкционированному доступу к нашим системам.</p>

                <h2>Отказ от ответственности</h2>
                <p>Политика конфиденциальности не распространяется ни на какие другие сайты и не применима к веб-сайтам третьих лиц, которые могут содержать упоминание о нашем сайте и с которых могут делаться ссылки на сайт, а также ссылки с этого сайта на другие сайты сети Интернет. Мы не несем ответственности за действия других веб-сайтов.</p>

                <h2>Изменения в политике конфиденциальности</h2>
                <p>Мы имеем право по своему усмотрению обновлять данную политику конфиденциальности в любое время. В этом случае мы опубликуем уведомление на главной странице нашего сайта. Мы рекомендуем пользователям регулярно проверять эту страницу для того, чтобы быть в курсе любых изменений о том, как мы защищаем информацию пользователях, которую мы собираем. Используя сайт, вы соглашаетесь с принятием на себя ответственности за периодическое ознакомление с политикой конфиденциальности и изменениями в ней.</p>

                <h2>Как с нами связаться</h2>
                <p>Если у вас есть какие-либо вопросы о политике конфиденциальности, использованию сайта или иным вопросам, связанным с сайтом, свяжитесь с нами: <a href={mailtogen(authoremail)}>{authoremail}</a></p>
                </div>
                <div className="panel">
                    <button>Данные, собираемые при посещении сайта</button>
                    <button>Предоставление данных третьим лицам </button>
                    <button>Как мы защищаем вашу информацию</button>
                    <button>Отказ от ответственности</button>
                    <button>Изменения в политике конфиденциальности</button>
                    <button>Как с нами связаться</button>
                </div>
            </main>
        <Footer />
        </>
    )
}