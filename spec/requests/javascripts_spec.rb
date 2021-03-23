require 'rails_helper'

RSpec.describe "Javascripts", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/javascripts/index"
      expect(response).to have_http_status(:success)
    end
  end

end
