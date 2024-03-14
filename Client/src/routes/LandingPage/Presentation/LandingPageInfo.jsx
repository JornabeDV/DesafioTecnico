import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosApps, IoIosCloseCircle, IoLogoLinkedin, IoLogoGithub, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import LogoEcoBook from '../../../assets/LogoEcobooks.png'

const LandingPageInfo = () => {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col text-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <li className='p-1 font-normal'>
        <a href='#servicios' className=''>Servicios</a>
      </li>
      <li className='p-1 font-normal'>
        <a href='#blog' className=''>Blog de lectura</a>
      </li>
      <li className='p-1 font-normal'>
        <a href='#fundación' className=''>Fundación</a>
      </li>
    </ul>
  )

  return (
    <div className='bg-[#222121] h-full w-full pt-[50px] lg:bg-no-repeat scroll-smooth'>

      <header className='sticky top-0 h-[90px] shadow-md '>
        <nav className='z-10  max-w-full rounded-none px-8 py-[14px] backdrop-blur bg-[#1E1E1E99]'>
          <div className='h-[62px] flex items-center justify-between text-blue-gray-900'>
            <a href='#home' className='mr-4 ml-10 cursor-pointer py-1.5 '>
              <img src={LogoEcoBook} alt='Logo EcoBook' width={200} />
            </a>
            <div className='flex items-center gap-4'>
              <div className='mr-4 hidden lg:block'>{navList}</div>
              <div className='flex items-center gap-x-2 text-center'>
                <Link to='/Home' className='text-base bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow hidden lg:inline-block'> BookStore</Link>
              </div>
              <button
                className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? <IoIosCloseCircle className='w-[25px] h-[25px]' /> : <IoIosApps className='w-[25px] h-[25px]' />}
              </button>
            </div>
          </div>
          <nav className={openNav ? 'flex flex-col items-center w-full h-[180px]' : 'hidden'}>
            {navList}
            <div className='flex items-center gap-x-2 text-center'>
              <Link to='/Home' className='text-sm bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow'> BookStore</Link>
            </div>
          </nav>
        </nav>
      </header>

      <main className='font-roboto w-full flex flex-col justify-center items-center'>

        <div className='flex'>
          <div id='home' className='z-10 h-[710px] pt-[150px] pb-[200px] px-[20px] flex flex-col justify-center items-center text-center lg:text-left'>
            <p className='text-3xl lg:text-5xl'>Virtual Store</p>
            <p className='text-[50px] lg:text-[90px] font-bold mb-2 p-3 text-center text-[#80CC28] font-josefin'>ECOBOOKS</p>
            <p className='text-3xl lg:text-5xl'>Latinoamérica</p>
          </div>
        </div>

        <div id='servicios' className='lg:h-[850px] pb-[60px] pt-[150px] px-[20px] lg:pl-[60px] lg:pr-0 text-center bg-[#3E3E3Eb8] w-full border-b-2 border-none shadow-md' style={{ backgroundImage: 'url("https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_1920%2Cc_limit/BlackForest-Germany-GettyImages-147180370.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className='w-full flex flex-col items-center lg:flex-row lg:justify-between'>
            <div className='w-full lg:w-[60%] lg:pr-[20px] text-left'>
              <p className='text-left text-6xl lg:text-7xl font-bold'>Servicios Latam</p>
              <h2 className='text-4xl pb-2 pt-8'>Búsqueda avanzada</h2>
              <p className='text-2xl'>Encuentra libros por título, autor, género y más, con filtros avanzados para refinar tus resultados.</p>
              <h2 className='text-4xl pb-2 pt-8'>Recomendaciones personalizadas</h2>
              <p className='text-2xl'>Descubre nuevos libros basados en tus preferencias de lectura anteriores.</p>
              <h2 className='text-4xl pb-2 pt-8'>Reseñas y Calificaciones</h2>
              <p className='text-2xl'>Lee y deja reseñas para ayudar a otros a elegir su próxima lectura.</p>
            </div>
          </div>
        </div>

        <div id='blog' className='lg:h-[850px] pb-[60px] pt-[150px] px-[20px] lg:pl-[60px] lg:pr-0 text-center bg-none w-full border-b-2 border-none shadow-md' style={{ backgroundImage: 'url("https://pymstatic.com/27422/conversions/blogs-de-libros-wide_webp.webp")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className='w-full flex flex-col items-center text-black lg:flex-row lg:justify-end'>
            <div className='w-full lg:w-[60%] lg:pr-[20px] text-right'>
              <p className='text-6xl lg:text-7xl font-bold'>Blog de Lectura</p>
              <h2 className='text-4xl pb-2 pt-8'>Participación de la comunidad</h2>
              <p className='text-2xl'>Fomentamos la participación de los lectores a través de comentarios en las reseñas, encuestas, y debates sobre libros y temas literarios.</p>
              <h2 className='text-4xl pb-2 pt-8'>Actualización regular</h2>
              <p className='text-2xl'>Blog de lectura suelen ser actualizados regularmente con nuevas reseñas, artículos y contenido fresco para mantener el interés de los lectores.</p>
              <h2 className='text-4xl pb-2 pt-8'>Presencia en redes sociales</h2>
              <p className='text-2xl'>Compartimos en nuestras redes sociales enlaces de publicaciones, interactúamos con los seguidores y promocionamos eventos literario.</p>
            </div>
          </div>
        </div>

        <div id='fundación' className='lg:h-[850px] pb-[60px] pt-[150px] px-[20px] lg:pl-[60px] lg:pr-0 text-center w-full border-b-2 border-none shadow-md' style={{ backgroundImage: 'url("https://santanderpost.com.ar/wp-content/uploads/2023/01/Bosques-Reforestacion-Arboles-Plantar.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className='w-full flex flex-col items-center text-white lg:flex-row lg:justify-between'>
            <div className='w-full lg:w-[60%] lg:pr-[20px] text-left'>
              <p className='text-left text-6xl lg:text-7xl font-bold'>Fundación EcoBook</p>
              <h2 className='text-4xl pb-2 pt-8'>Educación Ambiental</h2>
              <p className='text-2xl'>Desarrollamos programas educativos para aumentar la conciencia sobre temas ambientales y promover prácticas sostenibles.</p>
              <h2 className='text-4xl pb-2 pt-8'>Conservación de la biodiversidad</h2>
              <p className='text-2xl'>Trabajamos para proteger y restaurar hábitats naturales, especies en peligro de extinción y ecosistemas vulnerables.</p>
              <h2 className='text-4xl pb-2 pt-8'>Campañas de sensibilización y movilización</h2>
              <p className='text-2xl'>Realizamos campañas para involucrar a la sociedad civil en la protección del medio ambiente y motivar acciones positivas.</p>
            </div>
          </div>
        </div>

      </main>

      <footer className='w-full flex flex-col items-center bg-black'>

        <div className='flex flex-col justify-evenly items-center py-10 w-[400px] '>
          <p className='text-xl'>Descargate la última versión de la app</p>
          <div className='flex flex-wrap justify-between items-center pt-4'>
            <div className='p-2'><Link to='/' className='text-base bg-transparent py-2 px-6 rounded-lg border-2 border-white shadow flex items-center'><FaGooglePlay className='inline-block w-[25px] h-[25px] pr-2' /> Google Play</Link></div>
            <div className='p-2'><Link to='/' className='text-base bg-[#1B1B1B9C] py-2 px-6 rounded-lg border-2 border-white shadow flex items-center'><FaApple className='inline-block w-[25px] h-[25px] pr-2' /> App Store</Link></div>
          </div>
        </div>

        <div className='w-full flex flex-col items-center lg:bg-OnBoardingFooter-bgImage lg:bg-OnBoardingFooter-bgPosition lg:bg-no-repeat'>
          <div className='flex flex-wrap justify-around w-full bg-[#3E3E3Eb8] shadow-md'>
            <div className='flex flex-col justify-center items-center pb-6'>
              <div className='flex flex-wrap justify-center' />
              <div className='flex flex-col justify-between items-center w-[400px] pt-4'>
                <p className='text-xl'>Contacto</p>
                <div className='w-full flex flex-wrap justify-around py-4'>
                  <Link to='https://www.linkedin.com/in/jorge-nahuel-beja-rosa/'><IoLogoLinkedin className='w-[50px] h-[50px]' /></Link>
                  <IoLogoFacebook className='w-[50px] h-[50px]' />
                  <IoLogoInstagram className='w-[50px] h-[50px]' />
                  <IoLogoYoutube className='w-[50px] h-[50px]' />
                  <Link to='https://github.com/JornabeDV'><IoLogoGithub className='w-[50px] h-[50px]' /></Link>
                </div>
                <p className='text-xl'>Location: Latam</p>
              </div>
            </div>
          </div>

          <div className='p-4'>
            <p>* Copyright © 2024 Jorge Beja. Todos los derechos reservados. EcoBook.</p>
          </div>
        </div>

      </footer>

    </div>
  )
}

export default LandingPageInfo
