class BasketsController < ApplicationController

	def show
		@basket = current_basket
	end

	def create
	end
	
	def update
		session[:return_to] ||= request.referer
		@item = Item.find(params[:item_id])
		current_basket.items << @item
		redirect_to session.delete(:return_to)
	end

	def destroy
		item = Item.find(params[:item_id])
		current_basket.items.delete(item)
		
		redirect_to basket_path(current_basket)
	end

end
