import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MDBRow, MDBCol, MDBContainer, MDBTypography} from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import Blogs from '../components/Blogs';
import Search from '../components/Search';

const Home = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    loadBlogsData();
  }, [])


  const loadBlogsData = async () => {
    const response = await axios.get('http://localhost:5000/blogs');

    if (response.status === 200){
      setData(response.data);
    } else{
      toast.error('Algo deu errado!');
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm("Tem certeza que deseja excluir?")){
      const response = await axios.delete(`http://localhost:5000/blogs/${id}`);

      if (response.status === 200){
        toast.success("Excluído com sucesso!");
        loadBlogsData();
      } else{
        toast.error('Algo deu errado!');
      }
    }
  };

  const excerpt = (str) => {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  };

  const onInputChange = (e) => {
    if( !e.target.value ){
      loadBlogsData();
    }

    setSearchValue(e.target.value);
  }

  const handleSearch = async (e, searchValue) => {
    e.preventDefault();

    const response = await axios.get(`http://localhost:5000/blogs?q=${searchValue}`);

    if (response.status === 200){
      setData(response.data);
    }else{
      toast.error('Algo deu errado!');
    }

  }

  return (
    <>
      <Search 
        searchValue={searchValue} 
        onInputChange={onInputChange} 
        handleSearch={handleSearch}
      />
      <MDBRow> 
        {data.length === 0 && (
          <MDBTypography 
            className='text-center mb-0' 
            tag='h2'
          >
            Nenhum Blog Encontrado
          </MDBTypography>
        )}
        <MDBCol>
          <MDBContainer>
            <MDBRow>
              {data && data.map((item, index) =>(
                <Blogs
                  key={index}
                  {...item}
                  excerpt={excerpt}
                  handleDelete={handleDelete}
                />
              ))}
            </MDBRow>
          </MDBContainer>
        </MDBCol>


      </MDBRow>
    </>
  )
}

export default Home