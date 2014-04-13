class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include User::AuthDefinitions
  include User::Roles

  has_many :identities

  field :email, type: String
  field :image, type: String
  field :name, type: String
  field :date_of_birth, type: Date
  field :roles_mask, type: Integer
  
  validates_presence_of :email, :name, :date_of_birth

  def display_date_of_birth
    return 'unknown' if date_of_birth.nil?
    date_of_birth.strftime('%_m/%-d/%Y')
  end

  def edit_date_of_birth
    return 'unknown' if date_of_birth.nil?
    date_of_birth.strftime('%m/%d/%Y')
  end

  def full_name
    "#{name} [ born #{display_date_of_birth} ]"
  end

end
