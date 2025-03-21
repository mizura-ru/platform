import React, { useEffect } from 'react';
import './style.css';
/* global Ya */
const YandexRTB = () => {
    useEffect(() => {
        window.yaContextCb = window.yaContextCb || [];
        window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
                "blockId": "R-A-14563865-1",
                "renderTo": "yandex_rtb_R-A-14563865-1",
                "type": "feed"
            });
        });
    }, []);

    return (
        <>
            <div id="yandex_rtb_R-A-14563865-1"></div>
            <script src="https://yandex.ru/ads/system/context.js" async></script>
        </>
    );
}

export default YandexRTB;