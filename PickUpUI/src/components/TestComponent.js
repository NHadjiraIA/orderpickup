import React, { useEffect, useState } from "react"; 
import { getAllUsers } from "../services";
 

export const TestComponent = () => {
 
    const [users, setUsers] = useState(null);

    useEffect(() => {
        console.log("SS:: listUserss called ");
        return new Promise((resolve, reject) => {
          try {
              console.log('try  listUsers called ')
            // do db call or API endpoint axios call here and return the promise.
            getAllUsers()
            .then((res) => {
              setUsers(res);
              resolve(res);
            })
              .catch((err) => {
                console.log("getUsers > err=", err);
                setUsers([]); 
                reject("Request error!");
              });
          } catch (error) {
            console.error("signin error!==", error);
            reject("signin error!");
          }
        });
      }, []);
    return (
   
    <div>
  <div className="container">
        <div className="row"></div>
      </div>
      <div className="valign-wrapper" styles="width: 100%; position: absolute;">
        <div className="container">
          <div className="row">
            <div className="col s12 m12">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title green-text">List of users</span>
                    <div className="row">
                      <div className="col s12">
                     </div>
                    </div>
                 
                    {users &&
                      users.map((user) => {
                        return (
                          <div  >   
                            <label>
                            <input
                                type="radio" 
                                value={user.name}
                               />
                              <span>{user.name}</span>
                            </label>              
                          </div>);
                      })}
                
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
 
    );
  }
export default TestComponent;