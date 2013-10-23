class Item < ActiveRecord::Base
	has_and_belongs_to_many :baskets
	has_attached_file :image, style: ( thumb: '200x200>' ), storage: s3, bucket: ('musicology_demo')
	validates_presence_of :name
	validates_presence_of :price
	validates_presence_of :description
end
