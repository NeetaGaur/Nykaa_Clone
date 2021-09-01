import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './images/nykaaLogo.png';
//import 'font-awesome/css/font-awesome.min.css';
import SearchIcon from '@material-ui/icons/Search';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import SearchImg from './images/search.png';
import saleImg from './images/sale.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image0 from './images/mainImg.jpg';
// import image1 from './images/carousel/1.jpg';import image2 from './images/carousel/2.jpg';import image3 from './images/carousel/3.jpg';import image4 from './images/carousel/4.jpg';
import time from './images/time.gif';
// import image5 from './images/5.jpg';import image6 from './images/6.jpg';
import lipstick from './images/lipstick.jpg';
import skinCare from './images/skincare.jpg';
import hairCare from './images/Haircare.jpg';
import hairTool from './images/hairTool.jpg';
import image7 from './images/7.jpg';
import image8 from './images/sara.jpg';
import image9 from './images/anan.jpg';
import image10 from './images/janhvi.jpg';
import image11 from './images/krati.jpg';
import image12 from './images/sara2.jpg';
import image13 from './images/jahn2.jpg';
import image14 from './images/mac.jpg';
import image15 from './images/HudaBeauty.jpg';
import image16 from './images/Aish.jpg';
import image17 from './images/kat.jpg';
import image18 from './images/jacky.jpg';
import image19 from './images/Loreal.jpg';
import Deals from './images/DealsforU.jpg';


const NavBar = () => {
    return (
        <>
          <nav className="NavBar_menu">
              <NavLink to="/" ><a href="" className="logoImg"></a><img className="logoImg" src={Logo} alt="logoimg"/></NavLink>
            
              <NavLink exact className="link_Style" to="/categories">CATEGORIES</NavLink>
              <NavLink exact className="link_Style" to="/brands">BRANDS</NavLink>
              <NavLink exact className="link_Style" to="/nykaafashion">NYKAA FASHION</NavLink>
              <NavLink exact className="link_Style" to="/beautyadvice">BEAUTY ADVICE</NavLink>
              <NavLink exact className="link_Style" to="/nykaanetwork">NYKAA NETWORK</NavLink>
              <div className="SearchIcon1">
              <div className="searchBar"> <div className="SearchIcon">  <input className="searchText" type="search" autoComplete="off" placeholder="Search on Nykaa" autoCorrect="off"></input>
                          {/* <i className="far fa-search"></i>    */}
                        </div>
              </div></div>

              <div className="AccountImg">
                <button type="button" aria-label="Kebab menu" className="css-cud8se euw1lbv1"></button>
                <span className="css-wevzy7 euw1lbv2">Account</span>
              </div>
              <div><i className="fad fa-shopping-bag"></i></div>
              {/* <i class="far fa-search"></i> */}
              
          </nav>  
          <div className="separtor"></div>
          <div>
          <ul className="MegaDropdownHeadingBox">
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Makeup</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Skin</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Hair</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Appliances</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Personal Care</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Natural</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Mom & Baby</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Health & Wellness</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Men</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">Fragrance</a></li>
              <li className="MegaDropdownHeading"><a target="_blank" href="/">LUXE</a></li>
              <img src={saleImg} alt="saleImg"/>
          </ul></div>
         
         
         
             <div className="main_img">
             <img src={image0} className="sliderimg" alt="img0"/>
             </div>
         
       
         {/* <div ><AliceCarousel autoPlay autoPlayInterval="3000">
                 <img src={image0} className="sliderimg" alt="img0"/>
                  <img src={image1} className="sliderimg" alt="img1"/>
                  <img src={image2} className="sliderimg" alt="img2"/>
                  <img src={image3} className="sliderimg" alt="img3"/>
                  <img src={image4} className="sliderimg" alt="img4"/>
            </AliceCarousel>
    
         </div> */}

         <div  className="css-1lrbsdn">
           <div className="fixed-width-wrapper">
           <img src={time}  alt="time"/>
           </div>
        
        <div className="fixed-width-wrapper">
           <div className="css-ka45i6">
             <div width="25" className="css-510hfz">
               <div className="css-tfn080">
                 <div className="css-swdc2f">
                   <div className="css-18ps25h">
                     <div className="css-swdc2f">
                       <div className="css-18ps25h">
                       <img src={lipstick} className="img_size" alt="lispstick"/>
                       </div>
                     </div>
                   </div>

                 </div>
               </div>

             </div>

             <div width="25" className="css-510hfz">
               <div className="css-tfn080">
                 <div className="css-swdc2f">
                   <div className="css-18ps25h">
                     <div className="css-swdc2f">
                       <div className="css-18ps25h">
                       <img src={skinCare} className="img_size" alt="skincare"/>
                       </div>
                     </div>
                   </div>

                 </div>
               </div>

             </div>

             <div width="25" className="css-510hfz">
               <div className="css-tfn080">
                 <div className="css-swdc2f">
                   <div className="css-18ps25h">
                     <div className="css-swdc2f">
                       <div className="css-18ps25h">
                       <img src={hairTool} className="img_size"  alt="hairRemovalTool"/>
                       </div>
                     </div>
                   </div>

                 </div>
               </div>

             </div>

             <div width="25" className="css-510hfz">
               <div className="css-tfn080">
                 <div className="css-swdc2f">
                   <div className="css-18ps25h">
                     <div className="css-swdc2f">
                       <div className="css-18ps25h">
                       <img src={hairCare} className="img_size" alt="haitCare"/>
                       </div>
                     </div>
                   </div>

                 </div>
               </div>

             </div>
           </div>
        </div>

         {/* <div className="css-1lrbsdn">
           <div className="css-1pkc7zy">
           <img src={image6} className="Img6" alt="img6"/>
           </div></div>  */}
         
         <div className="css-15a7hg9">
               <img src={image7} className="Img7" alt="img7"/>
         

          <div className="fixed-width-wrapper">
            <div className="css-ka45i6">
              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image8} className="img_wrap" alt="img8"/>
                     </div>
                    </div>
                   </div>
                  
                  </div>
                </div>
              </div>
               
              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image9} className="img_wrap" alt="img9"/>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>

              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image10} className="img_wrap"  alt="img10"/>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>
              
              
              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image11} className="img_wrap"  alt="img11"/>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>

              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image12} className="img_wrap" alt="img12"/>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>

              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image13} className="img_wrap"  alt="img13"/>
                     </div>
                  
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>

              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image14} className="img_wrap" alt="img14"/>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>

              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image15} className="img_wrap"  alt="img15"/>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>

              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image16} className="img_wrap" alt="img16"/>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>

              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image17} className="img_wrap" alt="img17"/>
                     </div>
                 
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>

              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image18} className="img_wrap" alt="img18"/>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>


              <div width="33.333333333333336" className="css-10cjyoh">
                <div className="css-tfn080">
                  <div className="css-swdc2f">
                  <div className="css-1yvz4xp ean6sn1">
                   <div className="img_wrap">
                     <div className="css-uwwqev ean6sn0">
                     <div className="img_wrap">
                          <img src={image19} className="img_wrap" alt="img19"/>
                     </div>
                      </div>
                    </div>
                  </div>
                 
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
          
    <div>
    <img  src={Deals} className="css-ka8b8a" alt="Deals"/>
    <div className="fixed-width-wrapper">
      
    </div>

    </div>
         

         
          
        </>
    )
}

export default NavBar
