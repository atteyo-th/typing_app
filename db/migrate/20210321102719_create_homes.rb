class CreateHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :homes do |t|
      t.string     :comment
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
