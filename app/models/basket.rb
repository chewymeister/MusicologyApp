class Basket < ActiveRecord::Base

	def count
		items.count
	end
end
