class Basket < ActiveRecord::Base
	has_and_belongs_to_many :items
	
	def count
		items.count
	end
end
