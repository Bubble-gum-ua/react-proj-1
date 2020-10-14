import React from "react";
import {connect} from "react-redux";
import Friendfolder from "./Friendfolder";
import {compose} from "redux";

let mapStateToProps = (state)=> {

    return{
        friendWrapper: state.sideBar.friendWrapper
    }
}
let mapDispatchToProps = (dispatch)=> {

    return{}
}

export default compose(connect(mapStateToProps, mapDispatchToProps) )
(Friendfolder);

