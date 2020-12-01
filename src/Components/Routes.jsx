import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Search from './Search/search'
import RepoDetails from './Repo_details/RepoDetails'
import Followers from './followers/Followers'

function Routes (){
        
    
    return (
        <Switch>
            <Route path="/" exact render ={(props)=><Search{...props}/>}>
            </Route>

            <Route path="/repoDetails" render ={(props)=><RepoDetails {...props}/>}>  
            </Route>
            
            <Route path="/followers" render ={(props)=><Followers {...props}/>}>  
            </Route>
        </Switch>

    )
}

export default Routes;