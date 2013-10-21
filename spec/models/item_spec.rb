require 'spec_helper'

describe Item do
  let(:item) { FactoryGirl.create(:item) }

  subject { item }

  it { should respond_to(:name) }
  it { should respond_to(:price) }
  it { should respond_to(:description) }

  context "with the correct information" do
    it "should be valid" do
      item.reload.name.should eq("item1")
      item.reload.price.should eq(2)
      item.reload.description.should eq("item1 is great")
    end
  end

  context "without a name" do
    before { item.name = " " }
    it " should not be valid" do
      item.should_not be_valid
    end
  end

  context "without a price" do
    before { item.price = " " }
    it " should not be valid" do
      item.should_not be_valid
    end
  end

  context "without a description" do
    before { item.description = " " }
    it " should not be valid" do
      item.should_not be_valid
    end
  end

  after do
    FactoryGirl.reload
  end


end