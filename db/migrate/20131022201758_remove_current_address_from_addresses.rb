class RemoveCurrentAddressFromAddresses < ActiveRecord::Migration
  def change
  	remove_column :addresses, :current_address
  end
end
