

const Footer = () => (
  <footer className="flex flex-col justify-center bg-[#1E2F23] text-[#ffffff] w-full px-0 lg:px-6 py-10">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-col space-y-10 lg:space-y-0 lg:space-x-10">
        <div className=" w-full">
          <div className="space-y-3 flex flex-col lg:flex-row w-full lg:justify-between lg:px-20">
            <div className="text-4xl lg:text-5xl">
              <a href="#" className="text-xl font-bold">
                <span className="text-[#01A165] text-2xl font-normal brandLogo">
                  <span className="text-[#c0f500]">Code</span> Banana ®
                </span></a>

              <div className="text-[#7E7E7E] text-sm">Our Company gives the best solution!</div>
            </div>

            <div className="mt-2">
              <div className="mb-4">
                <span>Address</span>
                <div className="text-[#7E7E7E]">Address:</div>
              </div>
              <span>Contact</span>
              <div className="flex justify-start space-x-2 items-center mb-4 mt-2">
                <span>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5569 10.906L12.1019 11.359C12.1019 11.359 11.0189 12.435 8.06386 9.49698C5.10886 6.55898 6.19186 5.48298 6.19186 5.48298L6.47786 5.19698C7.18486 4.49498 7.25186 3.36698 6.63486 2.54298L5.37486 0.859979C4.61086 -0.160021 3.13586 -0.29502 2.26086 0.57498L0.690856 2.13498C0.257856 2.56698 -0.032144 3.12498 0.002856 3.74498C0.092856 5.33198 0.810856 8.74498 4.81486 12.727C9.06186 16.949 13.0469 17.117 14.6759 16.965C15.1919 16.917 15.6399 16.655 16.0009 16.295L17.4209 14.883C18.3809 13.93 18.1109 12.295 16.8829 11.628L14.9729 10.589C14.1669 10.151 13.1869 10.28 12.5569 10.906Z" fill="white" />
                  </svg>
                </span>
                <div className="text-[#7E7E7E]">+91-9756232332</div>
              </div>

              <div className="flex justify-start space-x-3 items-center mb-4">
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_290_3999)">
                      <path d="M12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0ZM8.67 13.125C8.86012 15.343 9.55979 17.4872 10.7145 19.3905C11.097 20.0295 11.5275 20.6385 12 21.213C12.3675 20.769 12.8265 20.1555 13.2855 19.3905C14.4402 17.4872 15.1399 15.343 15.33 13.125H8.67ZM15.33 10.875C15.1399 8.65697 14.4402 6.51278 13.2855 4.6095C12.825 3.8445 12.3675 3.231 12 2.787C11.5265 3.36151 11.0968 3.97072 10.7145 4.6095C9.55979 6.51278 8.86012 8.65697 8.67 10.875H15.33ZM6.414 13.125H2.3145C2.53753 15.0371 3.321 16.8405 4.56635 18.3085C5.81171 19.7764 7.46334 20.8433 9.3135 21.375C9.129 21.1035 8.9535 20.8275 8.7855 20.547C7.713 18.759 6.63 16.236 6.414 13.125ZM2.3145 10.875H6.414C6.63 7.764 7.713 5.241 8.784 3.453C8.964 3.1575 9.1395 2.8815 9.3135 2.625C7.46334 3.15668 5.81171 4.22359 4.56635 5.69154C3.321 7.15949 2.53753 8.96292 2.3145 10.875ZM17.586 13.125C17.37 16.236 16.287 18.759 15.216 20.547C15.036 20.8425 14.8605 21.1185 14.6865 21.375C16.5367 20.8433 18.1883 19.7764 19.4336 18.3085C20.679 16.8405 21.4625 15.0371 21.6855 13.125H17.586ZM21.6855 10.875C21.4625 8.96292 20.679 7.15949 19.4336 5.69154C18.1883 4.22359 16.5367 3.15668 14.6865 2.625C14.871 2.8965 15.0465 3.1725 15.216 3.453C16.287 5.241 17.37 7.764 17.586 10.875H21.6855Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_290_3999">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <a href="mailto:info.fitearn@gmail.com?subject=Client%20Enquiry&body=Hello%2C%0A%0AI%20am%20reaching%20out%20to%20inquire%20about%20your%20services%20and%20products.%20I'm%20interested%20in%20learning%20more%20and%20would%20appreciate%20additional%20details%20and%20any%20relevant%20documentation%20or%20resources.%0A%0ACould%20we%20schedule%20a%20call%20or%20meeting%20to%20discuss%20further%3F%20Please%20let%20me%20know%20your%20availability.%0A%0AThank%20you%20for%20your%20time.%20I%20look%20forward%20to%20your%20response.%0A%0ABest%20regards%2C">info.fitearn@gmail.com</a>

              </div>
            </div>

            <ul className="space-y-2 flex flex-col">
              <li><a>Home</a></li>
              <li><a>Services</a></li>
              <li><a>Portfolio</a></li>
              <li><a>Clients</a></li>
            </ul>

            <div className="mt-2">
              <span>Follow us</span>
              <div>
                <ul className="flex space-x-4 justify-start items-center mt-2">
                  <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="white" />
                    </svg>
                  </li>
                  <li><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.212 2.65593C20.4489 2.99352 19.6396 3.2153 18.811 3.31393C19.6841 2.79106 20.3373 1.96866 20.649 0.999927C19.829 1.48793 18.93 1.82993 17.994 2.01493C17.3646 1.34151 16.5304 0.89489 15.621 0.744511C14.7116 0.594133 13.7779 0.748418 12.9653 1.18338C12.1526 1.61834 11.5064 2.30961 11.1271 3.14972C10.7478 3.98983 10.6568 4.93171 10.868 5.82893C9.20494 5.74572 7.57797 5.31365 6.09274 4.56079C4.60752 3.80793 3.29724 2.7511 2.247 1.45893C1.87529 2.09738 1.67996 2.82315 1.681 3.56193C1.681 5.01193 2.42 6.29293 3.541 7.04293C2.87702 7.02198 2.22765 6.84267 1.647 6.51993V6.57093C1.64697 7.5368 1.98104 8.47295 2.59253 9.2206C3.20403 9.96825 4.05532 10.4814 5.002 10.6729C4.38564 10.8401 3.7393 10.8648 3.112 10.7449C3.37893 11.5763 3.89922 12.3034 4.6 12.8243C5.30078 13.3453 6.14696 13.6339 7.02 13.6499C6.15236 14.3314 5.15889 14.8351 4.09641 15.1323C3.03393 15.4295 1.92329 15.5143 0.828003 15.3819C2.73972 16.6113 4.96511 17.264 7.238 17.2619C14.932 17.2619 19.138 10.8889 19.138 5.36193C19.138 5.18193 19.134 4.99993 19.126 4.82093C19.9444 4.22928 20.6508 3.49549 21.212 2.65593Z" fill="white" />
                  </svg>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.244 4C12.778 4.003 14.114 4.016 15.534 4.073L16.038 4.095C17.467 4.162 18.895 4.278 19.604 4.475C20.549 4.741 21.291 5.515 21.542 6.497C21.942 8.057 21.992 11.099 21.998 11.836L21.999 11.988V12.162C21.992 12.899 21.942 15.942 21.542 17.501C21.288 18.486 20.545 19.261 19.604 19.523C18.895 19.72 17.467 19.836 16.038 19.903L15.534 19.926C14.114 19.982 12.778 19.996 12.244 19.998L12.009 19.999H11.754C10.624 19.992 5.898 19.941 4.394 19.523C3.45 19.257 2.707 18.483 2.456 17.501C2.056 15.941 2.006 12.899 2 12.162V11.836C2.006 11.099 2.056 8.056 2.456 6.497C2.71 5.512 3.453 4.737 4.395 4.476C5.898 4.057 10.625 4.006 11.755 4H12.244ZM9.999 8.5V15.5L15.999 12L9.999 8.5Z" fill="white" />
                  </svg>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 1.875C4.18641 1.875 3.64591 2.09888 3.2474 2.4974C2.84888 2.89591 2.625 3.43641 2.625 4C2.625 4.56359 2.84888 5.10409 3.2474 5.5026C3.64591 5.90112 4.18641 6.125 4.75 6.125C5.31359 6.125 5.85409 5.90112 6.2526 5.5026C6.65112 5.10409 6.875 4.56359 6.875 4C6.875 3.43641 6.65112 2.89591 6.2526 2.4974C5.85409 2.09888 5.31359 1.875 4.75 1.875ZM2.75 7.875C2.71685 7.875 2.68505 7.88817 2.66161 7.91161C2.63817 7.93505 2.625 7.96685 2.625 8V21C2.625 21.069 2.681 21.125 2.75 21.125H6.75C6.78315 21.125 6.81495 21.1118 6.83839 21.0884C6.86183 21.0649 6.875 21.0332 6.875 21V8C6.875 7.96685 6.86183 7.93505 6.83839 7.91161C6.81495 7.88817 6.78315 7.875 6.75 7.875H2.75ZM9.25 7.875C9.21685 7.875 9.18505 7.88817 9.16161 7.91161C9.13817 7.93505 9.125 7.96685 9.125 8V21C9.125 21.069 9.181 21.125 9.25 21.125H13.25C13.2832 21.125 13.3149 21.1118 13.3384 21.0884C13.3618 21.0649 13.375 21.0332 13.375 21V14C13.375 13.5027 13.5725 13.0258 13.9242 12.6742C14.2758 12.3225 14.7527 12.125 15.25 12.125C15.7473 12.125 16.2242 12.3225 16.5758 12.6742C16.9275 13.0258 17.125 13.5027 17.125 14V21C17.125 21.069 17.181 21.125 17.25 21.125H21.25C21.2832 21.125 21.3149 21.1118 21.3384 21.0884C21.3618 21.0649 21.375 21.0332 21.375 21V12.38C21.375 9.953 19.265 8.055 16.85 8.274C16.1028 8.34202 15.3709 8.52694 14.681 8.822L13.375 9.382V8C13.375 7.96685 13.3618 7.93505 13.3384 7.91161C13.3149 7.88817 13.2832 7.875 13.25 7.875H9.25Z" fill="white" />
                  </svg>
                  </li>
                  <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white" />
                  </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-10 pb-10 pt-10">

          {/* <ul className="space-y-3">
            <li>Logo Design</li>
            <li>Website Design</li>
            <li>Packing Design</li>
            <li>Brand Design</li>
            <li>E-commerce Website Design</li>
          </ul> */}

          {/* <div>
            <h3>All Major Cards & Net Banking Accepted</h3>
            <ul className="flex">
              <li>Logo Design</li>
              <li>Website Design</li>
              <li>Packing Design</li>
              <li>Brand Design</li>
            </ul>
          </div> */}

        </div>
      </div>
    </div>

    <div className="border-2 lg:mt-10" />

    <div className="text-center pt-10">
      Copyright © {new Date().getFullYear() - 1}-{new Date().getFullYear()}. All rights
      reserved
    </div>
  </footer>
);

export default Footer;