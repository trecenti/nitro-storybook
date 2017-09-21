module NitroSg
  class Engine < ::Rails::Engine
    isolate_namespace NitroSg

    config.generators do |g|
      g.test_framework :rspec
    end

    config.sass.load_paths ||= []
    config.sass.load_paths << "#{Gem.loaded_specs['bootstrap-sass'].full_gem_path}/assets/stylesheets"
    config.sass.load_paths << "#{Gem.loaded_specs['bootstrap-sass'].full_gem_path}/assets/stylesheets/bootstrap"
  end
end
