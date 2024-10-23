import Explore from "../screen/Home/Explore";

export const SET_PRICE_RANGE = 'SET_PRICE_RANGE';
export const SET_SELECTED_BEDROOMS = 'SET_SELECTED_BEDROOMS';
export const SET_SELECTED_BEDS = 'SET_SELECTED_BEDS';
export const SET_SELECTED_BATHROOMS = 'SET_SELECTED_BATHROOMS';
export const SET_SELECTED_AMENITIES = 'SET_SELECTED_AMENITIES';
export const SET_SELECTED_PROPERTY = 'SET_SELECTED_PROPERTY';
export const SET_INSTANT_BOOK = 'SET_INSTANT_BOOK';
export const SET_SELF_CHECK_IN = 'SET_SELF_CHECK_IN';
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';
export const SET_LIKED_PROPERTY="LIKED_PROPERTY";


export const setPriceRange = (priceRange) => ({
    type: SET_PRICE_RANGE,
    payload: priceRange,
});

export const setSelectedBedrooms = (bedrooms) => ({
    type: SET_SELECTED_BEDROOMS,
    payload: bedrooms,
});

export const setSelectedBeds = (beds) => ({
    type: SET_SELECTED_BEDS,
    payload: beds,
});

export const setSelectedBathrooms = (bathrooms) => ({
    type: SET_SELECTED_BATHROOMS,
    payload: bathrooms,
});

export const setSelectedAmenities = (amenities) => ({
    type: SET_SELECTED_AMENITIES,
    payload: amenities,
});

export const setSelectedProperty = (property) => ({
    type: SET_SELECTED_PROPERTY,
    payload: property,
});

export const setInstantBook = (value) => ({
    type: SET_INSTANT_BOOK,
    payload: value,
});

export const setSelfCheckIn = (value) => ({
    type: SET_SELF_CHECK_IN,
    payload: value,
});

export const clearAllFilters = () => ({
    type: CLEAR_ALL_FILTERS,
});

export const setLikedProperty = (value) => (
    {
        type:SET_LIKED_PROPERTY,
        payload:value,
    }
)
