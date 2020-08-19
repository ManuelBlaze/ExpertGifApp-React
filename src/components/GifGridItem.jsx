import React from 'react';
import PropTypes from 'prop-types';
import CopyBtn from './CopyBtn';

const GifGridItem = ({ title, url }) => {
    

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 crd">
            <div className="card bg-ligth animate__animated animate__fadeIn animate__delay-1s">
                <div className="card-header">{ title } { }
                    <a href={ url } target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-share-square"></i>
                    </a> { }
                    <CopyBtn url = { url } />
                </div>
                <div className="card-body">
                    <img src={ url } alt={ title } className='card-img'/>
                </div>
            </div>
        </div>
    )
};

GifGridItem.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string.isRequired
};

export default GifGridItem;
