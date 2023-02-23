import React from "react";
import { useQuery, gql } from "@apollo/client";

const Users = () => {
  const { loading, error, data } = useQuery(gql`
    query {
      users {
        name
        id
        username
        email
        address {
          street
          city
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div className="users-container">
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Name</th>
            <th>City</th>
            <th>Street</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map(({ id, name, address, email, username }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{username}</td>
              <td>{address.city}</td>
              <td>{address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
