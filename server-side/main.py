###################################################################################
# THE SERVER WILL RECEIVE THE REQUEST FROM THE FRONT-END AND PROCESS THE PAYMENT
#
# ADDING A COSTUMER IS OPTIONAL BUT IMPORTANT 
###################################################################################

from flask import Flask, request, jsonify
import stripe

app = Flask(__name__)
stripe.api_key = "YOUR_STRIPE_API_KEY"

@app.route('/api/pay', methods=['POST'])
def pay():
    payment_method_id = request.json['paymentMethod']
    payment_intent = stripe.PaymentIntent.create(
        amount=1000,
        currency="usd",
        payment_method_types=["card"],
    )
    stripe.PaymentIntent.confirm(
        payment_intent.id,
        payment_method=payment_method_id,
    )
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)

###########################################################

# Create a payment method (e.g. a card)
card = stripe.PaymentMethod.create(
    type="card",
    card={
        "number": "4242424242424242",
        "exp_month": 12,
        "exp_year": 2025,
        "cvc": "123"
    }
)

# Create a payment intent
payment_intent = stripe.PaymentIntent.create(
    amount=1000,
    currency="usd",
    payment_method_types=["card"]
)

# Confirm the payment intent
stripe.PaymentIntent.confirm(
    payment_intent.id,
    payment_method=card.id
)

# Check the payment intent status
if payment_intent.status == "succeeded":
    print("Payment was successful!")
else:
    print("Payment failed. Error:", payment_intent.last_payment_error.message)

