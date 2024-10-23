
import {
    SET_PRICE_RANGE,
    SET_SELECTED_BEDROOMS,
    SET_SELECTED_BEDS,
    SET_SELECTED_BATHROOMS,
    SET_SELECTED_AMENITIES,
    SET_SELECTED_PROPERTY,
    SET_INSTANT_BOOK,
    SET_SELF_CHECK_IN,
    CLEAR_ALL_FILTERS,
    SET_LIKED_PROPERTY,

} from './action';

const initialState = {
    priceRange: [100, 50000],
    selectedBedrooms: 'Any',
    selectedBeds: 'Any',
    selectedBathrooms: 'Any',
    selectedAmenities: [],
    selectedProperty: [],
    instantBook: false,
    selfCheckIn: false,
    likedProperty: [],

};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICE_RANGE:
            return {
                ...state,
                priceRange: action.payload,
            };
        case SET_SELECTED_BEDROOMS:
            return {
                ...state,
                selectedBedrooms: action.payload,
            };
        case SET_SELECTED_BEDS:
            return {
                ...state,
                selectedBeds: action.payload,
            };
        case SET_SELECTED_BATHROOMS:
            return {
                ...state,
                selectedBathrooms: action.payload,
            };
        case SET_SELECTED_AMENITIES:
            return {
                ...state,
                selectedAmenities: action.payload,
            };
        case SET_SELECTED_PROPERTY:
            return {
                ...state,
                selectedProperty: action.payload,
            };
        case SET_INSTANT_BOOK:
            return {
                ...state,
                instantBook: action.payload,
            };
        case SET_SELF_CHECK_IN:
            return {
                ...state,
                selfCheckIn: action.payload,
            };
        case CLEAR_ALL_FILTERS:
            return initialState;
        case SET_LIKED_PROPERTY:
            return {

                ...state,
                likedProperty: action.payload
            }


        default:
            return state;
    }
};

export default Reducer;
