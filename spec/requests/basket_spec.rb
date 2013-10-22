require 'spec_helper'

describe 'basket' do
	before do
		2.times { FactoryGirl.create(:item) }
		visit root_path
	end

	context 'when visiting the site for the first time' do 
		it 'should initialise' do
			expect(page).to have_css '.item_count', text: '0 items'
		end
	end

	context 'when an item is added' do
		it 'should have increased by one' do
			within '.item:last' do
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