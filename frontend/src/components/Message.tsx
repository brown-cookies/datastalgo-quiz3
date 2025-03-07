// Message.js
import Alert from "react-bootstrap/Alert";

const Message = ({ variant, children }) => (
  <Alert variant={variant}>{children}</Alert>
);

export default Message;
