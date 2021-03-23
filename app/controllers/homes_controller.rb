class HomesController < ApplicationController
  def index
    @homes = Home.all
  end

  def new
    @home = Home.new
  end

  def create
    @home = Home.new(home_params)
    if @home.save
      redirect_to root_path
    else
      render :index
    end
  end



  private

  def home_params
    params.permit(:comment).merge(user_id: current_user.id)
  end
end
