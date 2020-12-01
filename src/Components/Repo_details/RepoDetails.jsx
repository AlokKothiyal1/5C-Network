import React from 'react';
import Styles from './RepoDetails.module.css'

function RepoDetails(props){
    const data = props.location.state.data

    return (
        <div>
            <div className={Styles.RepoDetails}>
            <h1>{data.name}</h1>
            <h3>{data.description}</h3>
            <div>
                <h4>Url :</h4>
                <p>{data.html_url}</p>
            </div>
            <div>
                <h4>Private :</h4>
                <p>{data.private?"True":"False"}</p>
            </div>
            <div>
                <h4>Language :</h4>
                <p>{data.language}</p>
            </div>
            <div>
                <h4>Created at :</h4>
                <p>{data.created_at}</p>
            </div>
            <div>
                <h4>Updated at :</h4>
                <p>{data.updated_at}</p>
            </div>
            <div>
                <h4>Clone URL :</h4>
                <p>{data.clone_url}</p>
            </div>

            </div>           
        </div>
    )
}
export default RepoDetails;