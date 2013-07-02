class CreateGame < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.string :winner

      t.float :game_time
    end
  end
end
