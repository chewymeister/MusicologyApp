require 'spec_helper'

describe "item pages" do
	before { Item.create(	name: "Jon's guitar", 
                       	price: 2.45, 
                        description: "dilapidated")

           Item.create(	name: "Srik's piano", 
                       	price: 1000.00, 
                        description: "pristine") }

  subject { page }

  describe "index" do
  	before { visit root_path }

  	context "should display" do
  		it "links to items" do
	  		expect(page).to have_link "Jon's guitar"
	  		expect(page).to have_link "Jon's guitar"
	  	end

	  	it "prices" do
	  		expect(page).to have_content 2.45
	  		expect(page).to have_content 1000.00
	  	end

	  	it "descriptions" do
	  		expect(page).to have_content "dilapidated"
	  		expect(page).to have_content "pristine"
	  	end
  	end
  end


end