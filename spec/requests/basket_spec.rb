require 'spec_helper'

describe 'basket' do

	let!(:item) { FactoryGirl.create(:item) }
	before { visit root_path }

	context 'when visiting the site for the first time' do 
		it 'should initialise' do
			expect(page).to have_css '.item_count', text: '0 items'
		end
	end

	context 'when an item is added' do
		it 'should have increased by one' do
			
			within '.item' do
				click_button 'Add item to basket'
			end

			expect(page).to have_css '.item_count', text: '1 item'
		end
	end


	# context 'should go to checkout' do
	# 	it 'when checkout button is click' do
	# 		click_button 'Checkout'
	# 		expect(page).to have_content 'Place your order'
	# 	end
end