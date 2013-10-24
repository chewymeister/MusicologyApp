class Admins::ItemsController < ItemsController

	def new
	  @item = Item.new
	end

	def create
		@item = Item.create(params[:item].permit(:name, :image, :price, :description ))
	  redirect_to items_path

    rescue AWS::S3::Errors::RequestTimeout
	  flash[:notice] = "Upload timed out"
	  render 'new'	
	end

	def index
		super
	end

	def show
		super
	end

	def edit
  	@item = Item.find(params[:id])
	end

	def update
		@item = Item.find(params[:id])

  	if @item.update(item_params)
      # flash[:success] = "Profile updated"
      redirect_to @item

    #   rescue AWS::S3::Errors::RequestTimeout
	  	# flash[:notice] = "Upload timed out"
	  	# render 'new'
    else
      render 'edit'
    end	
  end

	def destroy
  	Item.find(params[:id]).destroy
  	redirect_to items_path	
  end
  
	# private

	# 	def item_params
	# 		params.require(:item).permit(:name, :price, :description, :image)
	# 	end
end