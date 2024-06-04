import React, {useState} from 'react';
import {MDBValidation, MDBInput, MDBBtn} from 'mdb-react-ui-kit';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

const initialState = {
  title: "",
  description: "",
  category: "",
  imageUrl: ""
}

const options = ["Travel", "Fashion", "Fitness", "Sports", "Food", "Tech"]


// f9t4tsxl
const AddEditBlog = () => {

  const  [formValue, setFormValue] = useState(initialState);
  const  [categoryErrMsg, setCategoryErrMsg] = useState(null);
  const  [title, description, category, imageUrl] = formValue;

  const navigate = useNavigate();
  const handleSubmit = (e) => {};
  const onInputChange = (e) => {};
  const onCategoryChange = (e) => {};
  const onUploadImage = (file) => {};

  return (
    <MDBValidation
      classname='row g-3'
      style= {{ marginTop: '100px' }}
      noValidate
      onSubmit={handleSubmit}
    >

      <p classname='fs-2 fw-bold'> Add Blog </p>

      <div
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center'
        }}
      >

        <MDBInput 
          value = {title || ''}
          name = 'title'
          type = 'text'
          onChange = {onInputChange}
          required
          label = 'Title'
          validation='Please provide a title'
          invalid
        />
        <br />

        <MDBInput 
          value = {description || ''}
          name = 'description'
          type = 'text'
          onChange = {onInputChange}
          required
          label = 'Description'
          validation='Please provide a description'
          textarea
          rows={4}
          invalid
        />
        <br />

        <MDBInput 
          name = 'title'
          type = 'file'
          onChange = {(e) => onUploadImage(e.target.files[0])}
          required
          label = 'Title'
          validation='Please provide a title'
          invalid
        />
        <br />

        <select 
          className='categoryDropdown' 
          onChange={onCategoryChange} 
          value={category} 
        > 
          <option> Please select category </option>

          {options.map((option, index) => (
            <option value={option || ''} key={index}> 
              {option} 
            </option>
          ))}

        </select>
        <br />
        <br />

        <MDBBtn 
          type='submit' 
          style={{marginRight: '10px'}}
        > 
          Add 
        </MDBBtn>

        <MDBBtn 
          type='submit' 
          style={{marginRight: '10px'}} 
          onClick={() => navigate('/')}
        > 
          Go Back 
        </MDBBtn>

      </div>

    </MDBValidation>
  );
}

export default AddEditBlog