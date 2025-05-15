import React, { use } from 'react';

const User = ({DataPromise}) => {
    const users = use(DataPromise)
    console.log(users)
const handleAddUserNew = (e) =>{
e.preventDefault();
const name = e.target.name.value
const email= e.target.email.value
const user = {name , email}
console.log(user)

// create user in a servser side 
fetch('http://localhost:3000/users',{

    method:'POST',
    headers:{
        ContentType:'application/json'
    },
    body:JSON.stringify(user)
     
})
.then(res => res.json())
.then( Data =>
{
    console.log(Data)
}
)
}

    return (
        <div>
            <h1>User Side This is</h1>

            <form onSubmit={handleAddUserNew}>
                <input name='name' type="name"  placeholder='enter name'/>
                <br />
                <input name='email' type='email'placeholder='enter email'></input>
                <br />
                 <button type='submit' value="Add User">Add user</button>
                 </form>
            {
                users.map(user => <p key={user.id}>Email :{user.email}</p>)
            }
        </div>
    );
};

export default User;