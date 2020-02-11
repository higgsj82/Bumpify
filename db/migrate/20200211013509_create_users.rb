class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :preferred_name, null: false
      t.date :DOB, null: false
      t.string :gender, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :preferred_name
  end
end
