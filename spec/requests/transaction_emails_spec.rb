require 'spec_helper'

describe 'a transaction confirmation email' do
	it 'is sent when a transaction has been completed' do
		expect{ Order.create(number_of_items: 3) }.to change { emails.count }.by 1
	end

	context 'should include' do
		before { Order.create(number_of_items: 3) }

		it 'the subject "order confirmation"' do
			expect(emails.last.subject).to eq "Order Confirmation"
		end

		it 'the number of items ordered' do
			expect(emails.last.body).to match /3 items/
		end
	end
end