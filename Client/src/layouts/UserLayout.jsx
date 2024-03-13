import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'
import '../index.css'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <NavBar />
      </header>
      <div className='flex-1'>
        <Outlet />
      </div>
      <footer className=''>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
