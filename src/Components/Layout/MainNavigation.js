import { useLocation } from "react-router-dom"
import NavigationMenu from "../UI/NavigationMenu"

const MainNavigation = () => {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <div className="bg-teal-200 p-6">
      <ul className="flex gap-x-4">
        <NavigationMenu path={ '/' } name='Home' active={ pathName === '/' } />
        <NavigationMenu path={ '/address' } name='Address' active={ pathName === '/address' } />
        <NavigationMenu path={ '/measure' } name='Measure' active={ pathName === '/measure' } />
        <NavigationMenu path={ '/route' } name='Route' active={ pathName === '/route' } />
      </ul>
    </div>
  )
}

export default MainNavigation
