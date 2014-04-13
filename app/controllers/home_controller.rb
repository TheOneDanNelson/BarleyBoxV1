class HomeController < ApplicationController
  def index
    unless current_user.nil?
      redirect_to club_path
    end
  end
end
