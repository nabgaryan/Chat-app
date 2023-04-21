import { auth } from "../App";

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="Icon" />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
