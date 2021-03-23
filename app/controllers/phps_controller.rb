class PhpsController < ApplicationController
  def index
    # @phps = Home.all
  end

  def new
    # @phps = Home.new
  end
end

# private

# def home_params
#   params.require(:php).permit(:nickname, :target ).merge(user_id: current_user.id)
# end