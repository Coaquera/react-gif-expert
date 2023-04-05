import { useState } from 'react';
import { AddCategory,GifGrid } from './components/index';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['Paisaje','Mundial']);
    
    const onAddCategory = (regresaEntrada) => {  
        
        //console.log("resultado....",regresaEntrada);
        if (categories.includes(regresaEntrada)) return;
        setCategories(catego => [regresaEntrada,...catego]);
    }

    return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>
        {/*Input*/}
        <AddCategory 
            //setCate={setCategories}
            onNewCategory={regresaEntrada => onAddCategory(regresaEntrada)}
        />
        {/*listado de gif*/ }
        
        {      
            categories.map(category =>
                <GifGrid key={category} categorypro={category}/>
            )
        }
        
    </>
    
  )
}
