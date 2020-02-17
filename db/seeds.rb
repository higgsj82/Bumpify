# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Follow.destroy_all
Like.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all
User.destroy_all



demo = User.create!(email: 'guest@yahoo.com', 
                  password: 'password', 
                  preferred_name: 'Demo User',
                  DOB: '20081119',
                  gender: 'neutral')

bey = Artist.create!(artist_name: 'Beyoncé',
                    bio: 'One of the most success artists and 
                    music performers in modern history.
                    A living legend.')

lemonade = Album.create!(album_name: 'Lemonade',
                        artist_id: bey.id)

pray = Song.create!(song_name: 'Pray You Catch Me', album_id: lemonade.id)
hold_up = Song.create!(song_name: 'Hold Up', album_id: lemonade.id)
dont_hurt = Song.create!(song_name: "Don't Hurt Yourself", album_id: lemonade.id)
sorry = Song.create!(song_name: 'Sorry', album_id: lemonade.id)
six_inch = Song.create!(song_name: '6 Inch', album_id: lemonade.id)
daddy_lessons = Song.create!(song_name: 'Daddy Lessons', album_id: lemonade.id)
love_drought = Song.create!(song_name: 'Love Drought', album_id: lemonade.id)
sandcastles = Song.create!(song_name: 'Sandcastles', album_id: lemonade.id)
forward = Song.create!(song_name: 'Forward', album_id: lemonade.id)
freedom = Song.create!(song_name: 'Freedom', album_id: lemonade.id)
all_night = Song.create!(song_name: 'All Night', album_id: lemonade.id)
formation = Song.create!(song_name: 'Formation', album_id: lemonade.id)

pray_file = open('https://bumpify-dev.s3.amazonaws.com/01+Pray+You+Catch+Me.m4a')
hold_up_file = open('https://bumpify-dev.s3.amazonaws.com/02+Hold+Up.m4a')
dont_hurt_file = open("https://bumpify-dev.s3.amazonaws.com/03+Don't+Hurt+Yourself+(feat.+Jack+White).m4a")
sorry_file = open('https://bumpify-dev.s3.amazonaws.com/04+Sorry.m4a')
six_inch_file = open('https://bumpify-dev.s3.amazonaws.com/05+6+Inch+(feat.+The+Weeknd).m4a')
daddy_lessons_file = open('https://bumpify-dev.s3.amazonaws.com/06+Daddy+Lessons.m4a')
love_drought_file = open('https://bumpify-dev.s3.amazonaws.com/07+Love+Drought.m4a')
sandcastles_file = open('https://bumpify-dev.s3.amazonaws.com/08+Sandcastles.m4a')
forward_file = open('https://bumpify-dev.s3.amazonaws.com/09+Forward+(feat.+James+Blake).m4a')
freedom_file = open('https://bumpify-dev.s3.amazonaws.com/10+Freedom+(feat.+Kendrick+Lamar).m4a')
all_night_file = open('https://bumpify-dev.s3.amazonaws.com/11+All+Night.m4a')
formation_file = open('https://bumpify-dev.s3.amazonaws.com/12+Formation.m4a')


pray.track.attach(io: pray_file, filename: '01+Pray+You+Catch+Me.m4a')
hold_up.track.attach(io: hold_up_file, filename: '02+Hold+Up.m4a')
dont_hurt.track.attach(io: dont_hurt_file, filename: "03+Don't+Hurt+Yourself+(feat.+Jack+White).m4a")
sorry.track.attach(io: sorry_file, filename: '04+Sorry.m4a')
six_inch.track.attach(io: six_inch_file, filename: '05+6+Inch+(feat.+The+Weeknd).m4a')
daddy_lessons.track.attach(io: daddy_lessons_file, filename: '06+Daddy+Lessons.m4a')
love_drought.track.attach(io: love_drought_file, filename: '07+Love+Drought.m4a')
sandcastles.track.attach(io: sandcastles_file, filename: '08+Sandcastles.m4a')
forward.track.attach(io: forward_file, filename: '09+Forward+(feat.+James+Blake).m4a')
freedom.track.attach(io: freedom_file, filename: '10+Freedom+(feat.+Kendrick+Lamar).m4a')
all_night.track.attach(io: all_night_file, filename: '11+All+Night.m4a')
formation.track.attach(io: formation_file, filename: '12+Formation.m4a')