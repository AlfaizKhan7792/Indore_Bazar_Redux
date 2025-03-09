// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { Remove } from '../features/Card/CardSlice'

// const CardItems = ({Card}) => {

// const dispatch = useDispatch()

// const handleRemove = (id) =>{
//     dispatch(Remove(id))
// }

//   return (
//     <>
//     <div className="bg-white border-[#722F37] flex justify-between mb-3 w-[40vw] card border-2 rounded-md shadow-md py-3 px-8 ">
//      <div className=" flex items-center justify-between space-x-10  ">
//         <img src={Card?.image} alt="" className='w-32 hover:scale-105' />
//         <div>
//             <h1 className="font-bold text-2xl text-[#722F37] mb-2">{Card?.title}</h1>
//             <h3 className='font-bold' > Price : <span className='text-lg text-[#722F37]' >{Card?.price}</span></h3>
//             <p className='font-bold' >Quantity : {Card?.length}</p>
//         </div>

//         </div> 
//         <button onClick={() => handleRemove(Card?.id)} className='float-end h-10 hover:border hover:scale-75 px-5 bg-[#722F37] text-white rounded-lg shadow-md hover:bg-[#5b242d] transition' >X</button>
//     </div>
//     </>
//   )
// }

// export default CardItems































import React from 'react'
import { useDispatch } from 'react-redux'
import { Remove, IncreaseQuantity, DecreaseQuantity } from '../features/Card/CardSlice'

const CardItems = ({ Card }) => {
    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(IncreaseQuantity(Card.id))
    }

    const handleDecrease = () => {
        if (Card.quantity > 1) {
            dispatch(DecreaseQuantity(Card.id))
        }
    }

    return (
        <div className="bg-white border-[#722F37] flex flex-col sm:flex-row justify-between items-center p-4 rounded-lg shadow-md w-full max-w-3xl mx-auto">
            <div className="flex items-center space-x-4">
                <img src={Card?.image} alt={Card?.title} className='w-24 h-24 object-cover rounded-md' />
                <div>
                    <h1 className="font-bold text-xl text-[#722F37]">{Card?.title}</h1>
                    <h3 className='font-bold'> Price: <span className='text-lg text-[#722F37]'>₹{(Card?.price * Card?.quantity).toFixed(2)}</span></h3>
                    <div className="flex items-center space-x-3 mt-2">
                        <button 
                            onClick={handleDecrease} 
                            disabled={Card.quantity === 1}
                            className={`px-3 py-1 rounded-md shadow-md transition ${
                                Card.quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#722F37] text-white hover:bg-red-600'
                            }`}
                        >
                            -
                        </button>
                        <span className="text-lg font-bold">{Card?.quantity}</span>
                        <button 
                            onClick={handleIncrease} 
                            className='px-3 py-1 bg-[#722F37] text-white rounded-md shadow-md hover:bg-green-600 transition'
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <button 
                onClick={() => dispatch(Remove(Card.id))} 
                className='mt-3 sm:mt-0 px-4 py-2 bg-[#722F37] text-white rounded-lg shadow-md hover:bg-[#5b242d] transition'
            >
                X
            </button>
        </div>
    )
}

export default CardItems;

