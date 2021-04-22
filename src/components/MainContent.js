import React, { useEffect, useState } from 'react';
import data from '../data.json';

const MainContent = () => {
    const [allKIs, setAllKIs] = useState('');
    const [currentKIs, setCurrentKIs] = useState(data);
    const [users, setUsers] = useState('');

    // const getAllKnownIssues = async() => {
    //     const response = await fetch('https://testapi4006.herokuapp.com/known-issues',{
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //           },
    //     });
    //     const allKnownIssues = await response;
    //     setAllKnownIssues(allKnownIssues);
    // };

    const getUsers = async() => {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        const users = data.results;
        setUsers(users);
    };

    useEffect(()=>{
        // getAllKnownIssues();
        getUsers();
    }, []);

    return (
        <div className="main-content">
            <div className="current-kis-container">
                <h2>Current KIs</h2>
                <section>
                    {/* {currentKIs.map((ki)=> {
                        return <div key={}>

                        </div>
                    })} */}
                </section>
            </div>
        </div>
    )
};

export default MainContent
