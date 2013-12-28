class ChargesController < ApplicationController
	def new
		@sub_total = "Sub total: £#{basket_sub_total}0"

		if current_user
			@current_address = current_user.current_address
			@address = Address.new
			render 'new'
		else
			redirect_to new_user_session_path
			flash[:error] = "Please sign in to continue"
		end
	end
  
	def create
	  # Amount in cents
	  @amount = basket_sub_total.to_i 
    Stripe.api_key = ENV["STRIPE_SECRET_KEY"]
	  customer = Stripe::Customer.create(
	    :email => 'example@stripe.com',
	    :card  => params[:stripeToken]
	  )
    # raise @amount.inspect
	  charge = Stripe::Charge.create(
	    :customer    => customer.id,
	    :amount      => @amount * 100,
	    :description => 'Rails Stripe customer',
	    :currency    => 'gbp'
	  )

	  redirect_to root_path
	  flash[:notice] = "Thanks, you paid £#{@amount}.00!"
	  email = current_user.email
	  Order.create(number_of_items: 3)
	  session[:basket_id] = Basket.create.id

		rescue Stripe::CardError => e
		  flash[:error] = e.message
		  redirect_to new_charge_path
	end
end
