import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/users/userSlice";
import { useEffect } from "react";

const FetchedUser = () => {
  const { users, isLoading, error } = useSelector((state) => state.user);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchUsers());
  }, [dispach, fetchUsers]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error {error.message}</div>;
  }
  return (
    <>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id.value}>
              {user.name.first} {user.name.last}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchedUser;
