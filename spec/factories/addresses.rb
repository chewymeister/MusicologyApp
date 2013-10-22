# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :address do
    addressee "Makers Academy"
    lineOne 	"25 City Road"
    town 			"London"
    postcode 	"EC1Y 1AA"
  end
end
