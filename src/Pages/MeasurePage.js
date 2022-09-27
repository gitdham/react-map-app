import axios from "axios"
import Containter from "../Components/Layout/Container"
import MapMarker from "../Components/Map/MapMarker"
import MyMap from "../Components/Map/MyMap"
import SectionTitle from "../Components/UI/SectionTitle"
import { Popup } from "react-leaflet"
import { useEffect } from "react"
import { useState } from "react"

const APIKEY = '988bd84f3d5f497eb4f5486c037a0b6a'
const MeasurePage = () => {
  const [locationMetric, setLocationMetric] = useState([])

  const locations = [
    { id: 1, latLng: [-6.960998, 107.624080], name: 'Pasmod' },
    { id: 2, latLng: [-6.915831, 107.630280], name: 'Laswi' },
    { id: 3, latLng: [-6.927909, 107.626951], name: 'Pelajar Pejuang' },
    { id: 4, latLng: [-6.937537, 107.634702], name: 'Gumuruh' },
    { id: 5, latLng: [-6.961649, 107.614577], name: 'M. Toha' },
    { id: 6, latLng: [-6.944088, 107.574205], name: 'Caringin' },
  ]

  useEffect(() => {
    const options = {
      mode: 'drive',
      sources: locations.map(location => {
        return { location: [location.latLng[1], location.latLng[0]] }
      }),
      targets: locations.map(location => {
        return { location: [location.latLng[1], location.latLng[0]] }
      }),
    }

    axios.post(`https://api.geoapify.com/v1/routematrix?apiKey=${APIKEY}`, options)
      .then(response => response.data)
      .then(data => setLocationMetric(data.sources_to_targets))
  }, [])

  const selectDistanceHandler = (x) => {
    console.log(x)
  }

  return (
    <Containter>
      <SectionTitle>Measure Page</SectionTitle>
      <MyMap>
        { locations.map((location) => <MapMarker key={ location.id } position={ location.latLng }><Popup>{ location.name }</Popup></MapMarker>) }
      </MyMap>

      <table className="border mt-4">
        <thead>
          <tr className="border">
            <th className="border p-2">x</th>
            { locationMetric.map((loc, i) => <th key={ i } className="border p-2">{ locations[i].name }</th>) }
          </tr>
        </thead>
        <tbody>
          { locationMetric.map((loc, i) => {
            return (
              <tr key={ i }>
                <th className="border p-2">{ locations[i].name }</th>
                { loc.map((x, j) => {
                  return (
                    <td key={ j } className="border p-2" onClick={ () => selectDistanceHandler(x) }>
                      <p>distance: { Number(x.distance / 1000).toFixed(2) } Km</p>
                      <p>estimasi: { Number(x.time / 60).toFixed(2) } m</p>
                    </td>
                  )
                }) }
              </tr>
            )
          }) }
        </tbody>
      </table>
    </Containter >
  )
}

export default MeasurePage
