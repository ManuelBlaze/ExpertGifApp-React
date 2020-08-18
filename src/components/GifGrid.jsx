import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const apiKey = 'BuqwNxQxuIdZlcYxZN5pfgQybnanpgOx';

    const getGifs = async() => {
        
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=${apiKey}`;
        const res = await fetch( url );
        const {data} = await res.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages( gifs );
    };

    return (
        <>
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
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;
