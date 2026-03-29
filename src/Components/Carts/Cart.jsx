import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCarts ,carts}) => {
    const handleRemove = () => {
        const filterCarts = carts.filter(c => c.id !== cart.id)
        setCarts(filterCarts);
        toast.warn('Remove Item')
    }
    return (
        <div className='flex flex-col md:flex-row justify-between items-center border p-4 rounded-3xl gap-6 shadow-xl  bg-[#f4f4f5]  hover:border-red-500'>
            <div className='flex flex-col md:flex-row  justify-between gap-3'>
                <div className="avatar ">
                    <div className="w-24 rounded">
                        <img src={cart.image} />
                    </div>

                </div>
                <div>
                    <h1 className='text-2xl  font-bold'>{cart.title}</h1>
                    <p className='text-[10px] md:text-sm font-extralight'> {cart.description}</p>
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <p> <span className="text-3xl font-bold">${cart.price}</span>
                    <span>/months</span></p>
                <button onClick={handleRemove} className='hover:text-red-500 text-xl'>X</button>
            </div>
        </div>
    );
};

export default Cart;