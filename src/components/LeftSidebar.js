import React from 'react';
import '../css/sidebar.css';

function LeftSidebar() {
    return (
        <div className="sidebar">
            <section className="sidebar-item">
                Create New KI
            </section>
            <section className="sidebar-item">
                Internal KIs
            </section>
            <section className="sidebar-item">
                Public KIs
            </section>
            <section className="sidebar-item">
                All KIs
            </section>
        </div>
    )
}

export default LeftSidebar
