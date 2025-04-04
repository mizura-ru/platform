import React, { useEffect, useState } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import ym from "react-yandex-metrika";

export const YandexMetrica = () => {
    const [location, setLocation] = useState(window.location.pathname + window.location.search + window.location.hash);

    useEffect(() => {
        const handleLocationChange = () => {
            setLocation(window.location.pathname + window.location.search + window.location.hash);
        };

        window.addEventListener('popstate', handleLocationChange);

        ym("hit", location);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, [location]);

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