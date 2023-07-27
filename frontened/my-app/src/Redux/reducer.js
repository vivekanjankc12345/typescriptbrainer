import * as types from "./actionTypes"
const init={
    register:[],
    isLoading:false,
    isError:false,
    login:[],
    data:[],
};
const reducer=(state=init,action)=>{
    const {type,payload}=action;
    switch(type)
    {
        case types.POST_REQUEST_API:
            return{
                ...state,
                isLoading:true,
            }
            case types.POST_SUCESS_API:
                return{
                    ...state,
                    isLoading:false,
                    register:payload,
                }
                case types.POST_ERROR_API:
                    return{
                        ...state,
                        isError:true,
                        register:payload
                    }
                    case types.POST_REQUEST_LOGIN:
            return{
                ...state,
                isLoading:true,
            }
            case types.POST_SUCESS_LOGIN:
                return{
                    ...state,
                    isLoading:false,
                    login:payload,
                }
                case types.POST_ERROR_LOGIN:
                    return{
                        ...state,
                        isError:true,
                        login:payload
                    }
                    case types.GET_REQUEST_API:
                        return{
                            ...state,
                            isLoading:true,
                        }
                        case types.GET_SUCESS_API:
                            return{
                                ...state,
                                isLoading:false,
                                data:payload,
                            }
                            case types.GET_ERROR_API:
                                return{
                                    ...state,
                                    isError:true,
                                    data:payload
                                }
                                case types.SORT_REQUEST_API:
                                    return{
                                        ...state,
                                        isLoading:true,
                                    }
                                    case types.SORT_SUCESS_API:
                                        return{
                                            ...state,
                                            isLoading:false,
                                            data:payload,
                                        }
                                        case types.SORT_ERROR_API:
                                            return{
                                                ...state,
                                                isError:true,
                                                data:payload
                                            }
                                            case types.SEARCH_REQUEST_API:
                                    return{
                                        ...state,
                                        isLoading:true,
                                    }
                                    case types.SEARCH_SUCESS_API:
                                        return{
                                            ...state,
                                            isLoading:false,
                                            data:payload,
                                        }
                                        case types.SEARCH_ERROR_API:
                                            return{
                                                ...state,
                                                isError:true,
                                                data:payload
                                            }
                                            case types.ADD_REQUEST_API:
                                                return{
                                                    ...state,
                                                    isLoading:true,
                                                }
                                                case types.ADD_SUCESS_API:
                                                    return{
                                                        ...state,
                                                        isLoading:false,
                                                        data:payload,
                                                    }
                                                    case types.ADD_ERROR_API:
                                                        return{
                                                            ...state,
                                                            isError:true,
                                                            data:payload
                                                        }
                    default:return state;
    }
};
export {reducer}