class ItemsController < ApplicationController
  def new
  end

  def index
  	@items = Item.all
  end

  def show
  end
end
