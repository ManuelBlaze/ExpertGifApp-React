import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const CopyBtn = ({ url }) => {

    const [copySuccess, setCopySuccess] = useState('');

    const urlRef = useRef(null);
    
    const handleClick = ( e ) => {
        e.preventDefault();
        urlRef.current.select();
        document.execCommand("copy");
        setCopySuccess('Copied link successfully!');

        setTimeout(() => {
            setCopySuccess('');
        }, 2000);
    };

    return (
        <> 
            <a
                className='text-danger'
                onClick={ handleClick }
                href='/'
            >
                <i className="fas fa-clone"></i>
            </a>
            <span class="badge badge-danger">{copySuccess}</span>
            <form 
                readOnly
                className='copyUrl'
            >
                <textarea
                    ref={ urlRef }
                    value={ url }
                    readOnly
                />
            </form>
        </>
    )
};

CopyBtn.propTypes = {
    url : PropTypes.string.isRequired
};

export default CopyBtn;