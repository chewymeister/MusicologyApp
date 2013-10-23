require 'spec_helper' 

describe 'when I create a product' do

	it 'can have an uploaded item image' do
		visit new_item_path

		attach_file 'Image', example_image_path
		click_button 'Create Product'

		expect(page).to have_css 'img.item'
	end
end