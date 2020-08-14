import React, { useState, useEffect } from 'react';
import API from '../../API/API';
import "./style.css"
import Nav from '../Navbar';


const Table = () => {
    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        API.getUsers().then(results => {
            setUsers(results.data.results)
            setSearchedUsers(results.data.results)
        })
    }, [setSort]);

    const search = (e) => {
        const filter = e.target.value;
        console.log(filter);
        const SearchedUserList = users.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        console.log(SearchedUserList);
        setSearchedUsers(SearchedUserList);
    }

    return (
        <div>

            <Nav search={search} />

            <div className="row">
                {searchedUsers.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <div className="col-lg-3">
                            <div className="card">
                                <tr key={login.uuid}>

                                    <img className="img" alt={name} src={picture.thumbnail} />

                                    <div className="card-text">
                                        <strong>Name:</strong> {name.first} {name.last}<br />
                                        <strong>Email:</strong> {email}<br />
                                        <strong>Phone:</strong> {phone}<br />
                                        <strong>Age:</strong> {dob.age}

                                    </div>
                                </tr>
                            </div>
                        </div>
                    );
                })};
        </div>

        </div >

    );
}



export default Table;