import "./User.css";
import img_avatar_men from "../static/img_avatar_men.png";
import img_avatar_women from "../static/img_avatar_women.png";

import NewUser from "./NewUser.js";
import { useState, useEffect } from "react";
import UserService from "../services/UserService";

function User() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  let [isCreate, setCreateUser] = useState(false);
  let [isUpdate, setUpdateUser] = useState(false);


  useEffect(() => {
    retrieveUser();
  }, users);

  const retrieveUser = () => {
    UserService.getAll()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveUser();
  };

  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setUpdateUser(true);
  };

  const removeUser = (id) => {
    UserService.remove(id)
      .then((res) => {
        refreshList();
      })
      .catch((err) => {
        console.log("error occured while deleting");
      });
  };

  const findById = (id) => {
    UserService.get(id)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isCreate) {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md">
            <button
              type="button"
              class="btn btn-link"
              onClick={() => setCreateUser((isCreate = false))}
            >
              Go Back
            </button>
          </div>
        </div>
        <NewUser user={null}></NewUser>
      </div>
    );
  } else if (isUpdate) {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md">
            <button
              type="button"
              class="btn btn-link"
              onClick={() => setUpdateUser((isUpdate = false))}
            >
              Go Back 
            </button>
          </div>
        </div>
        <NewUser user={currentUser} isUpdate={isUpdate}></NewUser>
      </div>
    );
  } else {
    return (
      <div class="container-lg">
        <div class="Header"></div>
        <div class="row">
          <div class="col-3">
            <button
              type="button"
              onClick={() => setCreateUser((isCreate = true))}
              class="btn btn-outline-primary"
            >
              create User
            </button>
          </div>
          {users.map((item, index) => (
            <div class="col-4" key={index}>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    {item.gender === "male" ? (
                      <img src={img_avatar_men} class="Avatar" alt="" />
                    ) : (
                      <img src={img_avatar_women} class="Avatar" alt="" />
                    )}
                    <span class="inner">
                      <button
                        type="button"
                        class="btn btn-link"
                        onClick={() => removeUser(item.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        class="btn btn-link"
                        onClick={() => setActiveUser(item, index)}
                      >
                        Edit
                      </button>
                    </span>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{item.name}</h5>
                      <p class="card-text">{item.phoneNumber}</p>
                      <p class="card-text">
                        <small class="text-muted">{item.email}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default User;
