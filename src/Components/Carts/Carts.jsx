import React from 'react';
import Cart from './Cart';
import { toast } from 'react-toastify';

const Carts = ({ carts, setCarts, }) => {
    // console.log(carts.price)
    const totalPrice = carts.reduce((sum, items) => sum + items.price, 0);
    //    console.log(totalPrice)
    const handleProceedCart = () => {
        setCarts([])
        toast.success('Successfully Proceed to CheckOut')
    }

    return (
        <div className='container mx-auto'>
            <div className='w-11/12  md:w-8/12 mx-auto py-10'>
                <h1 className='font-bold text-3xl md:text-5xl'>Yours Carts </h1></div>
            {
                carts.length == 0 ? <div>
                    <div className='w-11/12  md:w-8/12 mx-auto'>
                        <p className=' bg-gray-200 text-center text-xl md:text-2xl font-bold my-10  py-20 px-5 rounded-3xl text-red-400 '>Your cart is empty right now </p>                   </div>
                </div> : <>


                    <div className='w-8/12 mx-auto py-5 space-y-10'>
                        {
                            carts.map(cart => <Cart key={cart.id} cart={cart} setCarts={setCarts} carts={carts} />)
                        }
                    </div>


                    <div className='w-11/12  md:w-8/12 mx-auto my-10 flex flex-col md:flex-row justify-between items-center border py-10 rounded-3xl gap-6 shadow-xl  bg-[#000005]  hover:border-white px-5'>
                        <div className='text-white text-3xl md:text-4xl font-bold'>Total</div>
                        <div className='text-orange-600 text-3xl md:text-4xl  font-bold'>{Math.floor(totalPrice)} $</div>
                    </div>
                    <div onClick={handleProceedCart} className='w-11/12  md:w-8/12 mx-auto my-10   py-5 rounded-3xl gap-6 shadow-xl text-center bg-red-500 hover:shadow-red-300  hover:bg-red-600 px-5'>
                        <h1 className='text-xl md:text-3xl font-bold text-white'>Proceed to CheckOut</h1>
                    </div>
                </>
            }


        </div>
    );
};

export default Carts;