class CreateJoinTableBasketItem < ActiveRecord::Migration
  def change
    create_join_table :baskets, :items do |t|
      # t.index [:basket_id, :item_id]
      # t.index [:item_id, :basket_id]
    end
  end
end
