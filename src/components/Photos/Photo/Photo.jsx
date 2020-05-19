import React from 'react';
import classes from './Photo.module.css';

const Photo = (props) =>{
    return(
        <div className={classes.photo} onClick={() => props.showPhoto(props.id)}>
            <img src={props.photo}/>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.date}>{props.date}</p>
        </div>
    )
}

export default Photo;