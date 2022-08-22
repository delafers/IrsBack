import React, { useEffect, useState } from 'react';
import s from "./Grid.module.css"
import { tabletApi } from '../../../api/api';

const Grid = ({tablet, setData}) => {
    let [isAdd, setAdd] = useState(false)
    const [head, changeHead] = useState("")
    const [name, changeName] = useState("")
    const [volume, changeVolume] = useState("")
    const [batch, changeBatch] = useState("")
    const [date, changeDate] = useState("")
    const [entity, changeEntity] = useState("")
    const [expiration, changeExpiration] = useState("")
    useEffect(() => {

    },[tablet])
    return (
        <div className={s.table}>
            <div>
                <div className={s.grid}>
                <div className={s.cell}>
                    <h4>
                        Head
                    </h4>
                </div>
                <div className={s.cell}>
                    <h4>
                        Name
                    </h4>
                </div><div className={s.cell}>
                    <h4>
                        Volume one portion
                    </h4>
                </div><div className={s.cell}>
                    <h4>
                        Batch
                    </h4>
                </div><div className={s.cell}>
                    <h4>
                        Date of delivery
                    </h4>
                </div><div className={s.cell}>
                    <h4>
                        Number of portions
                    </h4>
                </div><div className={s.cell}>
                    <h4>
                        Expiration date
                    </h4>
                </div>
            </div>
            {tablet.map((el, id) => <div className={s.grid}>
                <textarea onChange={(e) => {
                    changeHead(e.target.value)
                }}>
                    {el.head}
                </textarea>
                <textarea onChange={(e) => {
                    changeName(e.target.value)
                }}>
                    {el.name}
                </textarea>
                <textarea onChange={(e) => {
                    changeVolume(e.target.value)
                }}>
                    {el.volume}
                </textarea>
                <textarea onChange={(e) => {
                    changeBatch(e.target.value)
                }}>
                    {el.batch}
                </textarea>
                <textarea onChange={(e) => {
                    changeDate(e.target.value)
                }}>
                    {el.date}
                </textarea>
                <textarea onChange={(e) => {
                    changeEntity(e.target.value)
                }}>
                    {el.entity}
                </textarea>
                <textarea onChange={(e) => {
                    changeExpiration(e.target.value)
                }}>
                    {el.expiration}
                </textarea>
            </div>)}
            </div>
            <div className={s.add} onClick={() => {
                let aa = tablet
                aa.push({head: " ", name:" ", volume: 0, batch: 0, date:"1:1:2010", entity: 0, expiration: ""})
                setData(aa)
                    setAdd(true)
            }}>
                + 
            </div>
            {isAdd ? <button onClick={() => {
                debugger
                tabletApi.updateTable(head, name, volume, batch, date, entity, expiration)
            }}>save changes</button>: <></>}
        </div>
    );
};

export default Grid;
