require 'rails_helper'

RSpec.describe "Pythons", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/pythons/index"
      expect(response).to have_http_status(:success)
    end
  end

end
