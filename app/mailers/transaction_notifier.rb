class TransactionNotifier < ActionMailer::Base
  default from: "no-reply@musicology.com"

  def confirmation_email number_of_items
  	@number_of_items = number_of_items
  	mail(to: 'someuser@example.com', subject: 'Order Confirmation')
  end
end
