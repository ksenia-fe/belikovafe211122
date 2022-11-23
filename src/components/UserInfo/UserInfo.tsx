import { User } from "../../data/types";
import "./UserInfo.css";

interface Props {
  user: User,
  setFullView: (value: string | number) => void,
  index: number,
}

const UserInfo = ({ user, setFullView, index }: Props) => {
  const { name, nickname} = user;
  return (
    <div className="user">
      <div className="user_info">
        <img
          className="user_photo"
          alt="user"
          src={`/images/${index + 1}.jpg`}
        ></img>
        <div className="user_name">
          <div>{name}</div>
          <div className="nickname">{nickname}</div>
        </div>
      </div>
      <button className="user_viewButton" onClick={() => setFullView(index)}>View</button>
    </div>
  );
};

export default UserInfo;
