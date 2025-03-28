export const INITIALIZE = {
    basket: []
};

const basketReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BASKET":
            const existingItem = state.basket.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    basket: state.basket.map(item =>
                        item.id === action.payload.id ? { ...item, QTY: item.QTY + 1 } : item
                    )
                };
            }
            return {
                ...state,
                basket: [...state.basket, { ...action.payload, counterr: 1, QTY: 1 }]
            };

        case "REMOVE_BASKET":
            return {
                ...state,
                basket: state.basket.filter(element => element.id !== action.payload)
            };

        case "PLUS_QTY":
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload ? { ...item, QTY: item.QTY + 1 } : item
                )
            };

        case "MINUS_QTY":
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload
                        ? { ...item, QTY: item.QTY > 1 ? item.QTY - 1 : 1 } 
                        : item
                )
            };

        default:
            return state; 
    }
};

export default basketReducer;
