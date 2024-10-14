import stripe

stripe.api_key = "YOUR_STRIPE_API_KEY"

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