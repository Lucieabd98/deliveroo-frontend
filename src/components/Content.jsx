import { useState } from "react";
import "../assets/icons/style.css";
import Cart from "./Cart";

const Content = ({ categories }) => {
  const [cart, setCart] = useState([]);
  // const handleClick = () => {
  //   let cartCopy = [...cart];
  //   cartCopy.push(mealTypes.name);
  //   setCart(cartCopy);
  // };

  const [count, setCount] = useState([1]);
  const [prices, setPrices] = useState(0);

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
                        // console.log(elem.description);
                        // return <p>{elem.description}</p>;
                        return (
                          <>
                            <div className="menu">
                              {/* L'ELELEMNT SUR LEQUEL ON VA CLIQUER */}
                              <div
                                className="menu-elem"
                                onClick={() => {
                                  // console.log(cart);
                                  // console.log(elem);
                                  // console.log("j'ai cliqué");
                                  let cartCopy = [...cart];
                                  let countCopy = [...count];
                                  let newPrice = prices;

                                  newPrice = Number(elem.price) + newPrice;

                                  console.log(newPrice);

                                  setPrices(newPrice);

                                  for (let i = 0; i < cart.length; i++) {
                                    if (cart[i].id !== elem.id) {
                                      countCopy.push(1);
                                      setCount(countCopy);
                                    } else if (cart[i].id === elem.id) {
                                      countCopy[i] = count[i] + 1;

                                      return setCount(countCopy);
                                    }
                                  }

                                  // console.log(count);

                                  cartCopy.push(elem);
                                  setCart(cartCopy);

                                  // console.log(cart);
                                  // console.log(cartCopy);
                                }}
                              >
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
          </div>
          <div className="cart">
            <div className="choices">
              <button>Valider mon panier</button>
              {cart &&
                cart.map((elem, index) => {
                  // console.log(elem);

                  return (
                    <div key={elem.id} className="counter">
                      <button>-</button>
                      <p>{count[index]}</p>
                      <button>+</button>
                      <p>{elem.title}</p>
                      <p>{elem.price * count[index]} €</p>
                    </div>
                  );
                })}
              <div>
                <p>Sous-Total</p>
                <p>{prices}</p>
              </div>
              <div>
                <p>Frais de livraison</p>
                <p>2,5€</p>
              </div>
              <div>
                <p>Total</p>
                <p>{prices + 2.5} €</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
