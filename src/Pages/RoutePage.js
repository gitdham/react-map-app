import { useEffect } from "react"
import { GeoJSON, Popup } from "react-leaflet"
import axios from "axios"
import Containter from "../Components/Layout/Container"
import MapMarker from "../Components/Map/MapMarker"
import MyMap from "../Components/Map/MyMap"
import SectionTitle from "../Components/UI/SectionTitle"
import { useState } from "react"

const APIKEY = '988bd84f3d5f497eb4f5486c037a0b6a'

const locations = [
  { id: 1, latLng: [-6.960998, 107.624080], name: 'Pasmod' },
  { id: 2, latLng: [-6.915831, 107.630280], name: 'Laswi' },
  { id: 3, latLng: [-6.927909, 107.626951], name: 'Pelajar Pejuang' },
  { id: 4, latLng: [-6.937537, 107.634702], name: 'Gumuruh' },
  { id: 5, latLng: [-6.961649, 107.614577], name: 'M. Toha' },
  { id: 6, latLng: [-6.944088, 107.574205], name: 'Caringin' },
]


const MapRoute = () => {
  const [mapRoute, setMapRoute] = useState()

  useEffect(() => {
    axios.get(`https://api.geoapify.com/v1/routing?waypoints=${locations[0].latLng.join(',')}|${locations[1].latLng.join(',')}|${locations[2].latLng.join(',')}|${locations[3].latLng.join(',')}&mode=drive&apiKey=${APIKEY}`)
      .then(response => response.data)
      .then(data => setMapRoute(data))
  }, [])

  const routeStyle = {
    color: "rgba(255, 20, 20, 0.7)",
    weight: 4
  }
  if (mapRoute) return <GeoJSON data={ mapRoute } style={ routeStyle } />
  else return null
}

const RoutePage = () => {
  return (
    <Containter>
      <SectionTitle>Route Page</SectionTitle>
      <MyMap>
        <MapRoute />
        { locations.map((location) => <MapMarker key={ location.id } position={ location.latLng }><Popup>{ location.name }</Popup></MapMarker>) }
      </MyMap>
    </Containter >
  )
}

export default RoutePage
