When(/^the user adds an item to their basket$/) do
  visit root_path
  click_button 'Add item to basket'
end

When(/^clicks the "(.*?)" link$/) do |arg1|
  click_link "Checkout"
end

When(/^signs in with the email "(.*?)" and the password "(.*?)"$/) do |email, password|
  fill_in 'Email', with: email
  fill_in 'Password', with: password
  click_button 'Sign in'
end

When(/^the user clicks the "(.*?)" button$/) do |link|
  click_link "Checkout"
  # raise page.html
  click_button link
end

When(/^fills in their card details$/) do
  fill_in 'email', with: 'test@test.com'
  fill_in 'card_number', with: '4242424242424242'
  fill_in 'cc-exp', with: '1114'
  fill_in 'cc-csc', with: '111'
  click_button 'Pay'
end

Then(/^the user will see the message "(.*?)"$/) do |message|
  find '.alert-success'
  expect(page).to have_content message
end

Then(/^there will be (\d+) items in the basket$/) do |arg1|
  expect(page).to have_content '0 items'
end
