import React, { Component} from "react";
import Addto from "./Addto";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Shopping.css";
class Newshopping extends Component {



state = {
    setShow: false,
    showcart: false,
    Amounttopay:0,
 

  };
  
  handleCloseModal() {
   // console.log("inside close");
  
    this.setState({ setShow: false });
  }

  handleOpenModal() {
    this.setState({ setShow: true });
  }

  handleClickIncrement(index) {
   // console.log("inside handleclikincremnet");
    const listitemcart = this.props.myarray;

     listitemcart[index].Quantity += 1;
   
    
    this.setState((state) => {
      return { myarray: listitemcart };


      
    });
  }

  handledelete(index) {
   
 const listitemcart = this.props.myarray;
console.log(listitemcart[index].inCart)
listitemcart[index].inCart=false;
    listitemcart.splice(index, 1);
  
    this.props.formatcount();
  
    this.setState((state) => {
      return { myarray: listitemcart };
    });
  }


 



  handleClickDecrement(index) {
    //console.log("inside handleclikincremnet");
    const listitemcart = this.props.myarray;
if(listitemcart[index].Quantity>0)
{
    listitemcart[index].Quantity -= 1;
}


    this.setState((state) => {
      return { myarray: listitemcart };
    });
  }





  render() {
   

   // console.log("inside render")
    const { myarray } = this.props;
  
   
    let amountToPay = 0;
    for (let i=0; i<this.props.myarray.length; i++) {
      amountToPay += this.props.myarray[i].price *  this.props.myarray[i].Quantity;
    }
 

    //console.log(myarray);

    const newmodal = myarray.map((item, index) => {
      return (
        <div key={item.id}>

          <table>
           
            <tr>
             
              <td>
                <img src={item.img} />   
              </td>
             
              <td>{item.name}</td>
              <td>{item.price} S$</td>
              <td>
                <button className="btn btn-secondary" onClick={this.handleClickIncrement.bind(this, index)}>
                <i className="fa fa-plus-circle" aria-hidden="true" />
                </button>
              </td>
              <td>{item.Quantity}</td>


              <td>
                <button  className="btn btn-info m-2" onClick={this.handleClickDecrement.bind(this, index)}>
                <i className="fa fa-minus-circle" aria-hidden="true" />
                </button>
              </td>
              <td>Amount</td>
              <td>{item.price*item.Quantity }SGD</td>
            
              <td>
               
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                ></link>
                <span style={{ fontSize: 12 }} className="btn btn-danger" onClick={this.handledelete.bind(this, index)}>
                  <i className="fa fa-trash-o"></i>
                </span>
               
               
              </td>
            </tr>
          </table>
        </div>
      );
    });

    return (
      <div> 
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>

        <span style={{ fontSize: 48 }} onClick={this.handleOpenModal.bind(this)} >
         <i className="fa fa-shopping-cart fa-lg m-2"> </i>
         
        </span>

        <Modal
        size='lg'
          show={this.state.setShow}
          onHide={this.handleCloseModal.bind(this)}
        
        >
          <ModalHeader closeButton>
            <ModalTitle>Shopping Bag</ModalTitle>
          </ModalHeader>
          <ModalBody>{newmodal}</ModalBody>
          <ModalFooter>
            <button onClick={this.handleCloseModal.bind(this)}>OK</button>
          
            <p><b>TotalAmount:{amountToPay}S$</b></p>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Newshopping;
