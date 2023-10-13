import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import usePosition from "./hooks/usePosition";

const MapContainer = () => {
    const {latitude, longitude, error} = usePosition();



    return (<YMaps>
            <div style={{ margin: '0 auto', height: '800px', width: '1000px', border: '2px solid burlywood'}}>

                <Map width='100%' height='100%' defaultState={{
                    center: [55.75, 37.57],
                    zoom: 10
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