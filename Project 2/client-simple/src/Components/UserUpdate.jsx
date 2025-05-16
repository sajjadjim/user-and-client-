import React from 'react';
import { useLoaderData } from 'react-router';

const UserUpdate = () => {
    const user =  useLoaderData()
    console.log(user)
    const handleUpdateUser = (e) =>{
        e.preventDefault()
        const name = e.target.name.value 
        const email = e.target.email.value
        const updateUser = {name , email}
        console.log(updateUser)

        // update the user value here 
        fetch(`http://localhost:3000/users/${user._id}`,{
            method:"PUT",
            headers:{
                'Content-Type' :"application/json"
            },
            body:JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log("AFter update the value ", data)
        })
    }
    return (
        <div>
            <h2>Update The User {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id=""  defaultValue={user.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={user.email}/>
                <br />
                <button type="submit" >Update</button>
            </form>
        </div>
    );
};

export default UserUpdate;