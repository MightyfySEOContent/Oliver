import { useState } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from './Postlist.module.css';
export default function Postlist() {
    const [enteredBody, setEnteredBody] = useState('');
    function bodyChangeHAndler(event){
        setEnteredBody(event.target.value);
    }
    return (
        <>
            <NewPost onBodyChange={bodyChangeHAndler} />
            <ul className={classes.postList}>
                <Post author="Oliver" body={enteredBody} />
                <Post author="Jasmin" body={enteredBody} />
            </ul>
        </>
    )
}
