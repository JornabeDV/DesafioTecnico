import { createBrowserRouter } from 'react-router-dom'
import { MainLayout, UserLayout } from '../layouts'

import {
  LandingPage,
  Home,
  Form,
  Favorites
} from '../routes'
import { Suspense } from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (

      <Suspense>
        <MainLayout />
      </Suspense>

    ),
    children: [
      {

        path: '/',
        element: (
          <Suspense>
            <LandingPage />
          </Suspense>
        )
      },
      {
        path: '/',
        element: (
          <Suspense>
            <UserLayout />
          </Suspense>
        ),
        children: [
          {
            path: '/Home',
            element: <Home />
          },
          {
            path: '/Form/:_id',
            element: <Form />
          },
          {
            path: '/Form',
            element: <Form />
          },
          {
            path: '/Favorites',
            element: <Favorites />
          }
        ]
      }

    ]

  }
])

/*
if you wants to add a new route please create a new component
on the  routes file ./Routes

then

add a new object with the path and element properties

    {
        path: '',
        element: <>
      },

      inside the children propertie.
*/
