// Write your code her
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-container">
          <div className="config-inner-container">
            <h1 className="config-heading">Layout</h1>
            <div className="checkboxes-container">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={showContent}
                  onChange={onChangeContent}
                  id="content"
                />
                <label className="label-text" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  id="LeftNavbar"
                />
                <label className="label-text" htmlFor="LeftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  id="RightNavbar"
                />
                <label className="label-text" htmlFor="RightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
