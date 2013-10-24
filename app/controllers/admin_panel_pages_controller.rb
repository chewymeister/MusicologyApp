class AdminPanelPagesController < ApplicationController
	before_filter :authenticate_admin!	

	def dashboard
		@disable_nav = true
		@admin_page = true
		
		if current_admin
			@items = Item.paginate(:page => params[:page], :per_page => 12)	
		else
			render 'dashboard'
		end
	end
end
