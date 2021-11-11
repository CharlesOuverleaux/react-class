import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';


export default function FormListing() {
  return(
    <div className='FormListing'>
      <h1>I'm a form</h1>
      <Formik
        initialValues={{ email: ''}}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor='email'>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor='projectName'>Project Name</label>
            <Field type="text" name="projectName" />
            <ErrorMessage name="projectName" component="div" />

            <label htmlFor='openseaLink'>Opensea Link</label>
            <Field type="text" name="openseaLink" />
            <ErrorMessage name="openseaLink" component="div" />

            <label htmlFor='websiteLink'>Website Link</label>
            <Field type="text" name="websiteLink" />
            <ErrorMessage name="websiteLink" component="div" />

            <label htmlFor='twitterLink'>Twitter Link</label>
            <Field type="text" name="twitterLink" />
            <ErrorMessage name="twitterLink" component="div" />

            <label htmlFor='discordLink'>Discord Link</label>
            <Field type="text" name="discordLink" />
            <ErrorMessage name="discordLink" component="div" />

            <label htmlFor='contractAddress'>Collection Contract Address</label>
            <Field type="text" name="contractAddress" />
            <ErrorMessage name="contractAddress" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
