require 'test_helper'

class TemplateConControllerTest < ActionDispatch::IntegrationTest
  test "should get template" do
    get template_con_template_url
    assert_response :success
  end

end
