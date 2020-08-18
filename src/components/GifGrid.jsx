import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <div className='mb-5'>
            <h3> { category } </h3>

            { loading && <span className="badge badge-pill badge-info text-center">Loading</span> }

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
