import { Field, ErrorMessage } from 'formik'

const FormField = ({ label, name, type }) => (
  <div className='mb-4'>
    <label htmlFor={name} className='block text-sm lg:text-xl font-medium text-white'>{label}</label>
    <Field type={type} id={name} name={name} className='p-4 mt-1 lg:text-lg block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
    <ErrorMessage name={name} component='div' className='text-red-500 text-sm mt-1' />
  </div>
)

export default FormField
