import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import * as Yup from "yup";

const initialsValue = {
  text: "",
};

const validationSchema = Yup.object({
  text: Yup.string().required("Please, write your request."),
});

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (value, action) => {
    onSubmit(value.text);
    action.resetForm();
  };

  return (
    <header>
      <div className={css.form}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialsValue}
          onSubmit={handleSubmit}
          className={css.form}
        >
          <Form>
            <Field className={css.field} type="text" name="text" />
            <ErrorMessage className={css.error} name="text" component="span" />

            <button className={css.btn} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </div>
    </header>
  );
};
