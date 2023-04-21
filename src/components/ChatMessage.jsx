import { auth } from "../App";

const ChatMessage = (props) => {
  const { text, uid, photoURL, displayName } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  let name;
  if (displayName) {
    const myArray = displayName.split(" ");
    name = myArray[0];
  }
  return (
    <div className={`message ${messageClass}`}>
      <div className="userName">{name}</div>
      <img src={photoURL} alt="Icon" />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
