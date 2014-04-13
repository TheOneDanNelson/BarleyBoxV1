class ClubsController < ApplicationController
  def signup
    if current_user.nil?
      redirect_to new_user_registration_url
    else
    end
  end
end
