import L from "leaflet"
import { Marker } from "react-leaflet"

const MapMarker = ({ position, children }) => {
  const markerIcon = L.icon({
    iconUrl: require('../../icons/mark.png'),
    iconSize: [35, 35],
    popupAnchor: [0, -15]
  })

  return <Marker position={ position } icon={ markerIcon } >{ children }</Marker>
}

export default MapMarker
