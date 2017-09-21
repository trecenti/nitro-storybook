source "https://rubygems.org"
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gemspec

gem "font-awesome-sass", github: "powerhome/font-awesome-sass", branch: :master

path '..' do
  gem 'naughty'
end

gem "simple_form", github: "powerhome/simple_form"
