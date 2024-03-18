Redmine::Plugin.register :api_without_key do
  name 'api_without_key plugin'
end

Pathname.new(__dir__).glob('lib/**/*.rb').sort.each do |path|
  require path
end
