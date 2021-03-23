class HtmlsController < ApplicationController
  def index
    # @htmls = Home.all
  end

  def new
    # @htmls = Home.new
  end
end

# private

# def home_params
#   params.require(:html).permit(:nickname, :target ).merge(user_id: current_user.id)
# end

