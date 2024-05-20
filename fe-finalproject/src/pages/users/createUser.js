// RegistrationForm.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CreateUserForm = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData) {
        const response = await axios.post("http://localhost:3000/api/addUser", {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });
        console.log(response.data);
        setErr("success");
        let answer = window.confirm("User has been adeed! \nAdd New User?");
        if (answer === true) {
          window.location.reload();
        } else {
          navigate("/home");
        }
      } else {
        alert("Data can't be empty!");
      }
    } catch (error) {
      console.error("There was an error adding the item!", error);
      if (error.response && error.response.data) {
        setErr(error.response.data.message);
      } else {
        setErr("An error occurred");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Create User</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-control"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a role</option>
                    <option value="superadmin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {err === "success" ? (
                  <div className="alert alert-success">User has been added</div>
                ) : err === "" ? (
                  <></>
                ) : (
                  <div className="alert alert-danger">{err}</div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginRight: 15 }}
                >
                  Register
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate("/home")}
                >
                  Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
