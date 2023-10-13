import React from 'react';
import {YMaps, Map} from 'react-yandex-maps';

const MapContainer = () => {


    return (<YMaps>
            <div style={{ margin: '0 auto', height: '800px', width: '1000px', border: '2px solid burlywood'}}>
                <Map width='100%' height='100%' defaultState={{
                    center: [55.75, 37.57],
                    zoom: 10
                }}>
                </Map>
            </div>
        </YMaps>
    )
};

export default MapContainer;