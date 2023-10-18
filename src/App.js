import ServicesImages from "./Assets/ServiceIcons.png";
import Image1 from "./Assets/Image1.png";
import Image2 from "./Assets/Image2.png";
import JuliaDoe from "./Assets/JuliaDoe.png";
import JuliaDoe2 from "./Assets/JuliaDoe2.png";
import RobertDoe from "./Assets/RobertDoe.png";
import EmptyStar from "./Assets/EmptyStar.png";
import Rectangle_15 from "./Assets/Rectangle_15.png";
import Rectangle_16 from "./Assets/Rectangle_16.png";
import Rectangle_17 from "./Assets/Rectangle_17.png";
import Rectangle_18 from "./Assets/Rectangle_18.png";
import FillStar from "./Assets/FillStar.svg";
import LinkedIn from "./Assets/LinkedIn.svg";
import Facebook from "./Assets/Facebook.svg";
import Twitter from "./Assets/Twitter.svg";
import DoubleQuote from "./Assets/DoubleQuote.svg";
import Rectangle_20 from "./Assets/Team/Rectangle_20.png";
import Rectangle_20_1 from "./Assets/Team/Rectangle_20_1.png";
import Rectangle_20_2 from "./Assets/Team/Rectangle_20_2.png";
import "./App.css";

// Data
const nav1 = ["Home", "About Us", "Portofolio"];
const nav2 = ["Expertise", "Clients", "Services", "Contact Us"];

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <header>
            <div>
              {nav1.map((val) => (
                <div>{val}</div>
              ))}
            </div>
            <div>
              {nav2.map((val) => (
                <div className="nav">{val}</div>
              ))}
            </div>
            <i
              className="fa-solid fa-bars"
              id="hamMenu"
              style={{ color: "white" }}
            ></i>
          </header>
          <div className="section_1">
            <div>
              <h1>
                Software solution providers that help brands thrive and stand
                out
              </h1>
              <p>
                Since 2014, we have been exploring the world of design and
                development offering our expertise in web and mobile. It is
                perfect fusion of innovation, development and execution at one
                place.
              </p>
              <div className="explore_btn">EXPLORE MORE</div>
            </div>
            <div className="serviceImageContainer">
              <img src={ServicesImages} alt="servicesIcons" />
            </div>
          </div>
        </main>
        <div className="section_2">
          <div>
            <p className="blueText">Services</p>
            <h2 className="heading_position_2">
              We provide All-in-one Solution for every IT job
            </h2>
          </div>

          <div className="card_container">
            <div className="card">
              <h3 className="cardHeading">Software Development</h3>
              <p className="cardPara">
                Posuere morbi leo urna molestie at elementum eu egestas.
              </p>
              <button className="learn_more">Learn more</button>
            </div>
            <div className="card">
              <h3 className="cardHeading">AI Programmer & Technical</h3>
              <p className="cardPara">
                Posuere morbi leo urna molestie at elementum eu egestas.
              </p>
              <button className="learn_more">Learn more</button>
            </div>
            <div className="card">
              <h3 className="cardHeading">System Application Development</h3>
              <p className="cardPara">
                Posuere morbi leo urna molestie at elementum eu egestas.
              </p>
              <button className="learn_more">Learn more</button>
            </div>
            <div className="card">
              <h3 className="cardHeading">Server and Network Solutions</h3>
              <p className="cardPara">
                Posuere morbi leo urna molestie at elementum eu egestas.
              </p>
              <button className="learn_more">Learn more</button>
            </div>
          </div>
        </div>
        <div className="company_info">
          <div>
            <p className="value">782</p>
            <p className="valueTitle">WORLDWIDE CUSTOMERS</p>
          </div>
          <div>
            <p className="value">12 K</p>
            <p className="valueTitle">PORJECTS DONE</p>
          </div>
          <div>
            <p className="value">5896</p>
            <p className="valueTitle">IT PRODUCTS</p>
          </div>
          <div>
            <p className="value">$ 890 K</p>
            <p className="valueTitle">PROJECTS SPEND</p>
          </div>
        </div>
        <div className="section_3">
          <div>
            <p className="blueText">FEW WORDS ABOUT US</p>
            <h2 className="heading_position_2">
              We Are Leaders in It Solutions
            </h2>
            <p>
              Aliquam a diam gravida, pretium justo non, facilisis eros. Integer
              posuere semper condimentum. Praesent tortor dui, auctor a
              condimentum vitae, aliquam at quam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse consequat lacus a sapien
              pretium, sit amet finibus ex.
            </p>
            <ul className="points">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="section_3_image_container">
            <img src={Image1} alt="" className="image_1" />
            <img src={Image2} alt="" className="image_2" />
          </div>
        </div>
        <div className="section_4">
          <div>
            <p className="blueText">WE LOVE OUR WORK</p>
            <h2 className="heading_position_2">FIND OUT MORE</h2>
          </div>

          <div>
            <div className="vertical_text border_Active">Our Mission</div>
            <div className="active_vertical">
              <img src={Image1} alt="person1" />
              <div>
                <h4>Our Mission</h4>
                <p>
                  Integer non velit nec nunc pulvinar porttitor. Vivamus
                  euismod, mauris ac pellentesque commodo, est nunc dapibus
                  metus, vel dapibus felis lacus sit amet urna. Curabitur
                  feugiat bibendum ex, id mollis enim sollicitudin dictum.
                  Aenean ullamcorper volutpat lacus.
                </p>
                <div className="blue_btn">Learn more</div>
              </div>
            </div>
            <div className="vertical_text">Our Company</div>
            <div className="vertical_text">Our Customer</div>
          </div>
        </div>
        <div className="section_5">
          <div>
            <p className="blueText">TESTIMONIALS</p>
            <h2 className="heading_position_2">Our successful clients</h2>
          </div>

          <div className="client_container">
            <div className="client_card">
              <img src={DoubleQuote} alt="doubleQuote" />
              <p>
                Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas
                pretium aenean pharetra magna ac placerat vestibulum.
              </p>
              {/* <!-- starts / rating --> */}
              <div className="starts_container">
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={EmptyStar} alt="empty star" />
              </div>
              <img src={JuliaDoe} alt="juilaDoe" />
              <div className="client_details">
                <h4>Julia Doe</h4>
                <p>Businesswoman</p>
              </div>
            </div>
            <div className="client_card">
              <img src={DoubleQuote} alt="doubleQuote" />
              <p>
                Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas
                pretium aenean pharetra magna ac placerat vestibulum.
              </p>
              {/* <!-- starts / rating --> */}
              <div className="starts_container">
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={FillStar} alt="star" />
                <img src={EmptyStar} alt="star" />
              </div>
              <img src={RobertDoe} alt="RobertDoe" />
              <div className="client_details">
                <h4>ROBERT DOE</h4>
                <p>Businesswoman</p>
              </div>
            </div>
            <div className="client_card">
              <img src={DoubleQuote} alt="double quote" />
              <p>
                Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas
                pretium aenean pharetra magna ac placerat vestibulum.
              </p>
              {/* <!-- starts / rating --> */}
              <div className="starts_container">
                <img src={FillStar} alt="Star" />
                <img src={FillStar} alt="Star" />
                <img src={FillStar} alt="Star" />
                <img src={FillStar} alt="Star" />
                <img src={EmptyStar} alt="Star" />
              </div>
              <img src={JuliaDoe2} alt="juliadoe2" />
              <div className="client_details">
                <h4>Julia Doe</h4>
                <p>Businesswoman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_6">
          <div>
            <div>
              <img src={Rectangle_15} alt="rectangle" className="rect_images" />
            </div>
            <div>
              <img src={Rectangle_16} alt="rectangle" className="rect_images" />
            </div>
            <div>
              <img src={Rectangle_17} alt="rectangle" className="rect_images" />
            </div>
            <div>
              <img src={Rectangle_18} alt="rectangle" className="rect_images" />
            </div>
          </div>
          <div>
            <p className="blueText">PROJECTS</p>
            <h2 className="heading_position_2">
              Our amazing project that has been completed
            </h2>
            <p>
              Turpis cursus in hac habitasse platea dictumst quisque sagittis
              purus. Ligula ullamcorper malesuada proin libero nunc consequat.
              <br />
              Dignissim sodales ut eu sem integer vitae justo. Tincidunt tortor
              aliquam nulla facilisi cras.
            </p>
            <div className="blue_btn">Recent Projects</div>
          </div>
        </div>
        <div className="section_7">
          <div>
            <p className="blueText">TEAM</p>
            <h2 className="heading_position_2">Our certified experts</h2>
          </div>
          <div className="team_container">
            <div className="developer_card">
              <img src={Rectangle_20_1} alt="team" />
              <h4>SEBASTIAN DOE</h4>
              <p>Code Expert</p>
              <div className="social_links_container">
                <img src={Facebook} alt="social_icon" />
                <img src={Twitter} alt="social_icon" />
                <img src={LinkedIn} alt="social_icon" />
              </div>
            </div>
            <div className="developer_card">
              <img src={Rectangle_20_2} alt="rect" />
              <h4>SEBASTIAN DOE</h4>
              <p>Design Expert</p>
              <div className="social_links_container">
                <img src={Facebook} alt="social_icon" />
                <img src={Twitter} alt="social_icon" />
                <img src={LinkedIn} alt="social_icon" />
              </div>
            </div>
            <div className="developer_card">
              <img src={Rectangle_20} alt="rect" />
              <h4>SEBASTIAN DOE</h4>
              <p>Human Resources</p>
              <div className="social_links_container">
                <img src={Facebook} alt="social_icon" />
                <img src={Twitter} alt="social_icon" />
                <img src={LinkedIn} alt="social_icon" />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div>
            <div>
              <div>
                <p>
                  Digital experience is always embedded in a physical
                  experience.
                </p>
              </div>
              <div className="parent_link_container">
                <h4>Services</h4>
                <div className="links_container">
                  <div>Web Hosting</div>
                  <div>Domains</div>
                  <div>Premium Hosting</div>
                  <div>Private Server</div>
                  <div>E-mail Hosting</div>
                </div>
              </div>
              <div className="parent_link_container">
                <h4>Follow us</h4>
                <div className="links_container">
                  <div>Facebook</div>
                  <div>Twitter</div>
                  <div>Instagram</div>
                  <div>Linkedin</div>
                </div>
              </div>
              <div className="parent_link_container">
                <h4>Contact us</h4>
                <div className="links_container">
                  <a href="mailto:ak7859437@gmail.com">emailaddress@mail.com</a>
                </div>
              </div>
            </div>
            <div>
              <p>Design with love © Hardik Ramani 2023. All right reserved</p>
              <p>Claim Privacy Terms</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
