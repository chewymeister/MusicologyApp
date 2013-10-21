require 'spec_helper'

describe "item pages" do
	# before { Item.create(	name: "Jon's guitar", 
 #                       	price: 2.45, 
 #                        description: "dilapidated")

 #           Item.create(	name: "Srik's piano", 
 #                       	price: 1000.00, 
 #                        description: "pristine") }

	before { 2.times { FactoryGirl.create(:item) } }

  subject { page }

  describe "index" do
  	before { visit root_path }

  	context "should display" do
  		it "links to items" do
	  		expect(page).to have_link "item1"
	  		expect(page).to have_link "item2"
	  	end

	  	it "prices" do
	  		expect(page).to have_content 2
	  		expect(page).to have_content 3
	  	end

	  	it "descriptions" do
	  		expect(page).to have_content "item1 is great"
	  		expect(page).to have_content "item2 is great"
	  	end
  	end
  end

  after do
  	FactoryGirl.reload
	end

end