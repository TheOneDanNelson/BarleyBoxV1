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

  def full_name
    "#{name} (born #{date_of_birth.to_s})"
  end

end
