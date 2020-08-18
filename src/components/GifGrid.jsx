import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs( category )
            .then( setImages );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='mb-5'>
            <h3> { category } </h3>
            <div className="row">
                {
                    images.map( img => (
                        <GifGridItem 
                            key = {img.id}
                            { ...img }
                        /> 
                    ))
                }
            </div>
            <hr/>
        </div>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;
