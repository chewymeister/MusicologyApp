@provide_user @provide_item 
Feature: User goes to checkout and successfully pays for their basket items

  Background: User navigates to checkout
    When the user adds an item to their basket
    And clicks the "Checkout" link
    And signs in with the email "test@test.com" and the password "password"

    @javascript
    Scenario: User pays for their basket
      When the user clicks the "Pay with Card" button
      And fills in their card details
      Then the user will see the message "Thanks, you paid £2.00"
      And there will be 0 items in the basket
