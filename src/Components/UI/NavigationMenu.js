import { Link } from "react-router-dom"

const NavigationMenu = ({ path, name, active }) => {
  return (
    <li className={ `font-medium ${active ? 'text-teal-700' : 'text-teal-500'} hover:text-teal-700` }>
      <Link to={ path }>{ name }</Link>
    </li>
  )
}

export default NavigationMenu
