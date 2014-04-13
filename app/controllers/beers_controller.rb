class BeersController < ApplicationController
  def show
  end
  def index
    redirect_to :action=>'show'
  end
end
