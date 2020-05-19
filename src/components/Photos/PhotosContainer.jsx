import React from 'react';
import { connect } from 'react-redux';
import {getPhotosThunkCreator, setCurrentPhoto} from '../../redux/photoReducer';
import Photos from './Photos';

class PhotosContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getPhotosThunkCreator();
    }
    showPhoto = (id) =>{
        this.props.setCurrentPhoto(id);
        console.log(id);
    }
    render(){
        return(
            <>
                <Photos photos={this.props.photos}
                        currentPhoto={this.props.currentPhoto}
                        showPhoto={this.showPhoto}/>
            </>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        photos: state.photoReducer.photos,
        currentPhoto: state.photoReducer.currentPhoto
    }
}

export default connect(mapStateToProps,{
    getPhotosThunkCreator,
    setCurrentPhoto
})(PhotosContainer);