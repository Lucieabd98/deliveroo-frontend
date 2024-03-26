import "../assets/icons/style.css";

const Content = ({ categories }) => {
  return (
    <>
      <main>
        <div className="container">
          <div className="meal">
            <div>
              {categories.map((mealTypes) => {
                return (
                  <>
                    {mealTypes.meals.length > 0 && (
                      <h2 key={mealTypes.name}>{mealTypes.name}</h2>
                    )}

                    <div className="menu-columns">
                      {mealTypes.meals.map((elem) => {
                        console.log(elem.description);
                        // return <p>{elem.description}</p>;
                        return (
                          <>
                            <div className="menu">
                              <div className="menu-elem">
                                <div className="menu-text">
                                  <h3 key={elem.title}>{elem.title}</h3>
                                  <div className="description-text">
                                    <p key={elem.description}>
                                      {elem.description}
                                    </p>
                                  </div>
                                  <div className="price-popularity">
                                    <p className="price" key={elem.price}>
                                      {elem.price}€
                                    </p>
                                    {elem.popular && (
                                      <>
                                        <p className="icon-STAR_FILL"></p>
                                        <p className="popularity">Populaire</p>
                                      </>
                                    )}
                                  </div>
                                </div>
                                {elem.picture && (
                                  <div className="menu-picture">
                                    <img src={elem.picture}></img>
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>

            <div></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
