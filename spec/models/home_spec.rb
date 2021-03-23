require 'rails_helper'

RSpec.describe Home, type: :model do
  describe '#create' do
    before do
      @home = FactoryBot.build(:home)
    end

    context '新規登録できるとき' do
      it 'comment,user_idが存在すれば登録できる' do
        expect(@item).to be_valid
      end
    end  

    context '新規登録できないとき' do
      it 'コメントがが必須であること' do
        @home.comment = ''
        @home.valid?
        expect(@item.errors.full_messages).to include("comment can't be blank")
      end
    end 

    

  end
end
