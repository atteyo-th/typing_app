class RubysController < ApplicationController
  def index
    # @rubys = Home.all
  end

  def new
    # @rubys = Home.new
  end
end

# private

# def home_params
#   params.require(:ruby).permit(:nickname, :target ).merge(user_id: current_user.id)
# end