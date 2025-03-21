import React, { useEffect } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import ym from "react-yandex-metrika";

export const YandexMetrica = () => {
    useEffect(() => {
        ym("hit", window.location.pathname + window.location.search + window.location.hash);
        // eslint-disable-next-line
    }, [window.location.pathname + window.location.search + window.location.hash]);

    return (
        <YMInitializer
            accounts={[100393470]}
            options={{
            defer: true,
            webvisor: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            }}
            version="2"
        />
  );
};

export default YandexMetrica;


