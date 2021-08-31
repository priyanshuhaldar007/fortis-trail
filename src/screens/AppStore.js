import React from "react";
import appimage from "../Assets/images/messanger.png";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import logo from "../Assets/imgs/logo.png";
import bannerImg1 from "../Assets/imgs/banner1.png";
import bannerImg2 from "../Assets/imgs/banner2.jpeg";
import bannerImg3 from "../Assets/imgs/banner3.jpeg";
import Ccontainer from "../components/Ccontainer";
import * as Icons from "react-bootstrap-icons";
import "../Assets/sass/Top.scss";
import "../Assets/sass/Top.scss";
import "../Assets/sass/recomsec.scss";
import c1 from "../Assets/imgs/c1.png";
import "../Assets/sass/leftpane.scss";
import "../Assets/sass/rightpane.scss";
import "../Assets/sass/app.scss";
import AppStoreData from "../feed/appStore.json";
export default function AppStore() {
  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="card"
        style={{ width: "40%", maxWidth: "90vw", minWidth: "300px" }}
      >
        <img className="medium" src={appimage} alt={"Mega"} />
        <div className="card-body">
          <h2>{"MegaHoot Messenger"}</h2>
          <li>
            Description:
            <p>
              {
                "The MegaHoot Messenger is the ONLY messenger service that will also allow members to use the mobile application to join a VeroHive meeting when invited, whatever the Channel may be, they will not be able to host a VeroHive meeting via the MegaHoot Messenger but they will be able to have in messenger conferences of up to 4 people, one on one “Facetime” type of video calls and much more."
              }
            </p>
          </li>
          <Rating rating={5} numReviews={10}></Rating>
          <Link>
            <h2>{"Download MegaHoot Messenger"}</h2>
          </Link>
          <div className="row">
            <div className="price">
              <p style={{ fontSize: "13px" }}>{0} XMG</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <div className="Top-part">
          <div className="left-part">
            <img src={logo} alt="logo" />
            <p>fortis web store</p>
          </div>
          <div className="right-part">
            <span>
              <Icons.GearFill />
              <ul className="hidden settings">
                <li>My Extensions & Apps</li>
                <li>Language: English</li>
                <li>Location: India</li>
                <li>Developer Dashboard</li>
                <li>Help</li>
              </ul>
            </span>
            <p className="email">
              fortisbloggers@gmail.com{" "}
              <span>
                <Icons.ChevronDown />
              </span>
              <ul className="hidden optn">
                <li>Sign in with another account...</li>
                <li>Sign out</li>
              </ul>
            </p>
          </div> */}
        {/* </div> */}
        <div className="leftpane">
          <section className="first">
            <div className="searchbar">
              <p className="searchicon">
                <Icons.Search />
              </p>
              <input
                className="search"
                type="text"
                placeholder="Search the store"
              />
            </div>
            <div className="extension">
              <p className="extension-icon">
                <Icons.PuzzleFill />
              </p>
              <p>Extensions</p>
            </div>
            <div className="themes">
              <p className="themes-icon">
                <Icons.BrushFill />
              </p>
              <p>Themes</p>
            </div>
            <div className="seperator"></div>
          </section>

          <section className="second">
            <div className="categories">
              <h1>Categories</h1>
              <select name="" className="second-dropdown">
                <option value="1">All</option>
                <option value="2">Fun</option>
                <option value="3">Photos</option>
                <option value="4">Search Tool</option>
                <option value="5">Sports</option>
                <option value="6">Recommended for you</option>
              </select>
            </div>
            <div className="features">
              <h1>Features</h1>
              <input type="checkbox" id="Runs Offline" name="Runs Offline" />
              <label for="Runs Offline"> Runs Offline</label>
              <br />
              <input type="checkbox" id="By megahoot" name="By megahoot" />
              <label for="By megahoot"> By megahoot</label>
              <br />
              <input type="checkbox" id="Free" name="Free" />
              <label for="vehicle1"> Free</label>
              <br />
              <input
                type="checkbox"
                id="Available for Android"
                name="Available for Android"
              />
              <label for="vehicle1"> Available for Android</label>
              <br />
              <input
                type="checkbox"
                id="Works with megahoot Drive"
                name="Works with megahoot Drive"
              />
              <label for="vehicle1"> Works with megahoot Drive</label>
              <br />
            </div>

            <div className="features">
              <h1>Features</h1>
              <input type="radio" id="Runs Offline" name="Runs Offline" />
              <label for="Runs Offline">
                {" "}
                <Icons.StarFill /> <Icons.StarFill /> <Icons.StarFill />{" "}
                <Icons.StarFill /> <Icons.StarFill />
              </label>
              <br />
              <input type="radio" id="By megahoot" name="By megahoot" />
              <label for="By megahoot">
                {" "}
                <Icons.StarFill /> <Icons.StarFill /> <Icons.StarFill />{" "}
                <Icons.StarFill /> <Icons.StarFill />
              </label>
              <br />
              <input type="radio" id="Free" name="Free" />
              <label for="vehicle1">
                {" "}
                <Icons.StarFill /> <Icons.StarFill /> <Icons.StarFill />{" "}
                <Icons.StarFill /> <Icons.StarFill />
              </label>
              <br />
              <input
                type="radio"
                id="Available for Android"
                name="Available for Android"
              />
              <label for="vehicle1">
                {" "}
                <Icons.StarFill /> <Icons.StarFill /> <Icons.StarFill />{" "}
                <Icons.StarFill /> <Icons.StarFill />
              </label>
              <br />
              <input
                type="radio"
                id="Works with megahoot Drive"
                name="Works with megahoot Drive"
              />
              <label for="vehicle1">
                {" "}
                <Icons.StarFill /> <Icons.StarFill /> <Icons.StarFill />{" "}
                <Icons.StarFill /> <Icons.StarFill />
              </label>
              <br />
            </div>
            <div className="seperator"></div>
          </section>
        </div>
        <div className="rightpane">
          <div className="carosul">
            <Ccontainer />
          </div>
          <div className="recom-body">
            <div className="heading">
              <p>Recommended For You</p>
              <span>View all</span>
            </div>
            <div className="cards-part">
              {AppStoreData.map((data) => {
                return (
                  <div className="card1">
                    <div className="upper-part">
                      {" "}
                      <img src={bannerImg1} alt="" />
                    </div>
                    <div className="lower-part">
                      <p>{data.name}</p>
                      <span>
                        {" "}
                        <Icons.StarFill /> <Icons.StarFill /> <Icons.StarFill />{" "}
                        <Icons.StarFill /> <Icons.StarFill /> {data.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
