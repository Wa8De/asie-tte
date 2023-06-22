import React, { useContext } from "react";
import { Carousel, Container } from "react-bootstrap";
import CartCard from "./CartCard";
import { CartContext } from "./CartContext";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../styles/Accueil.css";
import logofooter from "../pictures/logo-footer.png";
const Cart = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate the total price
  const total = cartItems.reduce((accumulator, item) => {
    // Get the selected size price based on the index
    const selectedSizeIndex = item.selectedSizeIndex || 0;
    const selectedSizePrice = item.pricing[selectedSizeIndex] || 0;
    return accumulator + selectedSizePrice * item.quantity;
  }, 0);
  
const handlePrintReceipt = () => {
  const doc = new jsPDF();

  // Set up the table columns and rows
  const columns = ["Produit", "Prix", "Quantité"];
  const rows = cartItems.map((item) => [
    item.title,
    item.pricing[item.selectedSizeIndex],
    item.quantity,
  ]);

  // Calculate the required dimensions for the logo
  const logoWidth = 60;
  const logoHeight = 40;
  const tableY = 80; // Adjust the vertical position of the table
  const tableSpacing = 30;

  // Add the logo image
  const logoX = (doc.internal.pageSize.getWidth() - logoWidth) / 2; // Center the logo horizontally
  const logoY = tableY - logoHeight - tableSpacing; // Position the logo above the table
  doc.addImage(logofooter, "PNG", logoX, logoY, logoWidth, logoHeight);

  // Add the table to the PDF document
  doc.autoTable({ columns, body: rows, startY: tableY });

  // Add the total at the bottom
  doc.text(`Total: ${total} dh`, 85, doc.previousAutoTable.finalY + 10);

  // Save and print the PDF
  doc.save("receipt.pdf");
  doc.autoPrint();
};


  return (
    <div className="carousel1">
      {/* <h3 style={{ textAlign: "center" }}>Cart</h3> */} <br />
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div className="">
          <Container>
            <h2 style={{ textAlign: "center" }}>Votre Commande : </h2>
            <br />
            <div className="card-container">
              <Carousel variant="dark" indicators={false} slide={true}>
                {cartItems.map((item, i) => {
                  return (
                    <Carousel.Item key={i}>
                      <CartCard
                        photo={item.photo}
                        title={item.title}
                        pricing={item.pricing}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              <p className="total">Total = {total} dh</p>
            </div>
          </Container>{" "}
          <br />
          <div className="print">
            <button className="animatedBtn" onClick={handlePrintReceipt}>
              Imprimer le Reçu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
