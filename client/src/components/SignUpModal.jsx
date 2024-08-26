import React, { useState } from 'react'
 import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
export default function SignUpModal({ show, handleClose, onClick }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onChangeSignupForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitSignupForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      setTimeout(() => {
        navigate("/");
      }, 2000);
      handleClose()
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 ">
              <div className="login-container pt-1">
                <form onSubmit={onSubmitSignupForm}>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    required
                    name="username"
                    value={formData.username}
                    onChange={onChangeSignupForm}
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={onChangeSignupForm}
                  />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={onChangeSignupForm}
                  />
                  <button disabled={loading} type="submit">
                    {loading ? "Loading..." : "Sign Up"}
                  </button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
