import { useEffect, useState } from "react";

import UserService from '../services/UserService'

function NewUser(props) {

  const initialUserState = {
    id: props.user?.id,
    name: props.user?.name,
    email: props.user?.email,
    gender: props.user?.gender,
    phoneNumber: props.user?.phoneNumber
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
      console.log(event)
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    var data = {
      name: user?.name,
      email: user?.email,
      gender: user?.gender,
      phoneNumber: user?.phoneNumber
    };

    UserService.create(data)
      .then(response => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          gender: response.data.gender,
          phoneNumber: response.data.phoneNumber,
          
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

const updateUser=(id)=> {
  var data = {
    name: user?.name,
    email: user?.email,
    gender: user?.gender,
    phoneNumber: user?.phoneNumber
  };

  UserService.update(id, data)
    .then(response => {
      setUser({
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        gender: response.data.gender,
        phoneNumber: response.data.phoneNumber,
        
      });
      setSubmitted(true);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
}

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  return (
    <>      
     {submitted && <div class="row">
        <div class="col-sm">
        <div class="alert alert-success" role="alert">
                User is created !
            </div>
          </div>
      </div>} 

      <div class="row">
        <div class="col-md">
          <form>
              <div class="form-group">
              <label >Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                placeholder="Enter Name"
                value={user.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div class="form-group">
              <label >Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={user.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPhone">Enter PhoneNumber</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPhone"
                aria-describedby="phoneHelp"
                placeholder="Enter PhoneNumber"
                value={user.phoneNumber}
                onChange={handleInputChange}
                name="phoneNumber"
              />
            </div>
            <div class="form-group">
            <label >Gender</label>
            <br></br>
            <div class="form-check form-check-inline">
              <input
                checked={user.gender === 'male'}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={user.gender ? user.gender : "male"}
                onChange={handleInputChange}
                name="gender"
              />
              <label class="form-check-label" for="inlineRadio1">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                checked={user.gender === 'female'}
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value={user.gender ? user.gender : "female"}
                onChange={handleInputChange}
                name="gender"
              />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            </div>
           
            <button type="submit" class="btn btn-success" onClick={!props.isUpdate ? saveUser: updateUser}>
              {props.isUpdate ? 'Update' : 'Submit'} 
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewUser;
