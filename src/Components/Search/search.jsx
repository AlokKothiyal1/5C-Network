import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styles from '../Search/search.module.css'
import { useHistory } from 'react-router-dom'

function Search(props){

    const [query,setQuery] = useState('')
    const [data,setData] = useState([])
    const history = useHistory()

    const handleSearch =()=>{
       axios.get(`https://api.github.com/users/${query}/repos`)
       .then(res=>setData(res.data))
       .catch(err=>console.log(err))
    }
    const handleClick = (data)=>{
        history.push({pathname:'/RepoDetails',state:{data:data}})
    }

    const getFollowers =()=>{
        history.push({pathname:'/followers',state:{query:query}})
    }
    useEffect(()=>{

        if(props.location.state){
            const username = props.location.state.username
            axios.get(`https://api.github.com/users/${username}/repos`)
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
        }
    },[props.location.state])

    return (
        <>
        <div className={Styles.searchContainer}>
            <h1>Github Repository Search</h1>
            <input type="text" value ={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Enter username"></input>
            <button onClick={handleSearch}>Search</button>
        </div>

        <div>
            {data.length!==0 && (
                <div className={Styles.userDetails}>
                       <img src={data[0].owner.avatar_url} alt="profileimg"></img>
                       <div>
                            <h2>{data[0].owner.login}</h2>
                            <button onClick={getFollowers}>Followers</button>
                       </div>
                </div>
            ) }
        </div>

        <div className={Styles.repoList} >
            {
                data.length!==0 && data.map((item,i)=>(
                    <div className={Styles.repoContainer} key={i} onClick={()=>handleClick(item)}>
                        <h2>{item.name}</h2>
                        <h4>{item.language}</h4>
                        <p>{item.description}</p>
                    </div>

                ))
            }
        </div>
        </>
    )



}
export default Search;