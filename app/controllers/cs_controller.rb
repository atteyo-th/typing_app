class CsController < ApplicationController
  def index
    # @cs = Home.all
  end

  def new
    # @cs = Home.new
  end
end

# private

# def home_params
#   params.require(:c).permit(:nickname, :target ).merge(user_id: current_user.id)
# end