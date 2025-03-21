import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";

export default function E404View(){
  const { navigate, pagename, setPagename } = useAppContext();
    
  useEffect(() => {
      setPagename("Страница не найдена");
  }, [setPagename]);
 

    return (
        <>
        <Header />
            <main>
                <h1>404</h1>
                <p>{pagename}</p>
                <button onClick={()=> navigate("/")}>На главную</button>
                <p>r59rzj7oc2feqdt4</p>
            </main>
        <Footer />
        </>
    )
}
