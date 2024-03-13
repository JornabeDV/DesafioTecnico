import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addBook, editBook } from '../../app/actions'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import swal from 'sweetalert'
import FormField from '../FormField/FormField'

const BooksForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { loading, books } = useSelector(state => state.books)
  console.log(books)
  const [initialValues, setInitialValues] = useState({
    title: '',
    author: '',
    yearOfPublish: '',
    genre: ''
  })
  if (loading) {
    return <p>Loading books...</p>
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    yearOfPublish: Yup.number()
      .required('Year of Publish is required')
      .min(1000, 'Invalid year')
      .max(new Date().getFullYear(), 'Invalid year'),
    genre: Yup.string().required('Genre is required')
  })

  const showAlert = (message) => {
    swal(message, {
      icon: 'success'
    })
  }

  useEffect(() => {
    console.log(books)
    console.log(params._id)
    if ((params._id && Array.isArray(books.data))) {
      console.log(books)
      const book = books.data.find((book) => book._id === params._id)
      if (book) {
        setInitialValues({
          title: book.title,
          author: book.author,
          yearOfPublish: book.yearOfPublish,
          genre: book.genre
        })
        console.log(book)
      } else {
        console.log('Book not found')
      }
    } else {
      console.log('Failed')
    }
  }, [params._id, books])

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        if (params._id) {
          dispatch(editBook({ id: params._id, book: values }))
          showAlert('Book updated successfully')
        } else {
          dispatch(addBook(values))
          showAlert('Book added successfully')
        }
        navigate('/Home')
        resetForm()
      }}
    >
      <Form className='max-w-md mx-auto bg-black border-[#B2FA5B] p-5 rounded-md shadow-sm'>
        <FormField label='Title' name='title' type='text' />
        <FormField label='Author' name='author' type='text' />
        <FormField label='Year of Publish' name='yearOfPublish' type='text' />
        <FormField label='Genre' name='genre' type='text' />
        <button type='submit' className='bg-[#B2FA5B] text-xl text-black w-full px-4 py-3 rounded-md hover:bg-[#b2fa5b54]'>
          {params.id ? 'Update Book' : 'Add Book'}
        </button>
      </Form>
    </Formik>
  )
}

export default BooksForm
