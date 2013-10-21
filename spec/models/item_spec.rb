require 'spec_helper'

describe Item do
  before  { @item = Item.create(name: "Jon's guitar", 
                            price: 2.45, 
                            description: "dilapidated")
          }

  subject { @item }

  it { should respond_to(:name) }
  it { should respond_to(:price) }
  it { should respond_to(:description) }

  context "with the correct information" do
    it "should be valid" do
      @item.reload.name.should eq("Jon's guitar")
      @item.reload.price.should eq(2.45)
      @item.reload.description.should eq("dilapidated")
    end
  end

  context "without a name" do
    before { @item.name = " " }

    it " should not be valid" do
      @item.should_not be_valid
    end
  end

  context "without a price" do
    before { @item.price = " " }

    it " should not be valid" do
      @item.should_not be_valid
    end
  end

  context "without a description" do
    before { @item.description = " " }

    it " should not be valid" do
      @item.should_not be_valid
    end
  end

end