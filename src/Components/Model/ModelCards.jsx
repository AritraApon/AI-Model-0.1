import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCards = ({ model, setCarts, carts, }) => {

  const isSelected = !carts.find(c => c.id === model.id);
    const handleSubscribeBtn = (model) => {


        if (isSelected) {
            setCarts([...carts, model]);
            toast.success("Sussecfully Subscribe")
        }else{
            toast.error('Item all ready selected')
        }
    }
    return (
        <div className="flex justify-center px-4">
            <div className="card bg-base-100 w-full max-w-sm shadow-lg rounded-2xl border-2 border-[#909094] hover:scale-105 transition-transform duration-500">
                <figure className="bg-[#e4e4e7] h-50 p-4 relative">
                    <img
                        src={model.image}
                        alt="Shoes"
                        className="w-full h-full object-contain animate-pulse"
                    />
                    <p className="absolute right-1 top-2 bg-amber-200 px-3 py-1 border-amber-400 text-red-700 font-bold rounded-full">
                        ⭐{model.status}
                    </p>
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="text-2xl font-bold">{model.title}</h2>
                    <p>{model.description}</p>
                    <p>
                        <span className="text-3xl font-bold">${model.price}</span>
                        <span>/months</span>
                    </p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleSubscribeBtn(model)}
                            className={`btn  text-white w-full rounded-2xl py-8 text-xl font-bold 
            ${!isSelected ? "bg-green-500 shadow-2xl hover:shadow-green-300" : "bg-red-500 shadow-2xl hover:shadow-red-300"} `}
                        >
                            {!isSelected  ? "Subscribe Now" : "Subscribe"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelCards;