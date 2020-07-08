import React from 'react';

import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friendfolder from "./Components/Friendfolder/Friendfolder";
import {addPost,updateNewPostText} from "./Redux/store";


const App = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">

                <Route path="/dialogs" render={() => <Dialogs store={props.store} />}/>
                <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
            <Friendfolder state={props.state.sideBar}/>
        </div>

    );
};

export default App;




