import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import FriendsFolderContainer from "./Components/Friendfolder/FriendfolderContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {withSuspense} from "./HOC/WithSuspense";
import {Redirect, Switch} from "react-router";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"))

class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some Error Occured");
        //console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors );
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors );
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <LoginPage/>}/>
                        <Route path="*" render={() => <div> 404 NOT FOUND</div>}/>
                    </Switch>
                </div>
                <FriendsFolderContainer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJsApp = (props) => {
    return (<BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>)
};
export default SamuraiJsApp;


