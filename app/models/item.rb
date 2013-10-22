class Item < ActiveRecord::Base
	has_and_belongs_to_many :baskets

	validates_presence_of :name
	validates_presence_of :price
	validates_presence_of :description
end
