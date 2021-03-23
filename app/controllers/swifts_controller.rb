class SwiftsController < ApplicationController
  def index
    # @swifts = Home.all
  end

  def new
    # @swifts = Home.new
  end
end

# private

# def home_params
#   params.require(:swift).permit(:nickname, :target ).merge(user_id: current_user.id)
# end