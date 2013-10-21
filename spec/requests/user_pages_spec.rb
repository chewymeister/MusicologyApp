require 'spec_helper'

describe 'user pages' do

	describe 'sign up' do
		before { visit new_user_registration_path }

		context 'when signed out' do
			it 'with valid information' do
				sign_up("test@test.com", "password", "password")

				expect(page.current_path).to eq root_path
				expect(page).to have_content 'Welcome to Musicology!'
				expect(page).to have_link 'Account'
			end

			it "with invalid information" do
				sign_up("test@test.com", "password", "wrong")

				expect(page).to have_content "Password confirmation doesn't match Password"
			end
		end
	end

	describe 'edit' do
		let(:user) { FactoryGirl.create(:user) }

		before do
		  sign_in(user) 
		 	visit edit_user_registration_path
		end

		describe 'email' do
			it 'with valid information' do
				fill_in 'Email', :with => 'test2@test.com'
				fill_in 'Current password', :with => 'password'
				click_button 'Update'

				expect(page).to have_content "You updated your account successfully"
			end

			it 'with invalid information' do
				fill_in 'Email', :with => 'test2@test.com'
				fill_in 'Current password', :with => 'wrong'
				click_button 'Update'

				expect(page).to have_content "Current password is invalid"
			end
		end

		describe 'password' do
			it 'with valid information' do
				fill_in 'Password', :with => 'password1'
				fill_in 'Password confirmation', :with => 'password1'
				fill_in 'Current password', :with => 'password'
				click_button 'Update'

				expect(page).to have_content "You updated your account successfully"
			end

			it 'with an invalid password' do
				fill_in 'Password', :with => 'password1'
				fill_in 'Password confirmation', :with => 'password1'
				fill_in 'Current password', :with => 'wrong'
				click_button 'Update'

				expect(page).to have_content "Current password is invalid"
			end

			it "with passwords that don't match" do
				fill_in 'Password', :with => 'password1'
				fill_in 'Password confirmation', :with => 'password2'
				fill_in 'Current password', :with => 'password'
				click_button 'Update'

				expect(page).to have_content "Password confirmation doesn't match Password"
			end
		end
	end

	describe 'sign out' do
		let(:user) { FactoryGirl.create(:user) }
		before { sign_in(user) }

		context 'when signed in' do
			it do
				click_link 'Sign out'
				expect(page).to_not have_link 'Sign out'
				expect(page).to have_link 'Sign in'
				expect(page).to have_content 'Signed out successfully'
			end
		end
	end

	describe 'sign in' do
		context 'when signed out' do
			let(:user) { FactoryGirl.create(:user) }

			before { visit new_user_session_path }

			it "with valid information" do
				fill_in 'Email', :with => user.email
				fill_in "Password", :with => 'password'
				click_button 'Sign in'

				expect(page).to have_content 'Signed in successfully'
			end

			it "with an invalid email" do
				fill_in 'Email', :with => 'wrong email'
				fill_in "Password", :with => 'password'
				click_button 'Sign in'

				expect(page).to have_content 'Invalid email or password'
			end

			it "with an invalid password" do
				fill_in 'Email', :with => 'test@test.com'
				fill_in "Password", :with => 'wrong'
				click_button 'Sign in'

				expect(page).to have_content 'Invalid email or password'
			end
		end
	end

end