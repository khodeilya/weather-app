import Spinner from "../../Images/spinner.gif";

const Loading = () => {
  return (
    <img
      src={Spinner}
      style={{
        width: "150px",
        marginTop: "100px",
        marginLeft: "auto",
      }}
      alt="Loading"
    />
  );
};

export default Loading;
