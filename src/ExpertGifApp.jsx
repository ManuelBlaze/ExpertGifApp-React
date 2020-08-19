import React, { useState, useEffect } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import DarkSwitch from './components/DarkSwitch';
import Spinner from './components/Spinner';

const ExpertGifApp = (  ) => {
    
    const [categories, setCategories] = useState(['My Hero Academia']);

    const [carga, setCarga] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    //Mostrar Spinner solo 3 segundos
    useEffect(() => {
        setTimeout(() => {
            setCarga(false);
        }, 3000);
    }, [carga, setCarga]);

    return (
        <>
            {/* Carga condicional del spinner o el contenido */}
            {carga ? (
                <Spinner />
            ) : ( 
                <div className='container pt-5'>
                    {/* darkswitch */}
                    <DarkSwitch 
                        setCarga = { setCarga }
                        darkMode = { darkMode }
                        setDarkMode = { setDarkMode }
                    />
                    
                    <h1 className = 'mt-2'>
                        <h className='animate__animated animate__flipInX animate__delay-2s'>
                            <b>E</b>xpert<b>G</b>if<b>A</b>pp  
                        </h>
                        <a className='float-right animate__animated animate__pulse animate__infinite' href="https://github.com/ManuelBlaze/ExpertGifApp-React" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
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
                </div>)
            }
        </>
    )
};

export default ExpertGifApp;