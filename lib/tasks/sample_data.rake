namespace :db do
	desc "Populate database with sample data"
	task populate: :environment do
		100.times do |n|
			name  = Faker::Lorem.word
      price = (1..100).to_a.sample
      description = Faker::Lorem.paragraph

      Item.create!(	name: name,
      							price: price,
      							description: description)
    end
  end
end