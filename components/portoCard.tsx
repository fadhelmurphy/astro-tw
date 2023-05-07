const PortoCard = ({ title, desc, image, linkObj }) => {
  return (
    <>
      <a href={linkObj.link} className="porto-card">
          <div className="head">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="desc">
              <h3>{desc}</h3>
              {/* <a href={linkObj.link}>{linkObj.text}</a> */}
            </div>
          </div>
          <div className="content">
            <img
              src={image}
              loading="lazy"
            />
          </div>
      </a>
    </>
  );
};
export default PortoCard;
