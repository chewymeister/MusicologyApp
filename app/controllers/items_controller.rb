class ItemsController < ApplicationController
  def new
  end

  def index
  	@items = Item.paginate(:page => params[:page], :per_page => 15)
  end

  def show
  	@item = Item.find(params[:id])
  end
end
