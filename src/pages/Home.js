import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MDBRow, MDBCol, MDBContainer, MDBTypography} from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import Blogs from '../components/Blogs';
import Search from '../components/Search';
import Category from '../components/Category';
import LatestBlog from '../components/LatestBlog';
import Pagination from '../components/Pagination';

const Home = () => {
  const [data, setData] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalBlog, setTotalBlog] = useState(null);
  const [pageLimit] = useState(5);

  const options = ["Academia", "Esportes", "Gastronomia", "Moda", "Tecnologia", "Viagem"]

  useEffect(() => {
    loadBlogsData(0, 5, 0);
    fetchLatestBlog();
  }, [])


  const loadBlogsData = async (start, end, increase) => {
    const response = await axios.get(`http://localhost:5000/blogs?_start=${start}&_end=${end}`);

    if (response.status === 200){
      setData(response.data);
      setCurrentPage(currentPage + increase);
    } else{
      toast.error('Algo deu errado!');
    }
  };

  const fetchLatestBlog = async () => {
    const totalBlog = await axios.get('http://localhost:5000/blogs');
    setTotalBlog(totalBlog.data.length);
    const start = totalBlog.data.length - 4;
    const end = totalBlog.data.length;

    const response = await axios.get(`http://localhost:5000/blogs?_start=${start}&_end=${end}`);
    

    if (response.status === 200){
      setLatestBlog(response.data);
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

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await axios.get(`http://localhost:5000/blogs?q=${searchValue}`);

    if (response.status === 200){
      setData(response.data);
    }else{
      toast.error('Algo deu errado!');
    }

  };

  const handleCategory = async (category) => {
    const response = await axios.get(`http://localhost:5000/blogs?category=${category}`);

    if (response.status === 200){
      setData(response.data);
    }else{
      toast.error('Algo deu errado!');
    }

  }

  return (
    <>
      <Search 
        handleSearch={handleSearch}
        searchValue={searchValue} 
        onInputChange={onInputChange} 
        
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

        <MDBCol size='3'>
          <h4 className='text-start'>Últimos Posts</h4>
          {latestBlog && latestBlog.map((item, index) => (
            <LatestBlog key={index} {...item} />
          ))}


          <Category options={options} handleCategory={handleCategory}/>
        </MDBCol>


      </MDBRow>
      <div className='mt-3'>
          <Pagination currentPage={currentPage} loadBlogsData={loadBlogsData} pageLimit={pageLimit} data={data} totalBlog={totalBlog} />
      </div>
    </>
  )
}

export default Home