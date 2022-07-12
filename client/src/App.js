import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css'
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import { getPosts } from './actions/posts';


const App = () => {
    const [currentId, setcurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (

        <div id="main-container">
            <h1 id='heading'>Memories</h1>
            <div id='app-container'>
                <Posts setcurrentId={setcurrentId} />
                <Form currentId={currentId} setcurrentId={setcurrentId} />
            </div>
        </div>

    )
};

export default App;
