import { Alert } from 'antd';
import { useFormik } from 'formik';
import validate from './validate.js';

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'error';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'error';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'error';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };
export const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      {formik.errors.firstName ? (
        <Alert
          message={formik.errors.firstName}
          description="loi dinh dang"
          // description="This is an error message about Formating."
          type="error"
          showIcon
        />
      ) : null}

      <hr />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? (
        <Alert
          message={formik.errors.lastName}
          description="This is an error message about Formating."
          type="error"
          showIcon
        />
      ) : null}
      <hr />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
        <Alert
          message={formik.errors.email}
          description="This is an error message about Formating."
          type="error"
          showIcon
        />
      ) : null}
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
};
