require 'rails_helper'

RSpec.describe "Phps", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/phps/index"
      expect(response).to have_http_status(:success)
    end
  end

end
