class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :addresses

  def current_address
  	addresses.select{ |address| address.current_address }.first
  end

  def remove_address
    if addresses
  	  addresses.each { |address| address.update_attribute(:current_address, false) }
    end
  end
end
