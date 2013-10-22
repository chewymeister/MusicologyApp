class AddCurrentAddressToAddresses < ActiveRecord::Migration
  def change
    add_column :addresses, :current_address, :boolean
  end
end
