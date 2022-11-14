import React from 'react'

import { Formik } from 'formik';
//styles
import {SignupContainer,Input, Name, Form, ErrorText} from './styles'

import { Button } from '../../components/ChatArea/styles';

const Basic = () => (
  <SignupContainer >
    <Name>LeChat</Name>
    <Formik
      initialValues={{ email: '',username: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.username) {
            errors.username = 'Required';
          } else if (
            values.username.length <5
          ) {
            errors.username = 'username must be atleast five letters';
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
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form 
        
        onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <ErrorText>
          {errors.email && touched.email && errors.email}
          </ErrorText>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <ErrorText>
          {errors.username && touched.username && errors.username}
          </ErrorText>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Button className='text-lg font-bold' style={{backgroundColor:'#4eac6d'}} type="submit" disabled={isSubmitting}>
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  </SignupContainer>
);

export default Basic;