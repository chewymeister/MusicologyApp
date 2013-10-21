require 'spec_helper'

describe 'user pages' do

	describe 'sign up' do
		before { visit new_user_registration_path }

		context 'when signed out' do
			it do
				fill_in 'Email', with: 'test@test.com'
				fill_in 'Password', with: 'password'
				fill_in 'Password confirmation', with: 'password'
				click_button 'Sign up'

				expect(page.current_path).to eq root_path
				expect(page).to have_content 'Welcome to Musicology!'
				expect(page).to have_link 'Account'
			end
		end

	end

end