class ChargesController < ApplicationController
	def new
		if current_user
			@address = Address.new
			@user_address = current_user.current_address
			render 'new'
		else
			redirect_to new_user_session_path
			flash[:error] = "Please sign in to continue"
		end
	end
  
	def create
	  # Amount in cents
	  @amount = 500

	  customer = Stripe::Customer.create(
	    :email => 'example@stripe.com',
	    :card  => params[:stripeToken]
	  )

	  charge = Stripe::Charge.create(
	    :customer    => customer.id,
	    :amount      => @amount,
	    :description => 'Rails Stripe customer',
	    :currency    => 'gbp'
	  )

	  redirect_to root_path
	  flash[:notice] = "Thanks, you paid £5.00!"

		rescue Stripe::CardError => e
		  flash[:error] = e.message
		  redirect_to charges_path

	end
end
