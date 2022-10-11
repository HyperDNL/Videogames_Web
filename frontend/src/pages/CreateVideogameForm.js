import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useVideogames } from "../context/videogameContext"
import { useNavigate } from 'react-router-dom'

export function CreateVideogameForm() {
  const { createVideogame } = useVideogames()
  const navigate = useNavigate()

  return (
    <div>
      <div className='form-content'>
        <div className='title-form'>
          <h1 className='create-videogame-title'>Create New <span className='span-title'>Videogame</span></h1>
        </div>
        <Formik
          initialValues={{
            title: '',
            description: '',
            developer: '',
            year: '',
            price: '',
            platform: [],
            image_cover: '',
            image_land: ''
          }}
          validationSchema={
            Yup.object({
              title: Yup.string().required("Title is Required"),
              description: Yup.string().required("Description is Required"),
              developer: Yup.string().required("Developer is Required"),
              year: Yup.number().required("Year is Required").min(1),
              price: Yup.number().required('Price is Required').min(1),
              platform: Yup.array().required("Platform is Required"),
              image_cover: Yup.string().required("Image Cover URL is Required"),
              image_land: Yup.string().required("Image Landscape URL is Required")
            })
          }
          onSubmit={async (values, actions) => {
            await createVideogame(values)
            navigate('/')
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-container'>
                <label className='label-form'>Title</label>
                <Field className='input-style' type="text" name="title" placeholder="Title" />
                <ErrorMessage component="p" className='alert-text' name='title' />
              </div>
              <div className='input-container'>
                <label className='label-form'>Description</label>
                <Field className='input-style' component="textarea" name="description" placeholder="Description" />
                <ErrorMessage component="p" className='alert-text' name='description' />
              </div>
              <div className='input-container'>
                <label className='label-form'>Developer</label>
                <Field className='input-style' type="text" name="developer" placeholder="Developer" />
                <ErrorMessage component="p" className='alert-text' name='developer' />
              </div>
              <div className='pair-inputs'>
                <div className='input-container'>
                  <label className='label-form'>Year</label>
                  <Field className='input-style' type="number" name="year" placeholder="Year" />
                  <ErrorMessage component="p" className='alert-text' name='year' />
                </div>
                <div className='input-container'>
                  <label className='label-form'>Price</label>
                  <Field className='input-style' type="number" name="price" placeholder="Price" />
                  <ErrorMessage component="p" className='alert-text' name='price' />
                </div>
              </div>
              <div className='input-container'>
                <div>
                  <label className='label-form'>Platform</label>
                </div>
                <div className='checkbox-container'>
                  <div>
                    <Field name="platform" type="checkbox" value="PS4" />
                    <label className='label-checkbox'>PS4</label>
                  </div>
                  <div>
                    <Field name="platform" type="checkbox" value="PS5" />
                    <label className='label-checkbox'>PS5</label>
                  </div>
                  <div>
                    <Field name="platform" type="checkbox" value="Xbox One" />
                    <label className='label-checkbox'>Xbox One</label>
                  </div>
                  <div>
                    <Field name="platform" type="checkbox" value="Xbox Series X/S" />
                    <label className='label-checkbox'>Xbox Series X/S</label>
                  </div>
                  <div>
                    <Field name="platform" type="checkbox" value="Nintendo Switch" />
                    <label className='label-checkbox'>Nintendo Switch</label>
                  </div>
                  <div>
                    <Field name="platform" type="checkbox" value="PC" />
                    <label className='label-checkbox'>PC</label>
                  </div>
                </div>
                <ErrorMessage component="p" className='alert-text' name='platform' />
              </div>
              <div className='input-container'>
                <label className='label-form'>Image Cover</label>
                <Field className='input-style' type="text" name="image_cover" placeholder="Image URL" />
                <ErrorMessage component="p" className='alert-text' name='image_cover' />
              </div>
              <div className='input-container'>
                <label className='label-form'>Image Landscape</label>
                <Field className='input-style' type="text" name="image_land" placeholder="Image URL" />
                <ErrorMessage component="p" className='alert-text' name='image_land' />
              </div>
              <div className='button-form'>
                <button className='submit-btn' type='submit'>Save</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}