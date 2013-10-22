require 'spec_helper'

describe "addresses" do
	let!(:user) { FactoryGirl.create(:user) }
	let!(:item) { FactoryGirl.create(:item) }

	describe "adding an address" do

		subject { page }

		before do
			visit root_path
			sign_in(user)
			click_button "Add item to basket"
		end

		context "for the first time" do
			before { visit new_charge_path }

			it { should have_content "Add address" }

			it "on the checkout page" do
				fill_in "Addressee", with: "James"
				fill_in "Address line one", with: "Makers Academy"
				fill_in "Town", with: "London"
				fill_in "Postcode", with: "EC1Y, 1AA"
				click_button "Add address"

				expect(page).to have_content "Your address has been updated"
				expect(page).to have_content "James"
				expect(page).to have_content "Makers Academy"
				expect(page).to have_content "London"
				expect(page).to have_content "EC1Y, 1AA"
			end
		end

		context "after the first time" do
			let!(:address) { FactoryGirl.create(:address, user: user, current_address: true) }

			before { visit new_charge_path }

			it { should have_content "Want us to send it to a different address?" }

			it "on the checkout page" do
				fill_in "Addressee", with: "Srik"
				fill_in "Address line one", with: "The castle"
				fill_in "Town", with: "Edinburgh"
				fill_in "Postcode", with: "EC1Y, 1BB"
				click_button "Add address"

				expect(page).to have_content "Your address has been updated"
				expect(page).to have_content "Srik"
				expect(page).to have_content "The castle"
				expect(page).to have_content "Edinburgh"
				expect(page).to have_content "EC1Y, 1BB"
			end
		end
	end

	after do
  	FactoryGirl.reload
	end
end