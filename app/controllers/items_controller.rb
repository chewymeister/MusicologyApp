class ItemsController < ApplicationController
  
	def new
	  @item = Item.new
	end

	def create
	  @item = Item.create(params[:item].permit(:name, :image etc ))
	  redirect_to items_path

    rescue AWS::S3::Errors::RequestTimeout
	  flash[:notice] = "Upload tined out"
	  render ''#''
	end

  def index
  	@items = Item.paginate(:page => params[:page], :per_page => 12)
  end

  def show
  	@item = Item.find(params[:id])
  end
end
