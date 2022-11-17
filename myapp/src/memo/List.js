import React from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'user1@gmail.com', name: 'jonggi'},
        {email: 'usser13@gmail.com', name: 'dd'},
        {email: 'ss@gmail.com', name: 'ss'},
        {email: 'zz@gmail.com', name: 'zz'},
        {email: 'zzasd@gmail.com', name: 'zzasd'}
    ]

    return (
        <table>
            <thead>
            <tr>
                <th>이름</th>
                <th>이메일</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;