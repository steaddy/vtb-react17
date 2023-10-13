import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import usePosition from "./hooks/usePosition";

const MapContainer = () => {
    const {latitude = 55.75, longitude = 37.57, error} = usePosition();


    return (<YMaps query={{ load: 'package.full' }}>
            <div style={{margin: '0 auto', height: '400px', width: '400px', border: '2px solid burlywood'}}>

                <Map width='100%' height='100%' defaultState={{
                    center: [latitude, longitude],
                    zoom: 10,
                    controls: ['zoomControl', 'searchControl']

                }}>

                    <Placemark

                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        geometry={[latitude, longitude]}
                        properties={{
                            iconCaption: 'Вы находитесь здесь',
                            iconContent: "Я",
                            balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
                                '<span class="description">Сеть кинотеатров</span>',

                            balloonContentBody: '<img src="https://sandbox.api.maps.yandex.net/examples/ru/2.1/balloon_html/img/cinema.jpg" height="150" width="200"> <br/> ' +
                                '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                                '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',

                            balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
                            hintContent: "Хинт, Вы таки здеся!"
                        }}
                    />


                </Map>
            </div>
        </YMaps>
    )
};

export default MapContainer;