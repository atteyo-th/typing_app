FactoryBot.define do
  factory :user do
    nickname              { 'あいうえお' }
    email                 { Faker::Internet.free_email }
    password              { 'a1' + Faker::Internet.password(min_length: 6) }
    password_confirmation { password }
    target                { '楽しむ' }   
  end
end
