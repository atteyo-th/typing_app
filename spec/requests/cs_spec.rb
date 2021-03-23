require 'rails_helper'

RSpec.describe "Cs", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/cs/index"
      expect(response).to have_http_status(:success)
    end
  end

end
