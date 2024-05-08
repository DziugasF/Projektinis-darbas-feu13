import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" bg-dark text-white pt-5 pb-4 ">
      <div className="d-flex mx-auto container text-center text-md-left ">
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-white">
            Products
          </h5>
          <p className="text-white">Providers</p>
          <p className="text-white">Creativity</p>
          <p className="text-white">Source Files</p>
          <p className="text-white">Lorem ipsum</p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-white">
            Useful links
          </h5>
          <p className="text-white">Your Account</p>
          <p className="text-white">Become an Affiliates</p>
          <p className="text-white">Shipping Rates</p>
          <p className="text-white">Help</p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-white">
            Contacts:
          </h5>
          <Link
            to="/contacts"
            className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-white no-underline"
          >
            Contact US
            <div>
              <InstagramIcon className="list-inline-item" />
              <TwitterIcon className="list-inline-item" />
              <LinkedInIcon className="list-inline-item" />
              <FacebookIcon className="list-inline-item" />
            </div>
          </Link>
        </div>
      </div>
      <hr className="mb-4"></hr>

      <div className="col-md-7 col-lg-8 text-center m-auto">
        <p>
          Copyright 2024 All rights reserved by {""}
          <strong>ComputerStore.com</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
