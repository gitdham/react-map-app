import { useMapEvent } from "react-leaflet"
import Containter from "../Components/Layout/Container"
import MyMap from "../Components/Map/MyMap"
import SectionTitle from "../Components/UI/SectionTitle"

const LocationMarker = () => {
  useMapEvent('click', (e) => console.log(e))
  return null
}

const AddressPage = () => {
  return (
    <Containter>
      <SectionTitle>Address Page</SectionTitle>
      <MyMap>
        <LocationMarker />
      </MyMap>
    </Containter>
  )
}

export default AddressPage
