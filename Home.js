import React from 'react'
import NavBar from './NavBar';
import Logo from './images/nykaaLogo.png';

const Home = () => {
    return (
        <>
            <div id="app">
              <div data-reactroot>
                  <div className="container">
                      <div className="header-inner-wrapper">
                          <div className="header-always-fixed">
                              <ul><li><span className="ts-icon"></span>
                                      <span className="ts-text">Get App</span></li>
                                      <span className="black">|</span> 
                                   <li>Store & Events</li><span className="black">|</span> 
                                   <li>Gift Card</li><span className="black">|</span> 
                                   <li>Help</li>
                              </ul>
                          </div>
                          
                          
                      </div>
                     
                      <div> <NavBar/>
                         {/* <a href="/"></a><img className="logoImg" scr={Logo} alt="logoimg"/>
                        <a>CATEGORIES</a>

                        <div className="SearchIcon">
                              <input type="search" value autoComplete="off" placeholder="Search for Products,
                              Brands etc." autoCorrect="off"></input>
                          </div> */}
                      </div>
                      
                      
                      
                      
                      
                  </div>
              </div>

            </div>
        </>
    )
}

export default Home
