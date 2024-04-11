import { useState } from "react"
import getConfigToken from "../services/getConfigToken";
import axios from "axios";

const useCrud = () => {
    const [response, setResponse] = useState();

    // get
    const getApi = (url) =>{

        axios.get(url, getConfigToken())
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    // create

    const createApi = (url, data) =>{
        axios.post(url, data, getConfigToken())
        .then(res => {
            console.log(res.data)
            setResponse(response ? [...response, res.data] : [res.data]);
            
        })
        .catch(err => console.log(err))
    }

    // delete

    const deleteApi = (url, id) =>{
        axios.delete(url, getConfigToken())
        .then(res => setResponse(response.filter(e => e.id !== id)))
        .catch(err => console.log(err))
    }

    // update 

    const updateApi = (url, id) =>{
        axios.put(url, data, getConfigToken())
        .then(res => setResponse(response.map(e => e.id === id ? res.data : e)))
        .catch(err => console.log(err))
    }

    return [ response, getApi, createApi, deleteApi, updateApi ]
}

export default useCrud