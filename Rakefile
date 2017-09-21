#!/usr/bin/env rake
begin
  require "bundler/setup"
rescue LoadError
  puts "You must `gem install bundler` and `bundle install` to run rake tasks"
end

begin
  require "yard"
  YARD::Rake::YardocTask.new do |t|
    t.files = ["lib/**/*.rb"]
    t.options = [
      "--no-private",
    ]
  end
rescue LoadError
  STDERR.puts "Could not require() YARD! Install with 'gem install yard' to get the 'yardoc' task"
end

APP_RAKEFILE = File.expand_path("../spec/dummy/Rakefile", __FILE__)
load "rails/tasks/engine.rake"

Bundler::GemHelper.install_tasks
