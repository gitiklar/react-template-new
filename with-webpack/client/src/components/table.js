import React from 'react';
import 'antd/dist/antd.css';

import AntdTable from './antdTable';

const Table = () => {

    return (
        <div className="innerContainer">
            <div className="calculationsContainer">
            </div>
            <div className="tableContainer">
                <AntdTable/>
            </div>   
        </div>
    );
};

export default Table;