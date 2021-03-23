require 'rails_helper'

RSpec.describe "Cssses", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/csss/index"
      expect(response).to have_http_status(:success)
    end
  end

end
