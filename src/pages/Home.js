import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MDBRow, MDBCol, MDBContainer, MDBTypography} from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import Blogs from '../components/Blogs';

const Home = () => {
  const [data, setData] = useState([]);

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

  const handleDelete = () => {};

  const excerpt = (str) => {
    return str.length > 50 ? str.substring(0, 50) + "..." : str;
  };


  return (
    <>
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