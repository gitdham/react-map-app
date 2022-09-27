import { useState } from "react"
import { useMapEvent } from "react-leaflet"
import axios from "axios"
import Containter from "../Components/Layout/Container"
import MapMarker from "../Components/Map/MapMarker"
import MyMap from "../Components/Map/MyMap"
import SectionTitle from "../Components/UI/SectionTitle"

const APIKEY = '988bd84f3d5f497eb4f5486c037a0b6a'

const AddressPage = () => {
  const [location, setLocation] = useState(null)
  const [locationName, setLocationName] = useState('')
  const [locationAddress, setLocationAddress] = useState('')

  const SelectLocationHandler = () => {
    useMapEvent('click', async (e) => {
      const latLng = e.latlng
      setLocation(latLng)
      try {
        const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latLng.lat}&lon=${latLng.lng}&limit=1&format=json&apiKey=${APIKEY}`)
        const location = response.data.results[0]

        if (location.result_type === 'amenity' || location.result_type === 'building') {
          setLocationName(location.name)
          setLocationAddress(location.address_line2)
        } else if (location.result_type === 'street' || location.result_type === 'postcode') {
          setLocationName('')
          setLocationAddress(location.formatted)
        } else {
          alert('Location address not found')
        }
      } catch (error) {
        console.error(error)
      }
    })
    return location ? <MapMarker position={ location } /> : null
  }

  return (
    <Containter>
      <SectionTitle>Address Page</SectionTitle>
      <MyMap>
        <SelectLocationHandler />
      </MyMap>

      <div className="mt-4">
        <h3>Name: { locationName }</h3>
        <p>Alamat: { locationAddress }</p>
      </div>
    </Containter>
  )
}

export default AddressPage
