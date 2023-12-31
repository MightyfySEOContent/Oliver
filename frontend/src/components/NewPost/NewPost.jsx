import { useState } from 'react';
import classes from './NewPost.module.css';
function NewPost(props) {

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange} />
            </p>
            <p> {enteredBody} </p>
            <p>
                <label htmlFor="name">Dein Name</label>
                <input type="text" id="name" required />
            </p>
        </form>
    );
}

export default NewPost;