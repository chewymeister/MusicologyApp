require 'spec_helper'

describe "item pages" do
	let!(:item) { FactoryGirl.create(:item) }
	let!(:item2) { FactoryGirl.create(:item) }
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
  	end
  end

  after do
  	FactoryGirl.reload
	end

end