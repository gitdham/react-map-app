import { MapContainer, TileLayer } from "react-leaflet"

const MyMap = ({ children }) => {
  const defaultLatLng = [-6.914744, 107.609810]
  const mapSize = { width: '100%', height: '50vh' }

  return (
    <MapContainer center={ defaultLatLng } zoom={ 11 } scrollWheelZoom={ true } style={ mapSize } >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        minZoom={ 11 }
      />
      { children }
    </MapContainer>
  )
}

export default MyMap
