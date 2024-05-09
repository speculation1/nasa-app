const SideBar = (props) => {
  const { handleToggleModal, data } = props;

  const handleOverlayClick = (e) => {
    e.stopPropagation(); // Stop event propagation to prevent it from reaching the parent elements
    handleToggleModal();
  };

  return (
    <div className="sidebar">
      <div onClick={handleOverlayClick} className="bgOverLay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
