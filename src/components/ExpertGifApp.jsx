import React, { useState } from 'react';
import AddCategory from './AddCategory';

const ExpertGifApp = (  ) => {
    
    const [categories, setCategories] = useState(['My Hero Academia']);

    return (
        <div className='container pt-5'>
            
            <h2>
                <b>E</b>xpert<b>G</b>if<b>A</b>pp
            </h2>

            <AddCategory 
                setCategories = {setCategories}
            />

            <hr/>

            <ol>
                { 
                    categories.map( category => {
                        return <li key={category}> { category } </li>
                    })
                }
            </ol>

        </div>
    )
};

export default ExpertGifApp;