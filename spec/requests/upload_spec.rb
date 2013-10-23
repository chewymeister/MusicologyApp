require 'spec_helper'

describe 'when I create a product' do

 	it 'can have an uploaded item image' do
    visit new_item_path
    fill_in "Name", with: "Funny cat"
    fill_in "Price", with: '100000'
    fill_in "Description", with: "seriously, one funny cat"
    attach_file 'Image', example_image_path
    click_button 'Create item'
    expect(page).to have_css 'div.item_image'
 	end
end