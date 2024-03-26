import logo from "../assets/imgs/logo-teal.svg";

const Header = ({ restaurantName, description, image }) => {
  return (
    <>
      <header className="container">
        <div className=" top-bar ">
          <div className="logo">
            <div>
              <img src={logo} alt="logo-tripadvisor" />
            </div>
          </div>
        </div>

        <div className="restaurant-info container">
          <div className="text">
            <h1>{restaurantName}</h1>
            <p>{description}</p>
          </div>
          <div className="main-image">
            <img src={image} alt="presentation-picture" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
