import React from 'react';
import '../css/sidebar.css';


function RightSidebar() {
    return (
        <div className="sidebar-dashboard">
            <div className="dashboard-item">
                Total KIs: <br />
                <h1>6</h1>
            </div>
            <div className="dashboard-item">
                Unresolved KIs: <br />
                <h1>3</h1>
            </div>
            <div className="dashboard-item">
                Open KIs older than 7 days:
                <h1>2</h1>
            </div>
        </div>
    )
}

export default RightSidebar
