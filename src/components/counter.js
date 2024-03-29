import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, res }) => {
  return (
    <div className="content">
      <div className="counter-wrapper">
        <h1 id="counter" className="counter">
          {counter}
        </h1>
      </div>
      <div className="btn-wrapper">
        <button onClick={inc} className="btn btn-inc">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M37.8292 17.2092H22.7906V2.17054C22.7906 1.48546 21.8604 0 19.9999 0C18.1395 0 17.2092 1.48555 17.2092 2.17054V17.2093H2.17054C1.48554 17.2092 0 18.1395 0 19.9998C0 21.8602 1.48554 22.7906 2.17054 22.7906H17.2093V37.8293C17.2093 38.5142 18.1395 39.9999 20 39.9999C21.8605 39.9999 22.7907 38.5142 22.7907 37.8293V22.7906H37.8295C38.5144 22.7906 40 21.8604 40 19.9998C40 18.1393 38.5142 17.2092 37.8292 17.2092Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="50"
                height="49.9999"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="5" dy="5" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button onClick={dec} className="btn btn-dec">
          <svg
            width="50"
            height="20"
            viewBox="0 0 50 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M35.2943 0H24.7619H15.2381H4.70571C2.1181 0 0 2.17333 0 4.76191C0 7.35048 2.1181 9.52381 4.70571 9.52381H15.2381H24.7619H35.2943C37.8819 9.52381 40 7.35048 40 4.76191C40 2.17333 37.8819 0 35.2943 0Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="50"
                height="19.5238"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="5" dy="5" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button onClick={res} className="btn btn-res">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M39.5056 2.1609C39.176 1.83143 38.7852 1.66615 38.3337 1.66615C37.8824 1.66615 37.4922 1.83143 37.1619 2.1609L33.7767 5.52077C31.9191 3.76709 29.7921 2.40827 27.3964 1.44495C25.001 0.48155 22.535 -6.10352e-05 20.0001 -6.10352e-05C15.2256 -6.10352e-05 11.0592 1.44505 7.49998 4.3359C3.94072 7.22639 1.59707 10.9977 0.468567 15.6508L0.468567 15.833C0.468567 16.0587 0.550933 16.2541 0.715939 16.4189C0.880946 16.5839 1.07614 16.6662 1.30181 16.6662H6.48404C6.86614 16.6662 7.12637 16.4665 7.26538 16.0674C7.99446 14.3314 8.45436 13.3159 8.64554 13.0206C9.86069 11.0414 11.4753 9.4875 13.4893 8.35899C15.5035 7.23058 17.6735 6.66615 19.9998 6.66615C23.4897 6.66615 26.5191 7.85549 29.0888 10.234L25.4944 13.8276C25.1654 14.1575 24.9999 14.5483 24.9999 14.9998C24.9999 15.4511 25.1653 15.8418 25.4944 16.1716C25.8247 16.5015 26.2155 16.6663 26.6669 16.6663H38.3337C38.7851 16.6663 39.1759 16.5015 39.5056 16.1716C39.8352 15.8418 40 15.4512 40 14.9998V3.33282C40 2.8814 39.8362 2.49091 39.5056 2.1609Z"
                fill="white"
              />
              <path
                d="M38.5154 23.3334H33.5154C33.1334 23.3334 32.873 23.5329 32.7344 23.9323C32.0056 25.6685 31.5452 26.6836 31.3545 26.9789C30.1389 28.9576 28.5243 30.5121 26.5108 31.6405C24.4965 32.7693 22.3265 33.3331 20.0001 33.3331C18.3162 33.3331 16.6928 33.0208 15.1305 32.396C13.568 31.7705 12.1702 30.8849 10.9377 29.739L14.5056 26.1714C14.8353 25.8418 15.0003 25.4507 15.0003 24.9996C15.0003 24.5482 14.8353 24.1571 14.5056 23.8277C14.1757 23.4975 13.7852 23.3323 13.3338 23.3323H1.66685C1.21515 23.3323 0.824484 23.4975 0.494654 23.8277C0.164824 24.1572 0 24.5483 0 24.9996L0 36.6666C0 37.1176 0.164824 37.5087 0.494745 37.8384C0.824849 38.1677 1.21552 38.3335 1.66694 38.3335C2.11826 38.3335 2.50875 38.1678 2.83876 37.8384L6.19808 34.4787C8.05584 36.2492 10.1697 37.6124 12.5396 38.5672C14.9094 39.5224 17.3617 39.9994 19.8962 39.9994C24.6535 39.9994 28.8027 38.5541 32.3443 35.6636C35.886 32.7732 38.2124 29.0011 39.324 24.3485C39.3414 24.3138 39.3496 24.253 39.3496 24.1665C39.3496 23.9405 39.2669 23.7458 39.102 23.5803C38.9369 23.4162 38.7414 23.3334 38.5154 23.3334Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="-6.10352e-05"
                width="50"
                height="49.9994"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="5" dy="5" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button className="btn btn-download">
          <svg
            width="51"
            height="52"
            viewBox="0 0 51 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M36.9712 12.3808C36.5114 9.64857 35.1585 7.15505 33.0895 5.2628C30.7905 3.15834 27.8018 2 24.6893 2C22.2842 2 19.941 2.6897 17.9338 3.98951C16.2626 5.06827 14.8744 6.52724 13.8929 8.24264C13.4684 8.16306 13.0263 8.11885 12.5842 8.11885C8.82624 8.11885 5.76681 11.1783 5.76681 14.9362C5.76681 15.4226 5.81986 15.8912 5.90829 16.351C3.47666 18.1195 2 20.9667 2 23.9996C2 26.4489 2.91075 28.8275 4.5731 30.7109C6.27966 32.6385 8.53444 33.7791 10.9395 33.9118C10.9661 33.9118 10.9838 33.9118 11.0103 33.9118H18.6146C19.2778 33.9118 19.8083 33.3812 19.8083 32.7181C19.8083 32.0549 19.2778 31.5243 18.6146 31.5243H11.0457C7.42916 31.3033 4.38742 27.8636 4.38742 23.9907C4.38742 21.4884 5.73144 19.154 7.8978 17.8896C8.40181 17.5978 8.61402 16.9877 8.41949 16.4394C8.24265 15.9619 8.15423 15.4579 8.15423 14.9186C8.15423 12.4781 10.1437 10.4886 12.5842 10.4886C13.1059 10.4886 13.6188 10.577 14.0962 10.7538C14.6798 10.9661 15.3253 10.7008 15.5906 10.1437C17.2441 6.63335 20.8164 4.36973 24.6981 4.36973C29.9151 4.36973 34.2213 8.27801 34.7164 13.4596C34.7695 13.999 35.1762 14.4322 35.7068 14.5207C39.6416 15.1927 42.6126 18.8268 42.6126 22.9739C42.6126 27.3685 39.1553 31.1883 34.8933 31.5155H28.3765C27.7133 31.5155 27.1828 32.046 27.1828 32.7092C27.1828 33.3724 27.7133 33.9029 28.3765 33.9029H34.9375C34.964 33.9029 34.9905 33.9029 35.0259 33.9029C37.7228 33.7084 40.2429 32.4705 42.1174 30.4014C43.9831 28.35 45 25.715 45 22.9739C44.9912 18.0134 41.6046 13.6011 36.9712 12.3808Z"
                fill="white"
              />
              <path
                d="M16.3422 37.6146C15.8735 38.0833 15.8735 38.8349 16.3422 39.3035L22.6644 45.6257C22.8855 45.8468 23.1949 45.9794 23.5044 45.9794C23.8139 45.9794 24.1234 45.8556 24.3444 45.6257L30.6667 39.3035C31.1353 38.8349 31.1353 38.0833 30.6667 37.6146C30.4368 37.3847 30.1273 37.2609 29.8267 37.2609C29.526 37.2609 29.2165 37.3759 28.9866 37.6146L24.6981 41.9031L24.6981 22.1937C24.6981 21.5305 24.1676 21 23.5044 21C22.8413 21 22.3107 21.5305 22.3107 22.1937L22.3107 41.9031L18.0222 37.6146C17.5624 37.146 16.8108 37.146 16.3422 37.6146Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="51"
                height="51.9794"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button className="btn btn-upload">
          <svg
            width="51"
            height="48"
            viewBox="0 0 51 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M36.9712 12.3808C36.5114 9.64857 35.1585 7.15505 33.0895 5.2628C30.7905 3.15834 27.8018 2 24.6893 2C22.2842 2 19.941 2.6897 17.9338 3.98951C16.2626 5.06827 14.8744 6.52724 13.8929 8.24264C13.4684 8.16306 13.0263 8.11885 12.5842 8.11885C8.82624 8.11885 5.76681 11.1783 5.76681 14.9362C5.76681 15.4226 5.81986 15.8912 5.90829 16.351C3.47666 18.1195 2 20.9667 2 23.9996C2 26.4489 2.91075 28.8275 4.5731 30.7109C6.27966 32.6385 8.53444 33.7791 10.9395 33.9118C10.9661 33.9118 10.9838 33.9118 11.0103 33.9118H18.6146C19.2778 33.9118 19.8083 33.3812 19.8083 32.7181C19.8083 32.0549 19.2778 31.5243 18.6146 31.5243H11.0457C7.42916 31.3033 4.38742 27.8636 4.38742 23.9907C4.38742 21.4884 5.73144 19.154 7.8978 17.8896C8.40181 17.5978 8.61402 16.9877 8.41949 16.4394C8.24265 15.9619 8.15423 15.4579 8.15423 14.9186C8.15423 12.4781 10.1437 10.4886 12.5842 10.4886C13.1059 10.4886 13.6188 10.577 14.0962 10.7538C14.6798 10.9661 15.3253 10.7008 15.5906 10.1437C17.2441 6.63335 20.8164 4.36973 24.6981 4.36973C29.9151 4.36973 34.2213 8.27801 34.7164 13.4596C34.7695 13.999 35.1762 14.4322 35.7068 14.5207C39.6416 15.1927 42.6126 18.8268 42.6126 22.9739C42.6126 27.3685 39.1553 31.1883 34.8933 31.5155H28.3765C27.7133 31.5155 27.1828 32.046 27.1828 32.7092C27.1828 33.3724 27.7133 33.9029 28.3765 33.9029H34.9375C34.964 33.9029 34.9905 33.9029 35.0259 33.9029C37.7228 33.7084 40.2429 32.4705 42.1174 30.4014C43.9831 28.35 45 25.715 45 22.9739C44.9912 18.0134 41.6046 13.6011 36.9712 12.3808Z"
                fill="white"
              />
              <path
                d="M30.6667 25.1314C31.1353 24.6628 31.1353 23.9112 30.6667 23.4425L24.3444 17.1203C24.1234 16.8992 23.8139 16.7666 23.5044 16.7666C23.1949 16.7666 22.8855 16.8904 22.6644 17.1203L16.3422 23.4425C15.8735 23.9112 15.8735 24.6628 16.3422 25.1314C16.5721 25.3613 16.8816 25.4851 17.1822 25.4851C17.4828 25.4851 17.7923 25.3701 18.0222 25.1314L22.3107 20.8429V40.5523C22.3107 41.2155 22.8413 41.746 23.5044 41.746C24.1676 41.746 24.6981 41.2155 24.6981 40.5523V20.8429L28.9866 25.1314C29.4464 25.6 30.198 25.6 30.6667 25.1314Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="51"
                height="47.746"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { counter: state };
};

Counter.propTypes = {
  counter: PropTypes.func,
  dec: PropTypes.func,
  inc: PropTypes.func,
  res: PropTypes.func,
};

export default connect(mapStateToProps, actions)(Counter);
