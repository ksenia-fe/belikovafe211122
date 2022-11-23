import { User } from "../../data/types";
import "./FullInfo.css";

interface Props {
  user: User;
  setFullView: (value: string | number) => void;
  index: number | string;
}

const FullInfo = ({ user, setFullView, index }: Props) => {
  const { name, position, phone, email } = user;
  return (
    <>
      <div
        data-testid="test-2"
        className="closeBtn"
        onClick={() => setFullView("none")}
      >
        X
      </div>
      <div className="mainPart">
        <img
          className="userPhoto"
          src={`/images/${+index + 1}.jpg`}
          alt="avatar"
        ></img>
        <div className="bold">{name}</div>
        <div className="userPosition">{position}</div>
      </div>
      <div className="infoPart">
        <div>
          <span className="bold">Phone</span> {phone}
        </div>
        <div>
          <span className="bold">URL</span> {user.url || "-"}
        </div>
        <div>
          <span className="bold">Email</span> {email}
        </div>
        <button>Send message</button>
      </div>
    </>
  );
};

export default FullInfo;
