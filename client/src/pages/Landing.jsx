import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import "./landing.css";
import SignUpModal from '../components/SignUpModal';


export default function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
 const [modalShow, setModalShow] = useState(false);

  console.log(formData);
  
  const onChangeLoginForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   const onSubmitLoginForm = async (e) => {
     e.preventDefault();
     try {
       dispatch(signInStart());
       const res = await fetch("/api/auth/sign-in", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
       });
       const data = await res.json();
       console.log(data);
       if (data.success === false) {
         dispatch(signInFailure(data.message));
         return;
       }
       dispatch(signInSuccess(data));
       setTimeout(() => {
         navigate("/");
       }, 1000);
     } catch (error) {
       dispatch(signInFailure(error.message));
     }
   };

  return (
    <main>
      <section className="login-section">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 ">
            <div className="login-container pt-5">
              <form onSubmit={onSubmitLoginForm}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={onChangeLoginForm}
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={onChangeLoginForm}
                />
                <button disabled={loading} type="submit">
                  {loading ? "Loading..." : "Log In"}
                </button>
                <div className="login-options">
                  <a onClick={() => setModalShow(true)}>Sign Up</a>
                  <a href="#">Forgot Password?</a>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </form>
              <div className="social-login">
                <span>OR</span>
                <div className="social-icons">
                  <a href="#" className="facebook">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="google">
                    <i className="fa-brands fa-google"></i>
                  </a>
                  <a href="#" className="apple">
                    <i className="fa-brands fa-apple fa-lg "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="branding">
              <img
                className="img-fluid"
                src="https://i.postimg.cc/brjtN4sL/ce2c9c3eb6cd3e3b9f499eb5a26a5583.png"
                alt="CastME Camera"
              />
              <p>CastME</p>
            </div>
          </div>
        </div>
        <SignUpModal show={modalShow} handleClose={()=>setModalShow(false)} />
      </section>
    </main>
  );
}
