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
        onToggleContent,
        onToggleLeftNavbar,
        onToggleRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleContent()
      }
      const onChangeLeftNavbar = () => {
        onToggleLeftNavbar()
      }
      const onChangeRightNavbar = () => {
        onToggleRightNavbar()
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
                  LeftNavbar
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
                  RightNavbar
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
