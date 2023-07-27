
import * as types from "./actionTypes"
import axios from "axios"
function postrequestapi()
{
    return{
        type:types.POST_REQUEST_API,
    }
}
function postsucessapi(payload)
{
    return{
        type:types.POST_SUCESS_API,
        payload
    }
}
function posterrorapi(payload)
{
    return{
        type:types.POST_ERROR_API,
        payload
    }
}
function postregister(data)
{
    return  function (dispatch){
        dispatch(postrequestapi())
        return  axios
        .post("https://dark-puce-chipmunk-hat.cyclic.app/user/register",data)
        .then((res)=>{
            console.log(res.data.message)
            dispatch(postsucessapi(res.data.message))
           alert(`${res.data.message}`)
          
        })
        .catch((err)=>{
            console.log(err.response.data.data)
            dispatch(posterrorapi(err.response.data.data))
            alert(`${err.response.data.data}`)
            
        })
    }
}
function postrequestlogin()
{
    return{
        type:types.POST_REQUEST_LOGIN,
    }
}
function postsucesslogin(payload)
{
    return{
        type:types.POST_SUCESS_LOGIN,
        payload
    }
}
function posterrorlogin(payload)
{
    return{
        type:types.POST_ERROR_LOGIN,
        payload
    }
}
function postlogin(data)
{
    return function (dispatch){
        dispatch(postrequestlogin())
        return axios
        .post("https://dark-puce-chipmunk-hat.cyclic.app/user/login",data)
        .then((res)=>{

            console.log(res.data.data.postlogin)
            localStorage.setItem("token",res.data.data.token)
            dispatch(postsucesslogin(res.data.data.postlogin))
           alert(`${res.data.message}`)
          
        })
        .catch((err)=>{
            console.log(err.response.data.data)
            dispatch(posterrorlogin(err.response.data.data))
            alert(`${err.response.data.data}`)
            
        })
    }
}
function getrequestapi()
{
    return{
        type:types.GET_REQUEST_API,
    }
}
function getsucessapi(payload)
{
    return{
        type:types.GET_SUCESS_API,
        payload
    }
}
function geterrorapi(payload)
{
    return{
        type:types.GET_ERROR_API,
        payload
    }
}
function getdata(page)
{
    return function (dispatch){
        dispatch(getrequestapi())
        return axios
        .get(`https://dark-puce-chipmunk-hat.cyclic.app/?page=${page}&limit=5`)
        .then((res)=>{
            console.log(res.data.data)
            dispatch(getsucessapi(res.data.data))
          
          
        })
        .catch((err)=>{
            console.log(err.response.data.data)
            dispatch(geterrorapi(err.response.data.data))
          
            
        })
    }
}
function sortrequestapi()
{
    return{
        type:types.SORT_REQUEST_API,
    }
}
function sortsucessapi(payload)
{
    return{
        type:types.SORT_SUCESS_API,
        payload
    }
}
function sorterrorapi(payload)
{
    return{
        type:types.SORT_ERROR_API,
        payload
    }
}
function sortdata(sort)
{
    return function (dispatch){
        dispatch(sortrequestapi())
        return axios
        .get(`https://dark-puce-chipmunk-hat.cyclic.app/?sortBy=price&sortOrder=${sort}`)
        .then((res)=>{
            console.log(res.data.data)
            dispatch(sortsucessapi(res.data.data))
          
          
        })
        .catch((err)=>{
            console.log(err.response.data.data)
            dispatch(sorterrorapi(err.response.data.data))
          
            
        })
    }
}
function searchrequestapi()
{
    return{
        type:types.SEARCH_REQUEST_API,
    }
}
function searchsucessapi(payload)
{
    return{
        type:types.SEARCH_SUCESS_API,
        payload
    }
}
function searcherrorapi(payload)
{
    return{
        type:types.SEARCH_ERROR_API,
        payload
    }
}
function searchdata(search)
{
    return function (dispatch){
        dispatch(searchrequestapi())
        return axios
        .get(`https://dark-puce-chipmunk-hat.cyclic.app/?name=${search}`)
        .then((res)=>{
            console.log(res.data.data)
            dispatch(searchsucessapi(res.data.data))
          
          
        })
        .catch((err)=>{
            console.log(err.response.data.data)
            dispatch(searcherrorapi(err.response.data.data))
          
            
        })
    }
}
function addrequestapi()
{
    return{
        type:types.ADD_REQUEST_API,
    }
}
function addsucessapi(payload)
{
    return{
        type:types.ADD_SUCESS_API,
        payload
    }
}
function adderrorapi(payload)
{
    return{
        type:types.ADD_ERROR_API,
        payload
    }
}
function adddata(data)
{
    return function (dispatch){
        dispatch(addrequestapi())
        console.log(data)
        return axios
        .post("https://dark-puce-chipmunk-hat.cyclic.app/shop/",data,{
      headers: {
     Authorization : localStorage.getItem("token")
      }
    
       })
        .then((res)=>{
            console.log(res)
            dispatch(addsucessapi(res.data.message))
        //    alert(`${res.data.message}`)
        
        })
        .catch((err)=>{
            
            console.log(err)
            dispatch(adderrorapi(err.response.data.data))
            alert(`${err.response.data.message}`)
            
        })
    }
}
export {postregister,postlogin,getdata,sortdata,searchdata,adddata}