import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import FullInfo from "../UserInfo/FullInfo";
import UserInfo from "../UserInfo/UserInfo";

import "./UsersList.css";

const UsersList = () => {
  const { users } = useAppSelector((state) => state.userReducer);
  const [fullView, setFullView] = useState<string | number>("none");
  const [viewAll, setViewAll] = useState<boolean>(false);
  const listToDisplay =
    !viewAll ?? users.length > 3 ? users.slice(0, 3) : users;
  return (
    <div className="usersList" data-testid="test-1">
      {fullView !== "none" ? (
        <FullInfo
          index={fullView}
          user={
            users.filter(
              (user, index) => index.toString() === fullView.toString()
            )[0]
          }
          setFullView={setFullView}
        />
      ) : (
        <>
          <div className="usersList__users">
            {listToDisplay.map((user, index) => (
              <UserInfo
                key={index}
                user={user}
                setFullView={setFullView}
                index={index}
              />
            ))}
          </div>
          <button
            className="userList__button"
            onClick={() => setViewAll(!viewAll)}
          >
            {viewAll ? "Show only 3 users" : "View all"}
          </button>
        </>
      )}
    </div>
  );
};

export default UsersList;
