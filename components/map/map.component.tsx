import Map, {Layer, LayerProps, Source, ViewState} from "react-map-gl"
import {useState} from "react"
import {Feature, FeatureCollection, GeoJsonProperties, Geometry} from "geojson"

const MyMap = () => {

    let [viewport, setViewport] = useState<ViewState | Object>({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
    })

    const geojson: string | Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties> | undefined = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry:
                    {
                        type: 'Point',
                        coordinates: [-122.4, 37.8]
                    },
                properties: {}
            }
        ]
    }

    const layerStyle: LayerProps = {
        id: 'point',
        type: 'circle',
        paint: {
            'circle-radius': 5,
            'circle-color': 'red'
        }
    }

    return (
        <div className={'mapWrapper'}>
            <Map
                mapStyle={'mapbox://styles/danylt/cl0msozno000o16me9md1urdo'}
                mapboxAccessToken={'pk.eyJ1IjoiZGFueWx0IiwiYSI6ImNrc29icnllODFiMDgzMnBuYXN3NjU0dWcifQ.ZIp31u3mLyHo520yf0D-ag'}
                {...viewport}
                style={{width: '100%', height: '100%'}}
                onMove={evt => setViewport(evt.viewState)}
            >
                <Source id="my-data" type="geojson" data={geojson}>
                    <Layer {...layerStyle} />
                </Source>
            </Map>
        </div>
    )
}

export default MyMap