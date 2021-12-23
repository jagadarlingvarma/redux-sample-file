const {createStore, combineReducers,applyMiddleware}= require("redux")
const thunk = require("redux-thunk");
const axios = require("axios"):
const FETCH_USERS_REQUEST="FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS";
const FETCH_USERS_FAIL="FETCH_USERS_FAIL";

const initialMobile={
    users:[],
    error:"",
    isLoading:false
}

const fetchUserRequest=()=>{
    return {
        type:"FETCH_USERS_REQUEST"
    }
}
const fetchUserSuccess=(users)=>{
    return {
        type:"FETCH_USERS_SUCCESS",
        data:users
    }
}
const fetchUserFail=(error)=>{
    return {
        type:"FETCH_USERS_FAIL",
        data:error
    }
}

const usersReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {...state,isLoading:true}
        case FETCH_USERS_SUCCESS:
            return{isLoading:false,users:action.data,error:""}
        case FETCH_USERS_FAIL:
            return{isLoading:false,user:[],error:action.data}
        default:
            return state;
    }
}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get
    }
}