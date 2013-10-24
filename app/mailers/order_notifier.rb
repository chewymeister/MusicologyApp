class OrderNotifier < ActionMailer::Base
  default from: "no-reply@musicology.com"

  def confirmation_email(number_of_items)
  	@number_of_items = number_of_items

  	mail(to: "chewymeister88@googlemail.com", subject: "Order Confirmation")
  end

end
