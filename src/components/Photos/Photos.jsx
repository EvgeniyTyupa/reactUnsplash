import React from "react";
import classes from './Photos.module.css';
import Photo from "./Photo/Photo";
import { Route } from "react-router-dom";





const Photos = (props) => {
    
    let photoBig = "";

    let photos = props.photos.map((photo, index) => {
            return <Photo name = {photo.user.name}
                   photo = {photo.urls.thumb}
                   photoBig = {photo.urls.full}
                   date = {photo.updated_at}
                   id = {index}
                   showPhoto = {props.showPhoto}/>   
    });

    photos.map((photo,index) =>{
        if(index == props.currentPhoto){
            photoBig = photo.props.photoBig;
            return photoBig;
        }
    });

    return(
        <div className={classes.page}>
            <div className={classes.photosList}>
                {photos}
            </div>
            <div className={classes.bigPhoto}>
                <img src={photoBig}/>
            </div>
        </div>
        
    );
}

export default Photos;