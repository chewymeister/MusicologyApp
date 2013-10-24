require 'spec_helper'

describe 'admin' do
	let(:admin) { FactoryGirl.create(:admin) }

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
    	# expect(page).to have_content 25.00
		end
	end
end