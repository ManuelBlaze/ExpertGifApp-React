import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const ExpertGifApp = (  ) => {
    
    const [categories, setCategories] = useState(['My Hero Academia']);

    return (
        <div className='container pt-5'>
            
            <h1>
                <b>E</b>xpert<b>G</b>if<b>A</b>pp  <a className='float-right' href="https://github.com/ManuelBlaze/ExpertGifApp-React" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </h1>

            <AddCategory 
                setCategories = {setCategories}
            />

            <hr/>

            { 
                categories.map( category => 
                    <GifGrid 
                        key = { category }
                        category = { category } 
                    />
                )
            }

        </div>
    )
};

export default ExpertGifApp;