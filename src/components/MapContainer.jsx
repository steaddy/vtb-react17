import React, {useEffect, useRef, useState} from 'react';
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import usePosition from "../hooks/usePosition";
import mark from "../img/mark.svg";

const MapContainer = () => {
    const [routingIsOn, setRoutingIsOn] = useState(false);
    const {latitude = 55.75, longitude = 37.57, error} = usePosition();
    const map = useRef(null);

    const handleRouteControl = () => {
        if (routingIsOn) {
            map.current.controls.remove('routePanelControl');
        } else {
            map.current.controls.add('routePanelControl');
        }
        setRoutingIsOn(!routingIsOn);
    }

    const addRoute = (ymaps) => {
        const pointA = [latitude, longitude]; // Текущее положение
        const pointB = [59.918072, 30.304908]; // Санкт-Петербург

        const multiRoute = new ymaps.multiRouter.MultiRoute(
            {
                referencePoints: [pointA, pointB],
                params: {
                    routingMode: "auto"
                }
            },
            {
                boundsAutoApply: true
            }
        );

        map.current.geoObjects.add(multiRoute);
    };


    return (
        <>
            <YMaps query={{
                load: 'package.full',
                apikey: 'b42bfa4f-94d1-45fe-8049-3e69f39135d9',
            }}>


                <div style={{margin: '0 auto', height: '400px', width: '400px', border: '2px solid burlywood'}}>

                    <Map
                        width='100%'
                        height='100%'
                        defaultState={{
                            center: [latitude, longitude],
                            zoom: 10,
                            controls: [
                                'zoomControl',
                                'searchControl',
                            ]
                        }}
                        modules={["multiRouter.MultiRoute"]}
                        instanceRef={map}
                        onLoad={() => {
                        }}
                        modules={["multiRouter.MultiRoute"]}
                    >

                        <Placemark

                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            geometry={[latitude, longitude]}
                            properties={{
                                /*iconCaption: 'Вы находитесь здесь',
                                iconContent: "Я",*/
                                balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
                                    '<span class="description">Сеть кинотеатров</span>',

                                balloonContentBody: '<img src="https://sandbox.api.maps.yandex.net/examples/ru/2.1/balloon_html/img/cinema.jpg" height="150" width="200"> <br/> ' +
                                    '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                                    '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',

                                balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
                                hintContent: "Хинт, Вы таки здеся!"
                            }}
                            options={{
                                iconLayout: 'default#image',
                                iconImageSize: [50, 50],
                                balloonOffset: [0, 0],
                                iconImageHref: mark,
                            }}
                        />


                    </Map>
                </div>
            </YMaps>
            <button style={{margin: '20px auto', display: 'block', padding: '5px 20px'}} onClick={handleRouteControl}><b>Toggle Routing</b></button>
        </>
    )
};

export default MapContainer;