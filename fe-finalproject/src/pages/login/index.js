import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/loginAction";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    // try {
    //   const response = await axios.post("http://localhost:3000/login", {
    //     username,
    //     password,
    //   });
    //   setMessage(response.data.message);
    //   navigate("/home");
    // } catch (error) {
    //   setMessage(`Failed to login yeah user ${username} dan pass ${password}`);
    //   console.log("http://localhost:3000/login", {
    //     username,
    //     password,
    //   });
    //   console.error(error);
    // }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Welcome!</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
                {/* {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>} }
                 {userInfo && <p>Welcome, {userInfo}!</p>} */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p>{message}</p>
    </div>
  );
};

export default Login;
