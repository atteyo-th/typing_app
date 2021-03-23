# typing-app テーブル設計

## users テーブル(利用者)

| Column             | Type   | Options                  |
| ----------------   | ------ | ----------               |
| nickname           | text   | null : false             | 
| email              | string | null : false  unique:true| 
| encrypted_password | string | null : false             | 
| target             | text   | null : false            

### association
