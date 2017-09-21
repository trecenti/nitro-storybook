# NitroSg

This component implements several view components which make up the visual appearance of Nitro, mostly around navigation:

* The Rails layout templates
* Stylesheets for the app navigation and general appearance
* Javascript necessary for functioning navigation
* Routes for the full menu bar
* Images loaded on every Nitro page, such as the logo

The intent of this component is to provide a base on which other components and indeed applications can be built such that they maintain visual consistency and the Nitro brand.

Because it cannot be known to this component, this component by default renders dummy navigational data; it is intended that real substitutes be provided by the consuming application by injection into the request environment by the mechanism described below.

## Usage

In order to use this component to theme an application, the following steps are necessary:

1. Include `nitro_sg` in the application Gemfile.
1. Set the application to use layouts from this component:

  ```ruby
  class ApplicationController < ActionController::Base
    layout "nitro_sg/application"

    # If your component needs zero margins around the main content
    # area to accommodate designs that run to the very bottom of
    # the header and to the extreme far left/right of the page,
    # use this layout instead.
    #
    # layout "nitro_sg/application_full_width"
    #
  end
  ```

1. Include this component's stylesheets in the application's `application.scss`:

  ```css
  @import "nitro_sg/application";
  ```

1. Include this component's javascript in the application's `application.js`:

  ```javascript
  //=require nitro_sg/application
  ```

1. Mount this component in the application's `router.rb`:

  ```ruby
  Rails.application.routes.draw do
    mount NitroSg::Engine, at: "/main_menu"
  end
  ```

1. Inject navigational state into the theme. This can be done in Rack middleware:

  ```ruby
  class UIState < NitroSg::UIState
    include Rails.application.routes.url_helpers
    include Rails.application.routes.mounted_helpers

    def initialize(user)
      @user = user
    end

    def main_menu
      return [] unless @user
      [
        {group: "System Settings", icon: "fa-gear"},
          {label: "Main Settings", url: main_settings_path, enabled: @user.can?(:manage, Settings)}
      ]
    end

    def breadcrumbs
      return [] unless @user
      ["Home", "Main Settings"]
    end

    def current_user
      return unless @user
      {
        id: 123,
        goes_by_with_last_name: "Foo User",
        avatar_url: "foo.jpg",
        connect_enabled: true,
        shared_session_key: "1234",
        scheduler_status: "unavailable",
      }
    end

    def test_phone_numbers_count
      1
    end

    def communication_actions
      [
        { label: "Home", url: "/", enabled: true },
      ]
    end

    def power_actions
      [
        { label: "Home", url: "/", enabled: true },
      ]
    end

    def user_actions
      [
        { label: "Home", url: "/", enabled: true },
      ]
    end
  end
  ```

  ```ruby
  class UIStateMiddleware
    def initialize(app)
      @app = app
    end

    def call(env)
      env[:nitro_ui_state] = UIState.new(env['warden'].user)
      @app.call(env)
    end
  end
  ```

  ```ruby
  config.middleware.insert_after Warden::Manager, "UIStateMiddleware"
  ```

Usage in a Rails engine (such as a Nitro Component) is similar; generated components come pre-configured to use NitroSg.

The core requirement from the consuming application is that it inject its state via the request environment, in the key `:nitro_ui_state`, with a value which implements the `NitroSg::UIState` interface as documented on that abstract class.
