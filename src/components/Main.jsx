import PropTypes from "prop-types";
function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data || "bg-image"} className="bgImage" />;
    </div>
  );
}
Main.propTypes = {
  data: PropTypes.object
}
export default Main;
