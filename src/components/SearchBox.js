import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="container" style={{ paddingTop: 30, paddingBottom: 30 }}>
            <div className="row">
                <section className="test col s4 offset-s4">
                    <form onSubmit={props.handleSubmit} action="">
                        <div class="input-field">
                            <input placeholder="Search by Title" onChange={props.handleChange} id="first_name2" type="text" class="validate" />                        
                        </div>  
                    </form>
                </section>                
            </div>
        </div>
        
    )
}

export default SearchBox;