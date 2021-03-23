require 'rails_helper'

RSpec.describe "Rubys", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/rubys/index"
      expect(response).to have_http_status(:success)
    end
  end

end
