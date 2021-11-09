import React, {useState } from "react";

const Admin = () => {
  const [alldata, setalldata] = useState([]);
  const userContact = async () => {
    try {
      const res = await fetch("/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
      setalldata(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  console.log(alldata);

  // edite
  let name, value;
  const [editedData, setEditedData] = useState({}); //present all edited data
  const edite = (id, e) => {
    name = e.target.name;
    value = e.target.value;
    setEditedData({ id: id, ...editedData, [name]: value });
  };


  const poseditedData = async (e) => {
    e.preventDefault();

    let _id, name, phone, email, work;
    for (const [key, value] of Object.entries(editedData)) {
      if (key.includes("id")) {
        _id = value ? value : undefined;
      }

      if (key.includes("name")) {
        name = value ? value : undefined;
      }
      if (key.includes("phone")) {
        phone = value ? value : undefined;
      }
      if (key.includes("email")) {
        email = value ? value : undefined;
      }
      if (key.includes("work")) {
        work = value ? value : undefined;
      }
    }

    const res = await fetch("/edite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        name,
        phone,
        email,
        work,
      }),
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("fail to edite");
    } else {
      window.alert("sucessfully edite");
    }
  };
 
  
  return (
    <div>
   
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
           
            <button className="btn btn-outline-info" onClick={userContact}>
        get info
      </button>
          </h1>
        </div>

        <button type="button" class="btn btn-primary position-relative">
          Inbox
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {alldata.length}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>name</th>
                <th>phone</th>
                <th>email</th>
                <th>work</th>
                <th>date</th>
                <th>opration</th>
              </tr>
            </thead>
            <tbody>
              {alldata.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <td >
                      <div> {curElem.name}</div>
                     
                      <input
                        type="text"
                        name={curElem._id + "name"}
                        value={editedData.name}
                        onChange={edite.bind(this, curElem._id)}
                        placeholder="edite name"
                     
                      />
                    </td>
                    <td>
                    <div> {curElem.phone}</div>  
                      <input
                        type="text"
                        name={curElem._id + "phone"}
                        value={editedData.phone}
                        onChange={edite.bind(this, curElem._id)}
                        placeholder="edite phone no "
                      />
                    </td>
                    <td>
                    
                      <div>  {curElem.email} </div>
                      <input
                        type="email"
                        name={curElem._id + "email"}
                        value={editedData.email}
                        onChange={edite.bind(this, curElem._id)}
                        placeholder="edite email"
                      />
                    </td>
                    <td>
                    <div> {curElem.work}</div>
                     
                      <input
                        type="text"
                        name={curElem._id + "work"}
                        value={editedData.work}
                        onChange={edite.bind(this, curElem._id)}
                        placeholder="edite work"
                      />
                    </td>
                    <td>{curElem.date} </td>
                    <td>
                      <button type="submit" className="btn btn-outline-warning" onClick={poseditedData}>
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
