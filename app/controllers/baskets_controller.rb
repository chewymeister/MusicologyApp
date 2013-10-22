class BasketsController < ApplicationController

	def create
	end
	
	def update
		@item = Item.find(params[:item_id])
		current_basket.items << @item

		redirect_to items_path
	end

end
