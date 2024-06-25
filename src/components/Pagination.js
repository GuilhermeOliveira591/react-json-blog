import React from 'react';
import {MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBBtn} from 'mdb-react-ui-kit';

const Pagination = ({currentPage, pageLimit, loadBlogsData, data, totalBlog}) => {

    const renderPagination = () => {
        if(currentPage === 0){
            return(
                <MDBPagination center className='mb-0'>
                    <MDBPaginationItem>
                        <MDBPaginationLink>
                            1
                        </MDBPaginationLink>
                    </MDBPaginationItem>

                    <MDBPaginationItem>
                        <MDBPaginationLink>
                        <MDBBtn rounded onClick={() => loadBlogsData()}>
                                Próxima
                        </MDBBtn>
                        </MDBPaginationLink>
                    </MDBPaginationItem>

                </MDBPagination>

            )
        } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
            return(
                <MDBPagination center className='mb-0'>
                    <MDBPaginationItem>
                        <MDBPaginationLink>
                            <MDBBtn rounded onClick={() => loadBlogsData()}>
                                Anterior
                            </MDBBtn>
                        </MDBPaginationLink>

                        <MDBPaginationItem>
                            <MDBPaginationLink>
                                {currentPage + 1}
                            </MDBPaginationLink>
                        </MDBPaginationItem>

                        <MDBPaginationItem>
                            <MDBBtn rounded onClick={() => loadBlogsData()}>
                                Próxima
                            </MDBBtn>
                        </MDBPaginationItem>

                    </MDBPaginationItem>

                </MDBPagination>
            )
        } else {
            return(
                <MDBPagination center className='mb-0'>
                    <MDBPaginationItem>
                        <MDBBtn rounded onClick={() => loadBlogsData()}>
                            Anterior
                        </MDBBtn>
                    </MDBPaginationItem>
                    
                    <MDBPaginationItem>
                        <MDBPaginationLink>
                            {currentPage + 1}
                        </MDBPaginationLink>
                    </MDBPaginationItem>    

                </MDBPagination>
            )
        }

    }

    return (
        <div>{renderPagination()}</div>
    )
}

export default Pagination