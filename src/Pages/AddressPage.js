import { MapContainer, TileLayer } from "react-leaflet"
import Containter from "../Components/Layout/Container"
import SectionTitle from "../Components/UI/SectionTitle"

const AddressPage = () => {
  return (
    <Containter>
      <SectionTitle>Address Page</SectionTitle>
      <div className="mt-8">
        <MapContainer center={ [-6.914744, 107.609810] } zoom={ 13 } scrollWheelZoom={ true } style={ { width: "100%", height: "50vh" } } >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </Containter>
  )
}

export default AddressPage
