import React from 'react';
import '../Home/Home.css'
const Pagination = (props) => {
    let pageLinks = []
    
    return (
            <div className="container pag-cont">
                <div className="row">
                    <ul className="pagination">
                        { props.currentPage > 1 ? <li onClick={() => props.nextPage(props.currentPage - 1)}><a href="#!">Prev</a></li> : ''}
                        {  pageLinks }
                        { props.currentPage < props.pages + 1 ? <li onClick={() => props.nextPage(props.currentPage + 1)}><a href="#!">Next</a></li> : ''} 
                    </ul>
                </div>        
            </div>
    )
}

export default Pagination