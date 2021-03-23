require 'rails_helper'

RSpec.describe "Htmls", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/htmls/index"
      expect(response).to have_http_status(:success)
    end
  end

end
