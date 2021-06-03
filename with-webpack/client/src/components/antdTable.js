import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getDaysBetweenDates, updateJsonData, updateSelectedRow } from '../redux/actions';


const AntdTable = () => {
    const dispatch = useDispatch();
    const jsonData = useSelector(state => state.tableDataReducer.jsonData);    

    const data = jsonData.map((row, index)=>({...row , key:index ,totalDays: getDaysBetweenDates(row.startDate , row.endDate)}));

    useEffect(()=>{
        dispatch(updateJsonData(data));
    },[]);

    const updateSelectedRowHandler = record => dispatch(updateSelectedRow(record));

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name', },
        { title: 'Type', dataIndex: 'type', key: 'type', },
        { title: 'StartDate', dataIndex: 'startDate', key: 'startDate', },
        { title: 'EndDate', dataIndex: 'endDate', key: 'endDate', },
        { title: 'TotalDays' , dataIndex: 'totalDays', key: 'totalDays', },
        { title: 'Action', key: 'action', render: row => ( 
                                                            <Space size="middle">
                                                                <Button onClick={()=>updateSelectedRowHandler(row)}>Summary</Button>
                                                            </Space>),},];

    return (
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }}/>
    );
}

export default AntdTable;
