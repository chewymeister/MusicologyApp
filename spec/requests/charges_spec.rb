require 'spec_helper'

describe 'charges' do
	describe 'new' do
		let!(:item) { FactoryGirl.create(:item) }
		let!(:user) { FactoryGirl.create(:user) }

		before do
			visit root_path
			click_button 'Add item to basket'
		end

		context 'when not signed in' do
			it 'should redirect user to the signin page' do
				click_link 'Checkout'

				expect(page.current_path).to eq new_user_session_path
				expect(page).to have_content 'Please sign in to continue'
			end
		end
	end
end