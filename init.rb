Redmine::Plugin.register :api_without_key do
  name 'api_without_key plugin'
end

require File.expand_path('lib/api_without_key/application_helper', __dir__)
