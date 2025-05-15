import React, { use, useState } from 'react';
import { Link } from 'react-router';
const Users = ({userDataPromise}) => {

  const InitialData= use(userDataPromise) 
  const [users , setUsers] = useState(InitialData)

    const handleAddUser = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUsers = {name ,email}
        console.log(newUsers)

        // create user in the db
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUsers)
        })
        .then(res => res.json())
        .then(data =>{
            console.log("Data after rcreating user to the DB" , data)
            if(data.insertedId){
                newUsers._id = data.insertedId;
                const newusers = [...users , newUsers]
                setUsers(newusers)
                alert('data has been added')
                e.target.reset();
            }
        })

    }


    const handleUserDelete = (id)=>{
        console.log('user has been deleted ' , id)
        fetch(`http://localhost:3000/users/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log("Id has been delete" , data)
            if(data.deletedCount){
                const remainningUsers =users.filter(user =>user._id !== id)
                setUsers(remainningUsers)
            }
        })
    }
    return (
        <div>
            <h1>User Count : {users.length}</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <button type="submit">submit</button>
            </form>

            {/* here Data show on the website  */}
            {
                users.map(userInfo => <p key={userInfo._id}>Name :{userInfo.name} <br /> Email :{userInfo.email} 
                <button style={{margin:'5px'}}><Link to={`/users/${userInfo._id}`}>Details</Link></button>
                <button  onClick={()=>handleUserDelete(userInfo._id)}>x</button></p> )
            }
        </div>
    );
};

export default Users;