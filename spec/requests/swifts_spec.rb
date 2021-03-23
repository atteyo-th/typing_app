require 'rails_helper'

RSpec.describe "Swifts", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/swifts/index"
      expect(response).to have_http_status(:success)
    end
  end

end
