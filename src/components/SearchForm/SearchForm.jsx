import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import styled from '@emotion/styled';

const initialValues = {
  value: '',
};

const FormMovies = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
const SearchBtn = styled.button`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
const SearchBtnLabel = styled(FaSearch)`
  position: absolute;
  left: 10px;
  top: 14px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
`;

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
