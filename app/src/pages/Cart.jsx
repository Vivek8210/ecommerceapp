import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import classes from "./Cart.module.css";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const totalPrice = cart
    .map((item) => +String(item.price).split(".")[0])
    .reduce((acc, num) => acc + num, 0);

  return (
    <div className={classes.home}>
      <div className={classes.productcontainer}>
        {cart.length > 0 ? (
          <ListGroup>
            {cart.map((item) => (
              <span className={classes.cartitem} key={item.id}>
                <img
                  src={item.image}
                  className={classes.cartitemimg}
                  alt={item.title}
                />
                <div className={classes.cartitemdetail}>
                  <span>{item.title}</span>
                </div>
                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE",
                      payload: item,
                    })
                  }
                >
                  REMOVE
                </Button>
              </span>
            ))}
          </ListGroup>
        ) : (
          <span>
            Cart is Empty <br />
            <Link to="/">Shop Now!!!</Link>
          </span>
        )}
      </div>
      <div className={classes.prices}>
        <div className={classes.final}>
          <span>{`Total Price: ₹${totalPrice}`}</span>
          <Button
            onClick={() => {
              dispatch({ type: "CLEAR_CART" });
              alert("Thank you for shopping with us!");
            }}
          >
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
