get '/' do
  erb :index
end

post '/game' do
  @player_one = Player.find_or_create_by_name(params[:player1]) 
  @player_two = Player.find_or_create_by_name(params[:player2])
  session[:player_one] = @player_one.id
  session[:player_two] = @player_two.id

  @game = Game.create!(players: [@player_one, @player_two])
  session[:game] = @game.id
  # session[:game] = @game.id
  session[:start_time] = Time.now
  erb :game
end

post '/winner' do
  p params
  winner = Player.find(params[:winner].to_i)
  game = Game.find(params[:id].to_i)
  game.winner = winner if game.winner.nil?
  #p session
  game.game_time = Time.now - session[:start_time] if game.game_time.nil?
  game.save
  session[:winner] = winner
  "/winner"
end

get '/winner' do 
  @game = Game.find(session[:game])
  @winner = Player.find(session[:winner])
  erb :winner 
end









 
