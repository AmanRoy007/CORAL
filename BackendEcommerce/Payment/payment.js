import express from "express";
import Stripe from "stripe";
const paymentGateway = express.Router();
const stripeGateway = new Stripe(process.env.STRIPEKEY);


paymentGateway.get("/checkout", async (req, res) => {
  const session = await stripeGateway.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "INR",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5000/Template/success",
    cancel_url: "http://localhost:5000/Template/cancel",
  });

  res.status(200).send({url:session.url});
});

export default paymentGateway;
