import React, { useState } from 'react'

const BillCard = ({ Cards }) => {
    const [selectedShippingCosts, setSelectedShippingCosts] = useState(0)

    const handleShippingCosts = (event) => {
        setSelectedShippingCosts(parseFloat(event.target.value))
    }

    const calculateTotal = () => {
        const subTotal = Cards.reduce((p, c) => p + (c.price * c.quantity), 0)
        const tax = ((subTotal * 18) / 100)
        const shippingCost = selectedShippingCosts
        const total = subTotal + tax + shippingCost
        return { subTotal, tax, total, shippingCost }
    }

    return (
        <div className="border-[#722F37] w-full max-w-md mx-auto p-5 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold">Your Bill: 
                <span className='text-[#722F37]'> ₹{calculateTotal().subTotal.toFixed(2)}</span> 
            </h2>
            <p className="text-lg">Tax (GST : 18%): 
                <span className='text-[#722F37]'> ₹{calculateTotal().tax.toFixed(2)}</span>
            </p>
            <div className="my-2">
                <label className='block font-medium text-sm uppercase mb-2'>Shipping</label>
                <select 
                    onChange={handleShippingCosts} 
                    className='w-full p-2 border rounded-md bg-transparent text-black'
                >
                    <option value={0}>Upto 5 km - Free</option>
                    <option value={15}>Range 5-8 km - ₹15.00</option>
                    <option value={25}>Range 9-15 km - ₹25.00</option>
                    <option value={40}>Above 15 km - ₹40.00</option>
                </select>
            </div>
            <p className="text-lg">Shipping Cost: 
                <span className="text-[#722F37]"> ₹{calculateTotal().shippingCost.toFixed(2)}</span>
            </p>
            <h2 className="text-2xl font-semibold">Total Amount: 
                <span className='text-[#722F37]'> ₹{calculateTotal().total.toFixed(2)}</span>
            </h2>
            <button className='w-full px-4 py-2 mt-4 bg-[#722F37] text-white rounded-lg shadow-md hover:bg-[#5b242d] transition'>Pay Now</button>
        </div>
    )
}

export default BillCard;
