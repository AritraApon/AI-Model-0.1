import React, { use, useState } from 'react';
import ModelCards from './ModelCards';

const Model = ({modelPromise , setCarts ,carts}) => {
    const modelData = use(modelPromise)

    return (
        <div className='container mx-auto py-3 space-y-4'>
            <div className='text-center space-y-3'>
                <h1 className='text-3xl md:text-5xl font-bold'>Choose Your AIModel</h1>
                <p className='text-2xl font-light'>One  subscription  give  you  access  to  all  frontier  AIModel</p>
            </div>
          <div className=' w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center mt-10'>
             {
            modelData.map(model=> <ModelCards key={model.id}
                    model={model} setCarts={setCarts} carts={carts} 
            />)
           }
          </div>

          <div className='text-center font-light py-10'>All models are available under one powerful subscription • Cancel anytime</div>
        </div>
    );
};

export default Model;