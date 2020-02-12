# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  preferred_name  :string           not null
#  DOB             :date             not null
#  gender          :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :preferred_name, :DOB, :gender, presence: true
    validates :password, length: { minimum: 8 }, allow_nil: true
    validates :gender, :inclusion => { :in => [:female, :male, :neutral]

    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user       
    end
    
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end
end
