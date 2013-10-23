require 'spec_helper'

describe "item pages" do
	let!(:item) { FactoryGirl.create(:item) }
	let!(:item2) { FactoryGirl.create(:item) }
	let(:user) { FactoryGirl.create(:user) }
	# before { 2.times { FactoryGirl.create(:item) } }

  subject { page }

  describe 'index' do
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
  	end
  end

  describe 'show' do
  	before { visit item_path(item) }

  	context "should display" do

  		it "name" do
	  		expect(page).to have_content "item1"
	  	end

	  	it "price" do
	  		expect(page).to have_content 2
	  	end

	  	it "description" do
	  		expect(page).to have_content "item1 is great"
	  	end
  	end

  	describe 'edit' do

  		before do
  			sign_in user
  		  visit edit_item_path(item)
  		end

  		context 'with correct information' do

  			it 'should change the item information' do
	  			fill_in "Name", with: "New name"
	  			fill_in "Price", with: "150.00"
	  			fill_in "Description", with: "New description"
	  			click_button "Edit item"

	  			expect(page).to have_content "New name"	  	
	  			expect(page).to have_content 150.00
	  			expect(page).to have_content "New description"
	  		end
  		end
  	end

  	describe 'destroy' do

  		before do
  			sign_in user
  		  visit edit_item_path(item)
  		end

  		context 'with correct information' do

  			it 'should change the item information' do
	  			click_link "Delete"

	  			expect(page).to_not have_content "item1"
	  			expect(page).to_not have_content "item1 is great"
	  		end
  		end
  	end
  end

  after do
  	FactoryGirl.reload
	end

end