import PropTypes from "prop-types";

function SideBar(props) {
  const { handleToggleModel, data } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModel}></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{ data?.date}</p>
          <p>
           {data?.explanation}
          </p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
SideBar.propTypes = {
  handleToggleModel: PropTypes.func.isRequired,
  data: PropTypes.obj,
};

export default SideBar;
