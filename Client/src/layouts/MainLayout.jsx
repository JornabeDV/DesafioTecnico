import { Outlet } from 'react-router-dom'
import '../index.css'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        <Outlet />
      </main>

    </div>
  )
}

export default MainLayout
