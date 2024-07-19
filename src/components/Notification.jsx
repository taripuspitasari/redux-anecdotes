import {useSelector} from "react-redux";

const Notification = () => {
  // old way
  // const notification = useSelector(state => state.notification);
  const notification = useSelector(({notification}) => notification);

  const style = {
    border: "solid",
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    display: notification ? "block" : "none",
  };
  return <div style={style}>{notification}</div>;
};

export default Notification;
