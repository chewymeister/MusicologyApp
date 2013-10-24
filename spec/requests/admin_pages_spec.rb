require 'spec_helper'

describe 'admin' do
	let(:admin) { FactoryGirl.create(:admin) }
	let!(:item) { FactoryGirl.create(:item) }

	context 'when signed in ' do
		before { admin_sign_in admin }

		it 'should have an admin navbar' do
			# raise page.html
			expect(page).to have_link 'Create new item'
			expect(page).to_not have_link 'View basket' 
			expect(page).to_not have_button 'Add item to basket'
			expect(page).to_not have_content '0 items'
		end

		it 'should be able to create a new item' do
			click_link 'Create new item'
			fill_in 'Name', with: 'New item'
			fill_in 'Description', with: 'New description'
			fill_in 'Price', with: '25.00'
			attach_file 'Image', example_image_path
    	click_button 'Create item'

    	expect(page).to have_link 'New item'
    	expect(page).to have_content 25.00
    	expect(page).to have_content 'New description'
		end

		it 'should be able to edit an item' do
			click_link 'Edit item'
			fill_in 'Name', with: 'Edited item'
			fill_in 'Description', with: 'Edited description'
			fill_in 'Price', with: '30.00'
			# raise page.html
    	click_button 'Edit item'

    	expect(page).to have_link 'Edited item'
    	expect(page).to have_content 30.00
    	expect(page).to have_content 'Edited description'
		end
	end
end