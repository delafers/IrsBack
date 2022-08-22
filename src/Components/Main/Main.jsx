import React, { useEffect, useState } from 'react';
import { tabletApi } from '../../api/api';
import Grid from "./Grid/Grid";

const Main = ({isAuth, setAuth}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        tabletApi.getTable().then(res => {

            setData(res.data)
        })
    },[])    
        return (
            <div>
                <Grid tablet={data} setData={setData}/>
            </div>
        );
    

};

export default Main;
