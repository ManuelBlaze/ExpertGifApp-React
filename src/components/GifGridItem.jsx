import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
    

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 crd">
            <div className="card bg-ligth">
                <div className="card-header">{ title }</div>
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
