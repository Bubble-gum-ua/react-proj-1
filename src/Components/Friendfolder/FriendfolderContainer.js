import React from "react";
import {connect} from "react-redux";
import Friendfolder from "./Friendfolder";

let mapStateToProps = (state)=> {
    debugger;
    return{
        friendWrapper: state.sideBar.friendWrapper
    }
}
let mapDispatchToProps = (dispatch)=> {

    return{}
}

const FriendsFolderContainer = connect(mapStateToProps, mapDispatchToProps) (Friendfolder);

export default FriendsFolderContainer;