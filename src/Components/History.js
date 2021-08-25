import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {requesthistory} from "../Thunk"
const History = () => {
    const dispatch = useDispatch()
    const historyData=useSelector(state=>state.reducer.history)
    useEffect(() => {
       dispatch(requesthistory())
        
    },[dispatch])
    const historyFields = historyData.length > 0 ? Object.keys(historyData[0]) : [];

    return (
        <div>
            <center>
                <h1>History</h1>
                    <h1>
                {!historyData[0] ? (
                    "No History Found"):
                    (
                    <table>
                    <tbody>
                        <tr>
                        <th>_Id</th>
                        <th>name</th>
                        <th>Date</th>
                        <td>time</td>
                        <td>data</td>
                        <td>__V</td>
                        </tr>
                        {historyData.map((his) => (
                        <tr key={his.id}>
                            {historyFields.map((field) => (
                            <td key={`${his.id}-${field}`}>{his[field]}</td>
                            ))}
                            
                        </tr>
                        ))}
                    </tbody>
                    </table>
                )}
                </h1>
            </center>
        </div>
    )
}

export default History
