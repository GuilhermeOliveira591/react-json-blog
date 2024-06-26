  import React, {useEffect, useState} from 'react';
  import {MDBValidation, MDBInput, MDBBtn, MDBValidationItem} from 'mdb-react-ui-kit';
  import {useNavigate, useParams} from 'react-router-dom';
  import axios from 'axios';
  import {toast} from 'react-toastify';

  const initialState = {
    title: "",
    description: "",
    category: "",
    imageUrl: ""
  }

  const options = ["Academia", "Esportes", "Gastronomia", "Moda", "Tecnologia", "Viagem"]


  // f9t4tsxl
  const AddEditBlog = () => {

    const  [formValue, setFormValue] = useState(initialState);
    const  [categoryErrMsg, setCategoryErrMsg] = useState(null);
    const  [editMode, setEditMode] = useState(false);
    const  {title, description, category, imageUrl} = formValue;

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
      if(id){
        setEditMode(true);
        getSingleBlog(id);
      } else{
        setEditMode(false);
        setFormValue({...initialState});
      }
    }, [id]);

    const getSingleBlog = async (id) => {
      const singleBlog  = await axios.get(`http://localhost:5000/blogs/${id}`);
      if(singleBlog.status === 200){
        setFormValue({ ...singleBlog.data });
      } else{
        toast.error('Algo deu errado!');
      }

    }

    const getDate = () => {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();

      return `${dd}/${mm}/${yyyy}`; 
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(!category){
        setCategoryErrMsg("Por favor selecione uma categoria");
      }

      const imageValidation = !editMode ? imageUrl : true;

      if(title && description && imageUrl && category){
        const currentDate = getDate(); 

        if(!editMode){
          const updatedBlogData = {...formValue, date: currentDate};
          const response = await axios.post("http://localhost:5000/blogs", updatedBlogData);

          if(response.status === 201){
            toast.success("Blog Criado Com Sucesso!");
          } else{
            toast.error("Algo deu errado!");
          }
        } else{
          const response = await axios.put(`http://localhost:5000/blogs/${id}`, formValue);

          if(response.status === 200){
            toast.success("Blog Atualizado Com Sucesso!");
          } else{
            toast.error("Algo deu errado!");
          }
        }

        setFormValue({title: "", description: "", category: "", imageUrl: ""});
        navigate("/");
      }

    };

    const onInputChange = (e) => {
      let {name, value} = e.target;
      setFormValue({ ...formValue, [name]: value })

    };

    const onCategoryChange = (e) => {
      setCategoryErrMsg(null);
      setFormValue({ ...formValue, category: e.target.value })

    };
    
    const onUploadImage = (file) => {

      const formData = new FormData();

      formData.append('file', file);
      formData.append('upload_preset', 'f9t4tsxl');

      axios
        .post('https://api.cloudinary.com/v1_1/dmpqmgxuv/image/upload', formData)
        .then((resp) => {
          console.log("response", resp);
          toast.info('Imagem enviada com sucesso!');
          setFormValue({ ...formValue, imageUrl: resp.data.url });
        })
        .catch((err) => {
          toast.console.error('Algo deu errado!');
        });
    };

    return (
      <MDBValidation
        className='row g-3'
        style= {{ marginTop: '100px' }}
        noValidate
        onSubmit={handleSubmit}
      >

        <p className='fs-2 fw-bold'> {editMode ? "Editar Blog" : "Adicionar Blog"} </p>

        <div
          style={{
            margin: 'auto',
            padding: '15px',
            maxWidth: '400px',
            alignContent: 'center'
          }}
        >

          <MDBValidationItem 
            feedback='Título pendente' 
            invalid
          > 
            <MDBInput 
              value = {title || ''}
              name = 'title'
              type = 'text'
              onChange = {onInputChange}
              required
              label = 'Título'
            />
          </MDBValidationItem>
          <br />

          <MDBValidationItem 
            feedback='Descrição pendente' 
            invalid
          > 

            <MDBInput 
              value = {description || ''}
              name = 'description'
              type = 'text'
              onChange = {onInputChange}
              required
              label = 'Descrição'
              textarea
              rows={4}
            />
          </MDBValidationItem>
          <br />

          {!editMode && (
            <>
              <MDBValidationItem 
                feedback='Anexo Pendente' 
                invalid
              > 
                <MDBInput 
                  name = 'title'
                  type = 'file'
                  onChange = {(e) => onUploadImage(e.target.files[0])}
                  required
                />
              </MDBValidationItem>

              <br />

            </>
          )}

          <select 
            className='categoryDropdown' 
            onChange={onCategoryChange} 
            value={category} 
          > 
            <option> Selecione uma categoria </option>

            {options.map((option, index) => (
              <option value={option || ''} key={index}> 
                {option} 
              </option>
            ))}

          </select>

            {categoryErrMsg &&(
              <div className='categoryErrMsg'> {categoryErrMsg} </div>
            )}
          
          <br />
          <br />

          <MDBBtn 
            type='submit' 
            style={{marginRight: '10px'}}
          > 
            {editMode ? "Atualizar" : "Adicionar"} 
          </MDBBtn>

          <MDBBtn 
            color='danger' 
            style={{marginRight: '10px'}} 
            onClick={() => navigate('/')}
          > 
            Voltar
          </MDBBtn>

        </div>

      </MDBValidation>
    );
  }

  export default AddEditBlog