FactoryGirl.define do
  factory :item do
    sequence(:name) 				{ |n| "item#{n}" }
    sequence(:price)				{ |n| n+1 }
    sequence(:description) 	{ |n| "item#{n} is great" }
  end
end