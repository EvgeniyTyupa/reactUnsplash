import {photoApi} from '../api/api';


const SET_PHOTOS = 'SET_PHOTOS';
const TAKE_PHOTO = 'TAKE_PHOTO';


let initialState = {
    photos: [],
    currentPhoto: 0
}

const photoReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PHOTOS:{
            return { ...state, photos: action.photos}
        }
        case TAKE_PHOTO:{
            return{ ...state, currentPhoto: action.currentPhoto}
        }
        default:
            return state;
    }
}

export const setPhotos = (photos) =>({
    type: SET_PHOTOS, photos
});
export const setCurrentPhoto = (currentPhoto) =>({
    type: TAKE_PHOTO, currentPhoto
});


export const getPhotosThunkCreator = () =>{
    return(dispatch)=>{
        photoApi.getPhotos().then(data => {
            dispatch(setPhotos(data));
        })
    }
    
}


export default photoReducer;