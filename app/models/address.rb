class Address < ActiveRecord::Base
	belongs_to :user
	
	validates_presence_of :addressee
	validates_presence_of :lineOne
	validates_presence_of :town
	validates_presence_of :postcode
end
