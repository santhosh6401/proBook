import React from "react";
import "./../assets/style/MainPage.css";

function Profile() {
  return (
    <div>
      <div className="row Grid">
        <div className="col-md-3"></div>
        <div className="col-md-1"></div>

        {/* Create Profile */}

        <div className="col-md-3 ColumnFormProfile">
          <p className="FormTitle text-center text-warning">
            <u> Create Profile </u>
          </p>
          <br></br>
          <form className="Form text-white">
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="firstName"
                aria-describedby="firstName"
                placeholder="Enter the firstName"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="LastName"
                aria-describedby="LastName"
                placeholder="Enter the LastName"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="Department"
                aria-describedby="Department"
                placeholder="Enter the Department"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="Batch"
                aria-describedby="Batch"
                placeholder="Enter the Batch"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="MobileNo"
                aria-describedby="MobileNo"
                placeholder="Enter the Mobile No"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="EmailId"
                aria-describedby="EmailId"
                placeholder="Enter the Email Id"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="LinkedInUrl"
                aria-describedby="LinkedInUrl"
                placeholder="Enter the LinkedInUrl"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="Profile"
                aria-describedby="Profile"
                placeholder="Enter the Profile Picture Url"
              />
            </div>
            <br></br>
            <br></br>
            <input
              type="submit"
              value="Create Profile"
              className="btn text-dark text-center LoginButton"
            />
            <br></br>
            <br></br>
            <br></br>
            {/* <Link to="/main"> go </Link> */}
          </form>
        </div>
        <div className="col-md-1"></div>

        {/* Update Profile */}

        <div className="col-md-3 ColumnFormProfile text-dark">
          <p className="FormTitle text-center text-warning">
            <u> Update Profile </u>
          </p>
          <br></br>
          <form className="Form text-white">
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="firstName"
                aria-describedby="firstName"
                placeholder="Enter the firstName"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="LastName"
                aria-describedby="LastName"
                placeholder="Enter the LastName"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="Department"
                aria-describedby="Department"
                placeholder="Enter the Department"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="Batch"
                aria-describedby="Batch"
                placeholder="Enter the Batch"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="MobileNo"
                aria-describedby="MobileNo"
                placeholder="Enter the Mobile No"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="EmailId"
                aria-describedby="EmailId"
                placeholder="Enter the Email Id"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="LinkedInUrl"
                aria-describedby="LinkedInUrl"
                placeholder="Enter the LinkedInUrl"
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                id="Profile"
                aria-describedby="Profile"
                placeholder="Enter the Profile Picture Url"
              />
            </div>
            <br></br>
            <br></br>
            <input
              type="submit"
              value="Update Profile"
              className="btn text-dark text-center LoginButton"
            />
            <br></br>
            <br></br>
            <br></br>
            {/* <Link to="/main"> go </Link> */}
          </form>
        </div>
        <div className="col-md-2"></div>
        <form className="text-center">
          <input
            type="text"
            className="form-control input"
            id="EmailId"
            aria-describedby="EmailId"
            placeholder="Enter the Email Id"
            style={{ marginLeft: 700, marginTop: 100 }}
          />
          <input
            type="submit"
            value="Delete Profile"
            className="btn text-dark text-center DeleteButton"
          />
        </form>
      </div>
    </div>
  );
}

export default Profile;
