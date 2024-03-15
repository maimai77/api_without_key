module ApiWithoutKey
  module ApplicationHelper
    def api_request?
      return false if request.headers['X-Api-Without-Key']

      super
    end
  end
end

ApplicationController.prepend ApiWithoutKey::ApplicationHelper
