import React, { Component } from "react";
import image1 from "./pic1.jpg";
import image2 from "./pic2.png";
import image3 from "./pic3.jpg";
import cart from "./cart.jpg";
import "./Shopping.css";

import Newshopping from "./Newshopping";

import Addto from "./Addto";

class ShoppingCart extends Component {
  state = {
    count: 0,
    showModal: false,
    disabledButtons: [],
    newcart: [],
    showcomp:false,

    Shoppinglist: [
      {
        id: 1,
        img: image1,
        name: "Paper plate car handmade  with water colours",
        price: "10",
        Quantity: 0,
        inCart: false,
      },
      {
        id: 2,
        img: image2,
        name: "News paper tree painted with water colours",
        price: "5",
        Quantity: 0,
        inCart: false,
      },

      {
        id: 3,
        img:image3,
        name: "Paper plate watermelon handmade with water colours",
        price: "6",
        Quantity: 0,
        inCart: false,
      },



    ],
  };

  AddToCart(id,index) {
    console.log("inside addto");


    this.setState({ showcomp: true });
    console.log(this.state.showcomp);
    this.setState({ count: this.state.count + 1 });
    const list = this.state.Shoppinglist.find((item) => item.id === id);
    console.log(list.inCart);
    list.inCart=true;
    const newnewlistcart = this.state.newcart.push(list);
    
    
  }

  formatCount = () => {
    console.log("inside format"); 
    this.setState({ count: this.state.count - 1 });
  };

  render() {

   const passcmp = (
      <Newshopping
        myarray={this.state.newcart}
        formatcount={this.formatCount}
      />
    );

    const listitems = this.state.Shoppinglist.map((row, index) => {
      return (
        <div key={row.id}>
          <ul className="items">
            <li>
              <img src={row.img} />
            </li>
            <li>{row.name}</li>
            <li>{row.price} SGD</li>
            <li>{row.inCart}</li>

            <button className="btn btn-primary" onClick={this.AddToCart.bind(this, row.id,index)}   disabled={row.inCart}>
            {row.inCart ?"Already In Cart":"Add To Cart"}
            </button>

           
          </ul>
        </div>
      );
    });

    return (
      <div>
          <h1><b>DIY Crafts</b></h1>
        {this.state.showcomp ? passcmp : null}
      
       {this.state.count===0?<b>No items in cart</b> : <p><b>{this.state.count}</b></p>}
    
      
        <h1>{listitems}</h1>
      </div>
    );
  }
}

export default ShoppingCart;
