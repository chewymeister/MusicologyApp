Before '@provide_user' do
  FactoryGirl.create(:user)
end

Before '@provide_item' do
  FactoryGirl.create(:item)
end

Before '@address' do
  FactoryGirl.create(:address, user: User.last, current_address: true)
end
