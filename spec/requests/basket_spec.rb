require 'spec_helper'

describe 'basket' do

	let!(:item) { FactoryGirl.create(:item) }
	before { visit root_path }

	context 'when visiting the site for the first time' do 
		it 'should initialise' do
			expect(page).to have_css '.item_count', text: '0 items'
		end
	end

	describe 'adding an item' do
		context 'when not signed in' do
			it 'should increase the item count by one' do
				within('.item') { click_button 'Add item to basket' }
				expect(page).to have_css '.item_count', text: '1 item'
			end
		end
	end

	describe 'show' do
		context 'when not signed in' do
			it 'should display the items' do
				within('.item') { click_button 'Add item to basket' }
				click_link 'view basket'

				expect(page).to have_css '.item'
				expect(page).to have_content 'item1'
			end
		end
	end

	describe 'removing an item' do
		
		let!(:item) { FactoryGirl.create(:item) }

		context 'when not signed in' do
			before do
				visit root_path
				within('.item') {click_button 'Add item to basket'}
				click_link 'view basket'
			end

			it 'should decrease the item count by 1' do
				click_link 'Remove from basket'
				expect(page).to have_css '.item_count', text: '0 items'
			end
		end
	end

	after do
  	FactoryGirl.reload
	end
end