class AddressesController < ApplicationController

	def create
    current_user.remove_address 
		@address = Address.new(address_params)
    if @address.save
      redirect_to new_charge_path
      flash[:notice] = "Your address has been updated!"
    else
      redirect_to new_charge_path
      flash[:error] = "Your address has not saved. Please try again."
    end
	end

	private
    def address_params
      params.require(:address).permit(:addressee, :lineOne, :lineTwo,
                                   :town, :county, :postcode, :user_id, :current_address)
    end
end
