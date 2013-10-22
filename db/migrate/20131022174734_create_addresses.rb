class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :addressee
      t.string :lineOne
      t.string :lineTwo
      t.string :town
      t.string :county
      t.string :postcode

      t.timestamps
    end
  end
end
