// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import s from './AddPostForm.module.css'


const addPostFormInitialValues = { post_message: '', }

const AddPostForm: React.FC<AddPostFormPropsType> = ({ addPost }) => {

    const validateAddPostForm = (values: AddPostFormValuesType) => {
        const errors: any = {};
        if (!values.post_message) {
            errors.post_message = 'Field required';
        }
        return errors
    }

    const onSubmitHandler = (values: AddPostFormValuesType, { setSubmitting, resetForm }: FormikHelpers<AddPostFormValuesType>) => {
        addPost(values.post_message)
        setSubmitting(false)
        resetForm()
    }

    return (
        <div className={s.postAddForm}>
            <Formik
                initialValues={addPostFormInitialValues}
                validate={validateAddPostForm}
                onSubmit={onSubmitHandler}>


                {({ isSubmitting }) => (
                    <Form>
                        <Field name="post_message" component="textarea" />
                        <ErrorMessage name="post_message" component="div" className={s.errorMessage} />
                        <button type="submit" disabled={isSubmitting}>
                            Add post
                        </button>
                    </Form>
                )}

            </Formik>
        </div>
    )
};

export default AddPostForm



type AddPostFormPropsType = {
    addPost: (message: string) => void
}

type AddPostFormValuesType = {
    post_message: string
}