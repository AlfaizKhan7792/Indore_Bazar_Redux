import React, { useEffect } from 'react'
import CardItems from '../components/CardItems'
import { useSelector } from 'react-redux'
import LoadingPage from '../components/LoadingPage'
import BillCard from '../components/BillCard'

const CardPage = () => {
    const { Cards, isLoading, isError, message } = useSelector(state => state.Card)

    useEffect(() => {
        if (isError || message) {
            console.log("Cards Not fetch!!", message);
        }
    }, [])

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <>
            {Cards.length === 0 || !Cards ? (
                <div className="min-h-screen flex flex-col items-center justify-center p-5 text-center">
                    <h1 className="my-5 text-3xl md:text-4xl font-bold text-[#722F37] shadow-sm">No Items in Cart</h1>
                    <img src="https://cdn.dribbble.com/userupload/23000951/file/original-51162083f8d27d9af7c6c0a19b9116ba.gif"
                        alt="Empty Cart"
                        className="w-3/4 md:w-1/2 lg:w-1/3"
                    />
                </div>
            ) : (
                <div className="container mx-auto px-3 md:px-5 min-h-screen bg-[#EFDFBB]">
                    <div className="p-5">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 flex flex-col space-y-4">
                                {Cards.map((Card) => (
                                    <CardItems key={Card.id} Card={Card} />
                                ))}
                            </div>

                            {/* Bill Card */}
                            <div className="w-full">
                                <BillCard Cards={Cards} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CardPage;
