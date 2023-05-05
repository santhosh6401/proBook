import React, { useState, useEffect } from "react";
import "./../assets/style/Allprofiles.css";

export default function Allprofiles() {
  const [profile, setProfile] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8095/profile-management/v1/profile"
    );
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setProfile(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <div className="Home">
      <div className="row">
        {profile.map((item) => {
          return (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-3 cardShadow"
              key={item.emailId}
            >
              <div className="card h-100">
                <div className="img-block">
                  <img
                    src={item.linkedInProfileUrl}
                    className="card-img-top"
                    alt={item.firstname}
                    style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
                  />
                  <br></br>
                  <img
                    src={item.latestCompanyDetails.logo_url}
                    className="card-img-top"
                    alt={" "}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50 / 2,
                      marginLeft: 150,
                      marginTop: -70,
                      border: 2,
                    }}
                  />
                </div>
                <div className="card-body  text-center">
                  <h5 className="card-title">{item.firstname}</h5>
                </div>
                <ul className="list-group list-group-flush text-center">
                  <li className="list-group-item">
                    <br></br>
                    {item.department}
                  </li>
                  <li className="list-group-item">
                    <br></br>
                    {item.batch}
                  </li>
                  <li className="list-group-item">
                    <br></br>
                    {item.latestCompanyDetails.company}
                  </li>
                </ul>
                <br></br>
                <br></br>
                <div className="card-body" style={{ borderRadius: 20 }}>
                  <div className="d-grid text-right">
                    <a className="btn btn-dark" href="{}" target="_blank">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
