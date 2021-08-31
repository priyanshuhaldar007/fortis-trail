import React from "react";

import diamond from "../Assets/imgs/diamond.svg";
import gallaryImg from "../Assets/imgs/IMG.png";
import "../Assets/sass/market.scss";
import * as Icons from "react-bootstrap-icons";
import {Tooltip, OverlayTrigger, Button} from "../../node_modules/react-bootstrap/esm";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    <div className="market-tootip">Bundles: 3 Iteam</div>
  </Tooltip>
);

const Market = () => {
  return (
    <div className="market">
      <div className="left">
        <div className="p1">
         <div>
         <p className="fa fa-sliders"></p>
          <span className="text">Filter</span>
         </div>
          <span className="fa fa-arrow-left"></span>
        </div>
        <div className="p2">
          <div className="head">
            <p className="text">Status</p>
            {/* <input className="tick" type="checkbox" /> */}
            <p className="fa fa-chevron-down"></p>
          </div>
          <div className="body">
            <span>Buy Now</span>
            <span>On Auction</span>
            <span>New</span>
            <span>Has Offers</span>
          </div>
        </div>
        <div className="p3">
          <div className="head">
            <p className="text">Price</p>
            <p className="fa fa-chevron-down"></p>
          </div>
          <div className="body">
            <div className="r1 United-States">
              <select name="" id="">
                <option value="1" active>
                  United States Dollar(USD)
                </option>
                <option value="2">Ether(ETH)</option>
              </select>
              <p className="fa fa-chevron-down"></p>
            </div>
            <div className="r2 mitter">
              <input type="number" name="" id="" placeholder="min" />
              <span>to</span>
              <input type="number" name="" id="" placeholder="max" />
            </div>
            <div className="r3 button">
              <button >Apply</button>
            </div>
          </div>
        </div>
        <div className="p4 ">
          <div className="head">
            <p className="text">Collection</p>
            <p className="fa fa-chevron-down"></p>
          </div>
          <div className="body">
           <div className="search-box-set">
              <span className="fa fa-search"></span>
              <input type="text" placeholder="Filter" />
           </div>
          <div className="Filter-item-set">
            <ul>
            <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Someone1</p>
                </li>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Someone1</p>
                </li>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Someone1</p>
                </li>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Someone1</p>
                </li>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Someone1</p>
                </li>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Someone1</p>
                </li>
              </ul> 
          </div>
          </div>
        </div>
        <div className="p5 ">
          <div className="head">
            <p className="text">Chains</p>
            <p className="fa fa-chevron-down"></p>
          </div>
          <div className="body">
            <div className="Chains-iteam">
              <ul>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Ethereum</p>
                </li>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Polygon</p>
                </li>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Klaytn</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p6">
          <div className="head">
            <p className="text">Categories</p>
            <p className="fa fa-chevron-down"></p>
          </div>
          <div className="body">
            <div className="Categories">
              <ul>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Art</p>
                </li>
                <li>
                  <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Music</p>
                </li>
                <li>
                <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Domain Names</p>
                </li>
                <li>
                <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Virtual World</p>
                </li>
                <li>
                <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Trading Cards</p>
                </li>
                <li>
                <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Collectibles</p>
                </li>
                <li>
                <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Sports</p>
                </li>
                <li>
                <div className="Collection-img">
                    <div className="Collection-img-set">
                      <img className="user" src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s64" alt="" />
                    </div>
                  </div>
                  <p>Utility</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p7">
          <div className="head">
            <p className="text">On Sale In</p>
            <p className="fa fa-chevron-down"></p>
          </div>
          <div className="body">
            <div className="search-box-set">
              <span className="fa fa-search"></span>
              <input type="text" placeholder="Filter" />
            </div>
            <div className="Sale-iteam">
              <ul>
                <li>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <label for="vehicle1">ETH</label>
                </li>
                <li>
                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike" />
                  <label for="vehicle2">WETH</label>  
                </li>
                <li>  
                  <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike" />
                  <label for="vehicle3">0XBTC</label>
                </li>
                <li>
                  <input type="checkbox" id="vehicle4" name="vehicle4" value="Bike" />
                  <label for="vehicle4">1337</label>
                </li>
                <li>
                  <input type="checkbox" id="vehicle5" name="vehicle5" value="Bike" />
                  <label for="vehicle5">1MT</label>
                </li>
                <li>
                  <input type="checkbox" id="vehicle6" name="vehicle6" value="Bike" />
                  <label for="vehicle6">2XDN</label>
                </li>
                <li>
                  <input type="checkbox" id="vehicle7" name="vehicle7" value="Bike" />
                  <label for="vehicle7">AC</label>
                </li>
                <li>
                  <input type="checkbox" id="vehicle8" name="vehicle8" value="Bike" />
                  <label for="vehicle8">ADORs</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="filet-title">
          <p className="title-set">17,509,195 results</p>
          <div className="filter-set">
            <div className="item-set">
              <select name="" id="">
                <option value="">All items</option>
                <option value="">Single Items</option>
                <option value="">Bundles</option>
              </select>
              <p className="fa fa-chevron-down"></p>
            </div>
            <div className="item-list">
              <select name="" id="" className="">
                <option value="">Recently Listed</option>
                <option value="">Recently Created</option>
                <option value="">Recently Sold</option>
              </select>
              <p className="fa fa-chevron-down"></p>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="cardbox">
            <div className="card-images">
              <img
                src="https://lh3.googleusercontent.com/1qlTWosKWxoljYWwYpzxidxgnA3Yfk_FN9GJYvrpOHGglwFXsJyJSVrRo2SWRSOA3E4TvADOohc3A5c4fr0proJtxPJxkxg0kjccRQ=s282"
                alt=""
              />
            </div>
            <div className="card-detail">
              <div className="card-title">
                <p>Dwarf Coins</p>
                <p>Price</p>
              </div>
              <div className="card-title card-title-disk">
                <p>Crypto Gothic Girls Club 3x bundle</p>
                <p className="diamond-set">
                  <img src={diamond} alt="" />0
                </p>
              </div>
              <div className="card-title card-title-footer">
                <p>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button variant="success">
                      <img src={gallaryImg} alt="" />
                    </Button>
                  </OverlayTrigger>
                </p>
                <p className="last">
                  {" "}
                  <span>Last</span>
                  <img src={diamond} alt="" /> 0.19
                </p>
              </div>
            </div>
          </div>
          <div className="cardbox">
            <div className="card-images">
              <img
                src="https://lh3.googleusercontent.com/1qlTWosKWxoljYWwYpzxidxgnA3Yfk_FN9GJYvrpOHGglwFXsJyJSVrRo2SWRSOA3E4TvADOohc3A5c4fr0proJtxPJxkxg0kjccRQ=s282"
                alt=""
              />
            </div>
            <div className="card-detail">
              <div className="card-title">
                <p>Dwarf Coins</p>
                <p>Price</p>
              </div>
              <div className="card-title card-title-disk">
                <p>Crypto Gothic Girls Club 3x bundle</p>
                <p className="diamond-set">
                  <img src={diamond} alt="" />0
                </p>
              </div>
              <div className="card-title card-title-footer">
                <p>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button variant="success">
                      <img src={gallaryImg} alt="" />
                    </Button>
                  </OverlayTrigger>
                </p>
                <p className="last">
                  {" "}
                  <span>Last</span>
                  <img src={diamond} alt="" /> 0.19
                </p>
              </div>
            </div>
          </div>
          <div className="cardbox">
            <div className="card-images">
              <img
                src="https://lh3.googleusercontent.com/1qlTWosKWxoljYWwYpzxidxgnA3Yfk_FN9GJYvrpOHGglwFXsJyJSVrRo2SWRSOA3E4TvADOohc3A5c4fr0proJtxPJxkxg0kjccRQ=s282"
                alt=""
              />
            </div>
            <div className="card-detail">
              <div className="card-title">
                <p>Dwarf Coins</p>
                <p>Price</p>
              </div>
              <div className="card-title card-title-disk">
                <p>Crypto Gothic Girls Club 3x bundle</p>
                <p className="diamond-set">
                  <img src={diamond} alt="" />0
                </p>
              </div>
              <div className="card-title card-title-footer">
                <p>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button variant="success">
                      <img src={gallaryImg} alt="" />
                    </Button>
                  </OverlayTrigger>
                </p>
                <p className="last">
                  {" "}
                  <span>Last</span>
                  <img src={diamond} alt="" /> 0.19
                </p>
              </div>
            </div>
          </div>
          <div className="cardbox">
            <div className="card-images">
              <img
                src="https://lh3.googleusercontent.com/1qlTWosKWxoljYWwYpzxidxgnA3Yfk_FN9GJYvrpOHGglwFXsJyJSVrRo2SWRSOA3E4TvADOohc3A5c4fr0proJtxPJxkxg0kjccRQ=s282"
                alt=""
              />
            </div>
            <div className="card-detail">
              <div className="card-title">
                <p>Dwarf Coins</p>
                <p>Price</p>
              </div>
              <div className="card-title card-title-disk">
                <p>Crypto Gothic Girls Club 3x bundle</p>
                <p className="diamond-set">
                  <img src={diamond} alt="" />0
                </p>
              </div>
              <div className="card-title card-title-footer">
                <p>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button variant="success">
                      <img src={gallaryImg} alt="" />
                    </Button>
                  </OverlayTrigger>
                </p>
                <p className="last">
                  {" "}
                  <span>Last</span>
                  <img src={diamond} alt="" /> 0.19
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
