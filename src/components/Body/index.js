import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="LeftNavbar-container">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="ul-list">
                <li className="list-items">Item 1</li>
                <li className="list-items">Item 2</li>
                <li className="list-items">Item 3</li>
                <li className="list-items">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="heading">Content</h1>
              <p>Lorem ipsum</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="RightNavbar-container">
              <h1 className="heading">Right Navbar</h1>
              <div className="add-box-container">
                <p className="add-box">Ad 1</p>
                <p className="add-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
