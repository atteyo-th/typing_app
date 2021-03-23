class PythonsController < ApplicationController
  def index
    # @pythons = Home.all
  end

  def new
    # @pythons = Home.new
  end
end

# private

# def home_params
#   params.require(:python).permit(:nickname, :target ).merge(user_id: current_user.id)
# end
