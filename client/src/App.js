import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from "./firebass-config";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import './style.css'
import {
    getAuth,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

export const Gloabaldata = createContext("");

const App = () => {
    const [User, setuser] = useState("");
    const authListerner = () => {
        onAuthStateChanged(auth, (user) => {
            setuser(user);
            const uid = user.uid;
        });
    };

    useEffect(() => {
        authListerner();
    }, []);


    const logout = async () => {
        await signOut(auth);
    };

    return (
        <Gloabaldata.Provider value={{ Userr: User, logout: logout }}>

            <BrowserRouter>
                <div id="main-container">
                    {/* <Navbar /> */}
                    <Routes >
                        <Route path='/' element={< Home />} />
                        <Route path='auth' element={<Auth />} />
                    </ Routes >

                </div>
            </BrowserRouter>
        </Gloabaldata.Provider>

    )
};

export default App;
