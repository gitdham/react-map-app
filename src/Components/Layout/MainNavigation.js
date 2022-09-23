import { Link } from "react-router-dom"

const MainNavigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/address'>Map Address</Link>
        </li>
        <li>
          <Link to='/measure'>Map Measure</Link>
        </li>
        <li>
          <Link to='/route'>Map Route</Link>
        </li>
      </ul>
    </div>
  )
}

export default MainNavigation
