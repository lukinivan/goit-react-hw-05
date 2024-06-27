import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import * as Yup from "yup";

const initialsValue = {
  text: "",
};

const validationSchema = Yup.object({
  text: Yup.string().required(""),
});

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (value, action) => {
    onSubmit(value.text);
    action.resetForm();
  };

  return (
    <div className={css.form}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialsValue}
        onSubmit={handleSubmit}
        className={css.form}
      >
        <Form>
          <Field className={css.field} type="text" name="text" />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
