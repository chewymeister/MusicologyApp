require 'spec_helper'

describe 'charges' do
	describe 'new' do
		let!(:item) { FactoryGirl.create(:item) }
		let!(:user) { FactoryGirl.create(:user) }
		let!(:address) { FactoryGirl.create(:address, user: user) }

		before do
			visit root_path
			click_button 'Add item to basket'
		end

		context 'when not signed in' do
			it 'should redirect user to the sign in page' do
				click_link 'Checkout'

				expect(page.current_path).to eq new_user_session_path
				expect(page).to have_content 'Please sign in to continue'
			end
		end

		context 'when signed in' do
			before { sign_in user, 'password' }
			it 'should not redirect you to the sign in page' do
				click_link 'Checkout'

				expect(page.current_path).to eq new_charge_path
				expect(page).to_not have_content 'Please sign in to continue'
			end

			describe 'checking out' do
				it 'should redirect you to checkout page' do
					click_link 'Checkout'

					expect(page).to have_content 'Please confirm your details'
					expect(page).to have_content 'Address'
					expect(page).to have_content 'Email'
				end
			end
		end


	end
end