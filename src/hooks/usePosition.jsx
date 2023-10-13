import React, {useEffect, useState} from 'react'

const usePosition = () => {

    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = ({coords: {latitude, longitude}}) => {
        setPosition({latitude, longitude});
    };

    const onError = (error) => {
        setError(error.message);
    };




    useEffect(() => {
        const geo = navigator.geolocation;

        if (!geo) {
            setError('Геолокация не поддерживается браузером');
            return;
        }

        const watcher = geo.watchPosition(onChange, onError);


        return () => geo.clearWatch(watcher);
    }, []);

    return {...position, error};
}

export default usePosition
