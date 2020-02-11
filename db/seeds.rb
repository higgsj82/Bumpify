# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create(email: 'demoUser@bumpify.com', 
                  password: 'password', 
                  preferred_name: 'Demo User',
                  DOB: '11/19/2008',
                  gender: 'neutral')