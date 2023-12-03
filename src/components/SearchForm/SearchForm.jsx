import { Formik } from 'formik';
import { toast } from 'react-toastify';
import {
  FormMovies,
  Input,
  SearchBtn,
  SearchBtnLabel,
} from './SearchForm.styled';

const initialValues = {
  value: '',
};

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.value.trim() === '') {
      toast.error('Write something in the search');
      return;
    }
    console.log(values.value);
    onSubmit(values.value);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormMovies>
        <Input type="text" name="value" placeholder="Enter your search term" />
        <SearchBtn type="submit">
          <SearchBtnLabel />
        </SearchBtn>
      </FormMovies>
    </Formik>
  );
};

export default SearchForm;
