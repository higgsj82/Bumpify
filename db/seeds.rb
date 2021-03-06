# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Follow.destroy_all
Like.destroy_all
PlaylistSong.destroy_all
Playlist.destroy_all
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
                    bio: 'One of the most success artists and music performers in modern history.A living legend.')

frank = Artist.create!(artist_name: 'Frank Ocean',
                        bio: 'An eclectic artist who fuses R&B, rap, and alternative.His bisexual identity is present in his music and is groundbreaking for a black male music artist.')

sza = Artist.create!(artist_name: 'SZA', bio: 'SZA is a neo soul singer, whose music has been described as alternative R&B, with elements of soul, hip hop, minimalist R&B, cloud rap, witch house, and chillwave.')

lemonade = Album.create!(album_name: 'Lemonade', artist_id: bey.id)
channel = Album.create!(album_name: 'channel ORANGE', artist_id: frank.id)
blonde = Album.create!(album_name: 'Blonde', artist_id: frank.id)
ctrl = Album.create!(album_name: 'Ctrl', artist_id: sza.id)

# lemonade
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
# lemonade files
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
# lemonade attachments
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

# channel orange
start = Song.create!(song_name: 'Start', album_id: channel.id)
thinkin = Song.create!(song_name: 'Thinkin Bout You', album_id: channel.id)
fertilizer = Song.create!(song_name: 'Fertilizer', album_id: channel.id)
sierra = Song.create!(song_name: 'Sierra Leone', album_id: channel.id)
sweet_life = Song.create!(song_name: 'Sweet Life', album_id: channel.id)
not_money = Song.create!(song_name: 'Not Just Money', album_id: channel.id)
super_rich = Song.create!(song_name: 'Super Rich Kids', album_id: channel.id)
pilot_jones = Song.create!(song_name: 'Pilot Jones', album_id: channel.id)
crack_rock = Song.create!(song_name: 'Crack Rock', album_id: channel.id)
pyramids = Song.create!(song_name: 'Pyramids', album_id: channel.id)
lost = Song.create!(song_name: 'Lost', album_id: channel.id)
white = Song.create!(song_name: 'White', album_id: channel.id)
monks = Song.create!(song_name: 'Monks', album_id: channel.id)
bad_religion = Song.create!(song_name: 'Bad Religion', album_id: channel.id)
pink_matter = Song.create!(song_name: 'Pink Matter', album_id: channel.id)
forrest_gump = Song.create!(song_name: 'Forrest Gump', album_id: channel.id)
fin = Song.create!(song_name: 'End', album_id: channel.id)
# channel orange files
start_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/01+Start.mp3')
thinkin_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/02+Thinkin+Bout+You.mp3')
fertilizer_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/03+Fertilizer.mp3')
sierra_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/04+Sierra+Leone.mp3')
sweet_life_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/05+Sweet+Life.mp3')
not_money_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/06+Not+Just+Money.mp3')
super_rich_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/07+Super+Rich+Kids.mp3')
pilot_jones_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/08+Pilot+Jones.mp3')
crack_rock_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/09+Crack+Rock.mp3')
pyramids_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/10+Pyramids.mp3')
lost_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/11+Lost.mp3')
white_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/12+White.mp3')
monks_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/13+Monks.mp3')
bad_religion_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/14+Bad+Religion.mp3')
pink_matter_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/15+Pink+Matter.mp3')
forrest_gump_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/16+Forrest+Gump.mp3')
fin_file = open('https://bumpify-prod.s3.amazonaws.com/Channel+Orange/17+End.mp3')
# channel orange attachments
start.track.attach(io: start_file, filename: '01+Start.mp3')
thinkin.track.attach(io: thinkin_file, filename: '02+Thinkin+Bout+You.mp3')
fertilizer.track.attach(io: fertilizer_file, filename: '03+Fertilizer.mp3')
sierra.track.attach(io: sierra_file, filename: '04+Sierra+Leone.mp3')
sweet_life.track.attach(io: sweet_life_file, filename: '05+Sweet+Life.mp3')
not_money.track.attach(io: not_money_file, filename: '06+Not+Just+Money.mp3')
super_rich.track.attach(io: super_rich_file, filename: '07+Super+Rich+Kids.mp3')
pilot_jones.track.attach(io: pilot_jones_file, filename: '08+Pilot+Jones.mp3')
crack_rock.track.attach(io: crack_rock_file, filename: '09+Crack+Rock.mp3')
pyramids.track.attach(io: pyramids_file, filename: '10+Pyramids.mp3')
lost.track.attach(io: lost_file, filename: '11+Lost.mp3')
white.track.attach(io: white_file, filename: '12+White.mp3')
monks.track.attach(io: monks_file, filename: '13+Monks.mp3')
bad_religion.track.attach(io: bad_religion_file, filename: '14+Bad+Religion.mp3')
pink_matter.track.attach(io: pink_matter_file, filename: '15+Pink+Matter.mp3')
forrest_gump.track.attach(io: forrest_gump_file, filename: '16+Forrest+Gump.mp3')
fin.track.attach(io: fin_file, filename: '17+End.mp3')

# blonde
nikes = Song.create!(song_name: 'Nikes', album_id: blonde.id)
ivy = Song.create!(song_name: 'Ivy', album_id: blonde.id)
pink_white = Song.create!(song_name: 'Pink + White', album_id: blonde.id)
be_yourself = Song.create!(song_name: 'Be Yourself', album_id: blonde.id)
solo = Song.create!(song_name: 'Solo', album_id: blonde.id)
skyline_to = Song.create!(song_name: 'Skyline To', album_id: blonde.id)
self_control = Song.create!(song_name: 'Self Control', album_id: blonde.id)
good_guy = Song.create!(song_name: 'Good Guy', album_id: blonde.id)
nights = Song.create!(song_name: 'Nights', album_id: blonde.id)
solo_reprise = Song.create!(song_name: 'Solo (Reprise)', album_id: blonde.id)
pretty_sweet = Song.create!(song_name: 'Pretty Sweet', album_id: blonde.id)
facebook_story = Song.create!(song_name: 'Facebook Story', album_id: blonde.id)
close_to_you = Song.create!(song_name: 'Close to You', album_id: blonde.id)
white_ferrari = Song.create!(song_name: 'White Ferrari', album_id: blonde.id)
seigfried = Song.create!(song_name: 'Seigfried', album_id: blonde.id)
godspeed = Song.create!(song_name: 'Godspeed', album_id: blonde.id)
futura_free = Song.create!(song_name: 'Futura Free', album_id: blonde.id)
# blonde files
nikes_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/01+Nikes.m4a')
ivy_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/02+Ivy.m4a')
pink_white_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/03+Pink+%2B+White.m4a')
be_yourself_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/04+Be+Yourself.m4a')
solo_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/05+Solo.m4a')
skyline_to_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/06+Skyline+To.m4a')
self_control_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/07+Self+Control.m4a')
good_guy_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/08+Good+Guy.m4a')
nights_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/09+Nights.m4a')
solo_reprise_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/10+Solo+(Reprise).m4a')
pretty_sweet_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/11+Pretty+Sweet.m4a')
facebook_story_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/12+Facebook+Story.m4a')
close_to_you_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/13+Close+to+You.m4a')
white_ferrari_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/14+White+Ferrari.m4a')
seigfried_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/15+Seigfried.m4a')
godspeed_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/16+Godspeed.m4a')
futura_free_file = open('https://bumpify-prod.s3.amazonaws.com/Blonde/17+Futura+Free.m4a')
# blonde attachments
nikes.track.attach(io: nikes_file, filename: '01+Nikes.m4a')
ivy.track.attach(io: ivy_file, filename: '02+Ivy.m4a')
pink_white.track.attach(io: pink_white_file, filename: '03+Pink+%2B+White.m4a')
be_yourself.track.attach(io: be_yourself_file, filename: '04+Be+Yourself.m4a')
solo.track.attach(io: solo_file, filename: '05+Solo.m4a')
skyline_to.track.attach(io: skyline_to_file, filename: '06+Skyline+To.m4a')
self_control.track.attach(io: self_control_file, filename: '07+Self+Control.m4a')
good_guy.track.attach(io: good_guy_file, filename: '08+Good+Guy.m4a')
nights.track.attach(io: nights_file, filename: '09+Nights.m4a')
solo_reprise.track.attach(io: solo_reprise_file, filename: '10+Solo+(Reprise).m4a')
pretty_sweet.track.attach(io: pretty_sweet_file, filename: '11+Pretty+Sweet.m4a')
facebook_story.track.attach(io: facebook_story_file, filename: '12+Facebook+Story.m4a')
close_to_you.track.attach(io: close_to_you_file, filename: '13+Close+to+You.m4a')
white_ferrari.track.attach(io: white_ferrari_file, filename: '14+White+Ferrari.m4a')
seigfried.track.attach(io: seigfried_file, filename: '15+Seigfried.m4a')
godspeed.track.attach(io: godspeed_file, filename: '16+Godspeed.m4a')
futura_free.track.attach(io: futura_free_file, filename: '17+Futura+Free.m4a')


# Ctrl
supermodel = Song.create!(song_name: 'Supermodel', album_id: ctrl.id)
love_galore = Song.create!(song_name: 'Love Galore', album_id: ctrl.id)
doves = Song.create!(song_name: 'Doves In the Wind', album_id: ctrl.id)
drew_barrymore = Song.create!(song_name: 'Drew Barrymore', album_id: ctrl.id)
prom = Song.create!(song_name: 'Prom', album_id: ctrl.id)
the_weekend = Song.create!(song_name: 'The Weekend', album_id: ctrl.id)
go_gina = Song.create!(song_name: 'Go Gina', album_id: ctrl.id)
garden = Song.create!(song_name: 'Garden', album_id: ctrl.id)
broken_clocks = Song.create!(song_name: 'Broken Clocks', album_id: ctrl.id)
anything = Song.create!(song_name: 'Anything', album_id: ctrl.id)
wavy = Song.create!(song_name: 'Wavy', album_id: ctrl.id)
normal_girl = Song.create!(song_name: 'Normal Girl', album_id: ctrl.id)
plb = Song.create!(song_name: 'Pretty Little Birds', album_id: ctrl.id)
twenty_something = Song.create!(song_name: '20 Something', album_id: ctrl.id)
# Ctrl files
supermodel_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/01+Supermodel.m4a')
love_galore_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/02+Love+Galore+(feat.+Travis+Scott).m4a')
doves_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/03+Doves+In+the+Wind+(feat.+Kendrick+Lamar).m4a')
drew_barrymore_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/04+Drew+Barrymore.m4a')
prom_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/05+Prom.m4a')
the_weekend_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/06+The+Weekend.m4a')
go_gina_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/07+Go+Gina.m4a')
garden_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/08+Garden+(Say+It+Like+Dat).m4a')
broken_clocks_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/09+Broken+Clocks.m4a')
anything_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/10+Anything.m4a')
wavy_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/11+Wavy+(Interlude)+%5Bfeat.+James+Fauntleroy%5D.m4a')
normal_girl_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/12+Normal+Girl.m4a')
plb_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/13+Pretty+Little+Birds+(feat.+Isaiah+Rashad).m4a')
twenty_something_file = open('https://bumpify-prod.s3.amazonaws.com/Ctrl/14+20+Something.m4a')
# Ctrl attachments
supermodel.track.attach(io: supermodel_file, filename: '01+Supermodel.m4a')
love_galore.track.attach(io: love_galore_file, filename: '02+Love+Galore+(feat.+Travis+Scott).m4a')
doves.track.attach(io: doves_file, filename: '03+Doves+In+the+Wind+(feat.+Kendrick+Lamar).m4a')
drew_barrymore.track.attach(io: drew_barrymore_file, filename: '04+Drew+Barrymore.m4a')
prom.track.attach(io: prom_file, filename: '05+Prom.m4a')
the_weekend.track.attach(io: the_weekend_file, filename: '06+The+Weekend.m4a')
go_gina.track.attach(io: go_gina_file, filename: '07+Go+Gina.m4a')
garden.track.attach(io: garden_file, filename: '08+Garden+(Say+It+Like+Dat).m4a')
broken_clocks.track.attach(io: broken_clocks_file, filename: '09+Broken+Clocks.m4a')
anything.track.attach(io: anything_file, filename: '10+Anything.m4a')
wavy.track.attach(io: wavy_file, filename: '11+Wavy+(Interlude)+%5Bfeat.+James+Fauntleroy%5D.m4a')
normal_girl.track.attach(io: normal_girl_file, filename: '12+Normal+Girl.m4a')
plb.track.attach(io: plb_file, filename: '13+Pretty+Little+Birds+(feat.+Isaiah+Rashad).m4a')
twenty_something.track.attach(io: twenty_something_file, filename: '14+20+Something.m4a')

# Playlists
bumpify_featured = Playlist.create!(name: "Bumpify's Featured", user_id: demo.id)


# Playlist Songs
featured1 = PlaylistSong.create!(playlist_id: bumpify_featured.id, song_name: nikes.song_name, song_id: nikes.id)
featured2 = PlaylistSong.create!(playlist_id: bumpify_featured.id, song_name: formation.song_name, song_id: formation.id)
featured3 = PlaylistSong.create!(playlist_id: bumpify_featured.id, song_name: supermodel.song_name, song_id: supermodel.id)
featured4 = PlaylistSong.create!(playlist_id: bumpify_featured.id, song_name: thinkin.song_name, song_id: thinkin.id)
featured5 = PlaylistSong.create!(playlist_id: bumpify_featured.id, song_name: the_weekend.song_name, song_id: the_weekend.id)