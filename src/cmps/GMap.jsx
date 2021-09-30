import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
export function _GMap({ data, google }) {
    const { lat, lng, zoom, markerName } = data;
    return (
        <>
            <Map
                google={google}
                zoom={zoom}
                center={{ lat, lng }}
            >
                <Marker
                    position={{ lat, lng }}
                    name={markerName}
                    title={markerName}
                />
            </Map>
        </>
    )
}

export const GMap = GoogleApiWrapper({
    apiKey: ('AIzaSyBj6uH299fNka4OlOEA05hitpszMFv3b1g')
})(_GMap)