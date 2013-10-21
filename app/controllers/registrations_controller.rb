class RegistrationsController < Devise::RegistrationsController

	def new
		super
	end

	def create
		super
		flash[:notice] = "Welcome to Musicology!"
	end

end