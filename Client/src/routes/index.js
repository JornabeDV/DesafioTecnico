import { lazy } from 'react'
const LandingPage = lazy(() => import('./LandingPage/Component/LandingPage'))
const Home = lazy(() => import('./Home/Component/Home'))
const Form = lazy(() => import('./Form/Component/Form'))
const Favorites = lazy(() => import('./Favorites/Component/Favorites'))

export {
  LandingPage,
  Home,
  Form,
  Favorites
}
