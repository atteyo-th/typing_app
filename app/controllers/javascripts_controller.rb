class JavascriptsController < ApplicationController
  def index
    # @Javascripts = Home.all
  end

  def new
    # @Javascripts = Home.new
  end
end

# private

# def home_params
#   params.require(:Javascript).permit(:nickname, :target ).merge(user_id: current_user.id)
# end
