// import { createSlice } from "@reduxjs/toolkit";

// const CardSlice = createSlice({
//     name : "Card",
//     initialState : {
//         Cards : [],
//         isLoading : false,
//         isSuccess : false,
//         isError : false,
//         message : ""
//     },
//     reducers : {
//         Add : (state , action) => {
//          return {
//             ...state,
//             Cards : [...state.Cards , action.payload]
//          }
//         },
//         Remove : (state , action) =>{
//             return {
//                 ...state,
//                 Cards : state.Cards.filter((item) => item.id !== action.payload )
//             }
//         }
       
//     },
//     extraReducers : (builder) =>{}
// })

// export const {Add , Remove } = CardSlice.actions
// export default CardSlice.reducer








































import { createSlice } from "@reduxjs/toolkit";


const saveCard = JSON.parse(localStorage.getItem("cardItems")) || []

const CardSlice = createSlice({
    name: "Card",
    initialState: {
        Cards: saveCard,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ""
    },
    reducers: {
        Add: (state, action) => {
            const existingCard = state.Cards.find(item => item.id === action.payload.id);
            if (existingCard) {
                existingCard.quantity += 1;
            } else {
                state.Cards.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cardItems", JSON.stringify(state.Cards))
        },
        Remove: (state, action) => {
            state.Cards = state.Cards.filter(item => item.id !== action.payload);
            localStorage.setItem("cardItems", JSON.stringify(state.Cards));
        },
        IncreaseQuantity: (state, action) => {
            const card = state.Cards.find(item => item.id === action.payload);
            if (card) {
                card.quantity += 1;
            }
            localStorage.setItem("cardItems" , JSON.stringify(state.Cards))
        },
        DecreaseQuantity: (state, action) => {
            const card = state.Cards.find(item => item.id === action.payload);
            if (card && card.quantity > 1) {
                card.quantity -= 1;
            }
            localStorage.setItem("cardItems", JSON.stringify(state.Cards))
        }
    },
    extraReducers: (builder) => {}
});

export const { Add, Remove, IncreaseQuantity, DecreaseQuantity } = CardSlice.actions;
export default CardSlice.reducer;
