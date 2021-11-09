import React, { useEffect, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";

const About = () => {
  const history = useNavigate();
  
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      history("/login");
    }
  };
  useEffect(()=>{
    callAboutPage();
},[]);

  return (
    <div className="container emp-profile my-5">
      <form method="GET">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img"></div>
          </div>

          <div className="col-md-6">
            <div className="profile-head">
              <h5> welcome {userData.name} </h5>

          

              <ul className="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a
                    href="#home"
                    id="home-tab"
                    data-toggle="tab"
                    role="tab"
                    className="nav-link active"
                  >
                    about
                  </a>
                </li>
               
              </ul>
            </div>
          </div>

       
          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work d-flex flex-column justify-content-center  ">
                <p>work links </p>
                <Link to="" className="btn btn-outline-info btn-sm">youtube</Link>
                <br />
                <Link to="" className="btn btn-outline-info btn-sm">instagram</Link>
                <br />
                <Link to="" className="btn btn-outline-info btn-sm">facebook</Link>
                <br />
                <Link to="" className="btn btn-outline-info btn-sm">twitter</Link>
                <br />
              </div>
            </div>

            {/* right side data toggel */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="mytabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                ></div>

                 

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>user</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>work</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.work}</p>
                  </div>
                </div>
              </div>

              {/* for profile */}
              <div
                className="tab-pane fade "
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="">exprience</label>
                  </div>

                  <div className="col-md-6">
                    <p>expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
