import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import Cookies from "js-cookie";

import Navbar from "../components/Navbar";
import AuthLayout from "../layout/AuthLayout";

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = Cookies.get("access");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://127.0.0.1:8000/account/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthLayout>
      <div>
        <Navbar />
        <div>
          <h2>User Details</h2>
          {loading && <Spinner />}
          {error && <Message variant="danger">{error}</Message>}
          {user && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                </tr>
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default User;
