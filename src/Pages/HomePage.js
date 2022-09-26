import { Popup } from "react-leaflet"
import Containter from "../Components/Layout/Container"
import MapMarker from "../Components/Map/MapMarker"
import MyMap from "../Components/Map/MyMap"
import SectionTitle from "../Components/UI/SectionTitle"

const HomePage = () => {
  const locations = [
    { id: 1, latLng: [-6.915831, 107.630280], name: 'Laswi' },
    { id: 2, latLng: [-6.927909, 107.626951], name: 'Pelajar Pejuang' },
    { id: 3, latLng: [-6.937537, 107.634702], name: 'Gumuruh' },
    { id: 4, latLng: [-6.961649, 107.614577], name: 'M. Toha' },
    { id: 5, latLng: [-6.944088, 107.574205], name: 'Caringin' },
  ]

  return (
    <Containter>
      <SectionTitle>Home Page</SectionTitle>
      <MyMap>
        { locations.map(location => <MapMarker key={ location.id } position={ location.latLng }><Popup>{ location.name }</Popup></MapMarker>) }
      </MyMap>
    </Containter>
  )
}

export default HomePage
