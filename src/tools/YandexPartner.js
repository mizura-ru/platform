import React, { useEffect, useState } from 'react';
import './style.css';

const YandexRTB = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.yaContextCb = window.yaContextCb || [];
        window.yaContextCb.push(() => {
            if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
                window.Ya.Context.AdvManager.render({
                    "blockId": "R-A-14563865-1",
                    "renderTo": "yandex_rtb_R-A-14563865-1",
                    "type": "feed"
                });
                setIsLoaded(true);
            } else {
                console.error("рекламный блок отвалился.");
            }
        });

        const script = document.createElement('script');
        script.src = "https://yandex.ru/ads/system/context.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div id="yandex_rtb_R-A-14563865-1">
                {!isLoaded && <p>Загрузка рекламы...</p>}
            </div>
        </>
    );
}

export default YandexRTB;