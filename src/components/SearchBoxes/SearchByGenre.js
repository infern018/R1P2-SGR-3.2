import React from 'react';
import '../Home/Home.css'

const SearchByGenre = (props) => {
    return (
        <div className="container" style={{ paddingTop: 50, paddingBottom: 30 }}>
            <div className="row">
                <section className="test col s4 offset-s4">
                    <form onSubmit={props.handleSubmit2} action="">
                        <div class="input-field">
                            <input placeholder="Search by Genre" onChange={props.handleChange2} id="first_name2" type="text" class="validate" />                        
                        </div>  
                    </form>
                </section>                
            </div>
        </div>
        
    )
}

export default SearchByGenre;