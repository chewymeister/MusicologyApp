class AddressesController < ApplicationController

	def create
		@address = Address.new(address_params)
    if @address.save
      current_user.add_new_address(@address)
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
                                   :town, :county, :postcode, :user_id)
    end
end
