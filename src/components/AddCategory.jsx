import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2) {
            setCategories( cats => [ ...cats, inputValue ] );
            setInputValue('');
        }
    }

    return (
        <form 
            className='form-group'
            onSubmit={ handleSubmit }
        >
            <input
                className='form-control form-control-sm'
                onChange={ handleInputChange }
                type="text"
                value={ inputValue }
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;