require 'spec_helper'

describe Address do
  let(:address) { FactoryGirl.create(:address) }

  subject { address }

  it { should respond_to(:addressee) }
  it { should respond_to(:lineOne) }
  it { should respond_to(:town) }
  it { should respond_to(:postcode) }

end