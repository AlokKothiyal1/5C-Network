import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from './Followers.module.css'
import { useHistory } from 'react-router-dom';

function Followers(props){
    const query = props.location.state.query
    const [followerData,setFollowerData] = useState([])
    const history = useHistory()
    const getRepo =(username)=>{
        history.push({pathname:'/',state:{username:username}})
    }

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${query}/followers`)
        .then(res=>setFollowerData(res.data))
    },[query])


    return(
        <div className={Styles.main}>
            <h1>Followers</h1>
            {
                followerData.length!==0 && followerData.map((item,i)=>(
                    <div className={Styles.followerContainer} key={i}>
                        <img src={item.avatar_url} alt="profile img"></img>
                        <div>
                            <h2>{item.login}</h2>
                            <button onClick={()=>getRepo(item.login)}>Get Repo</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Followers