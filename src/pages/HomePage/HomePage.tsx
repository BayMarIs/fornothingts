import React, { useRef, useState, useEffect } from "react";
import "./HomePage.css";
import logo from "./1327029.svg";
import indicator from "./hand_finger_pointing_down_like_an_arrow_snr2sy12qnoh.svg";
import "./HomepageAdap.css";
type MainRoutesProps = {
  goToWork: () => void;
  goToHomePage: () => void;
};

const HomePage = ({ goToWork, goToHomePage }: MainRoutesProps) => {
  //Анимации для выдвижного текста //
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblef, setIsVisiblef] = useState(false);
  const [isVisibles, setIsVisibles] = useState(false);
  const [isVisiblet, setIsVisiblet] = useState(false);
  const [isVisiblefo, setIsVisiblefo] = useState(false);
  const [isVisibleSel, setIsVisibleSel] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pElemFirst = useRef<HTMLHeadingElement>(null);
  const pElemSecond = useRef<HTMLHeadingElement>(null);
  const pElemThird = useRef<HTMLHeadingElement>(null);
  const pElemFourth = useRef<HTMLHeadingElement>(null);
  const pElemSelect = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    goToHomePage();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const { top, bottom } = titleRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Анимации группы p
  useEffect(() => {
    const handleScroll = () => {
      if (pElemSecond.current) {
        const { top, bottom } = pElemSecond.current.getBoundingClientRect();
        const isVisibles = top < window.innerHeight && bottom >= 0;
        setIsVisibles(isVisibles);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (pElemFirst.current) {
        const { top, bottom } = pElemFirst.current.getBoundingClientRect();
        const isVisiblef = top < window.innerHeight && bottom >= 0;
        setIsVisiblef(isVisiblef);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (pElemThird.current) {
        const { top, bottom } = pElemThird.current.getBoundingClientRect();
        const isVisiblet = top < window.innerHeight && bottom >= 0;
        setIsVisiblet(isVisiblet);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (pElemFourth.current) {
        const { top, bottom } = pElemFourth.current.getBoundingClientRect();
        const isVisiblefo = top < window.innerHeight && bottom >= 0;
        setIsVisiblefo(isVisiblefo);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (pElemSelect.current) {
        const { top, bottom } = pElemSelect.current.getBoundingClientRect();
        const isVisibleSel = top < window.innerHeight && bottom >= 0;
        setIsVisibleSel(isVisibleSel);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // конец анимация группы p
  //Анимации для выдвижного текста //
  // Анимация для пальца//
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prevShowFirstImage) => !prevShowFirstImage);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  // Анимация для пальца конец//
  const circle = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="#bfbfbf"
          stroke-width="2"
          fill="none"
        />
      </svg>
    </>
  );

  const verstk = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 100 100"
        className="HomePage_clients__block__svgTR"
      >
        <path
          d="M0,0 L100,0 L100,100 "
          fill="none"
          stroke="#bfbfbf"
          stroke-width="8"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 100 100"
        className="HomePage_clients__block__svgLB"
      >
        <path
          d="M0,0 L100,0 L100,100 "
          fill="none"
          stroke="#bfbfbf"
          stroke-width="8"
          transform="rotate(180, 50, 50)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 100 100"
        className="HomePage_clients__block__svgBR"
      >
        <path
          d="M0,0 L100,0 L100,100 "
          fill="none"
          stroke="#bfbfbf"
          stroke-width="8"
          transform="rotate(90, 50, 50)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 100 100"
        className="HomePage_clients__block__svgTL"
      >
        <path
          d="M0,0 L100,0 L100,100 "
          fill="none"
          stroke="#bfbfbf"
          stroke-width="10"
          transform="rotate(270, 50, 50)"
        />
      </svg>
    </>
  );
  return (
    <div className="HomePage">
      <div className="HomePage__choice">
        <li style={{ listStyleType: "none" }}>{circle}</li>
        <h1 className="HomePage__choice__title">
          WE EMPOWER FAST-GROWTH COMPANIES TO REALIZE THE TRUE POTENTIAL OF
          THEIR MOST VALUABLE DIGITAL ASSETS.
        </h1>
        <ul className="HomePage__choice__navigate">
          <li
            className="HomePage__choice__navigate__item"
            onClick={() => goToWork()}
          >
            WORK
          </li>
          <li style={{ listStyleType: "none" }}>{circle}</li>
          <li className="HomePage__choice__navigate__item">
            <div className="HomePage__choice__navigate__item__inp">
              <input
                type="text"
                name=""
                id=""
                placeholder="TRENDS. NEWS. ADVICE."
                className="HomePage__choice__navigate__item__inp__inp"
              />
              <span className="HomePage__choice__navigate__item__p">
                SUBSCRIBE
              </span>
            </div>
            VIBES
          </li>
          <li style={{ listStyleType: "none" }}>{circle}</li>
          <li
            className="HomePage__choice__navigate__item"
            id="HomePage__choice__navigate__item"
          >
            SERVICES
          </li>
          {showFirstImage ? (
            <img
              className="HomePage__choice__navigate__like"
              src={logo}
              alt=""
            />
          ) : (
            <img
              className="HomePage__choice__navigate__like"
              src={indicator}
              alt=""
            />
          )}
        </ul>
      </div>
      <div className="HomePage__Work">
        {/* <VisibilitySensor onChange={handleChangeVisibility}> */}
        <h1
          ref={titleRef}
          className={`HomePage__Work__title ${isVisible ? "animate" : ""}`}
          style={isVisible ? undefined : { visibility: "hidden" }}
        >
          WORK
        </h1>
        {/* </VisibilitySensor> */}
        <div className="HomePage__Work__numbers">12</div>
      </div>
      {/* Демонстрация работ */}
      <div className="HomePage__works__first">
        <div id="HomePage__works__first">
          <img
            src="https://wantedfornothing.com/wp-content/uploads/2023/05/rent-dot-com-thumbnail-hp-1696x1678.jpg"
            alt="здесь должно было быть фото"
            id="HomePage__works__first__img"
          />
          <p className="HomePage__works__group">
            <span className="HomePage__works__group__span">Design.</span>
            <span className="HomePage__works__group__span">Developments.</span>
            <span className="HomePage__works__group__span">Strategy.</span>
          </p>
          <h1
            className="HomePage__works__span__title"
            id="HomePage__works__span__title__f"
          >
            RENT.COM
          </h1>
          <p className="HomePage__works__p" id="HomePage__works__p__f">
            WE TAKE THE HASSLE OUT OF RENTING. RERIOD.
          </p>
        </div>
      </div>
      <div className="HomePage__GroupWorks">
        <div id="HomePage__GroupWorks__second">
          <img
            src="https://wantedfornothing.com/wp-content/uploads/2023/04/nissin-foods-thumbnail-hp-1037x1206.webp"
            alt="здесь должно было быть фото"
            id="HomePage__works__second__img"
          />
          <p className="HomePage__works__group">
            <span className="HomePage__works__group__span">Design.</span>
            <span className="HomePage__works__group__span">Developments.</span>
            <span className="HomePage__works__group__span">Strategy.</span>
            <span className="HomePage__works__group__span">eCommerce.</span>
          </p>
          <h1 className="HomePage__works__span__title">NISSING FOODS </h1>
          <p className="HomePage__works__p">
            The original instant ramen. <br />
            Everything you crave in one cup!
          </p>
        </div>
        <div id="HomePage__GroupWorks__third">
          <img
            src="https://wantedfornothing.com/wp-content/uploads/2023/04/brookfield-properties-manhattan-west-thumbnail-hp-676x829.webp"
            alt="здесь должно было быть фото"
            id="HomePage__works__third__img"
          />
          <p className="HomePage__works__group">
            <span className="HomePage__works__group__span">Design.</span>
            <span className="HomePage__works__group__span">Developments.</span>
            <span className="HomePage__works__group__span">Strategy.</span>
          </p>
          <h1 className="HomePage__works__span__title">NISSING FOODS </h1>
          <p className="HomePage__works__p">
            The original instant ramen. <br />
            Everything you crave in one cup!
          </p>
        </div>
      </div>
      <div className="HomePage__works__forth">
        <div id="HomePage__works__forth">
          <img
            src="https://wantedfornothing.com/wp-content/uploads/2023/04/flock-freight-highway-thumbnail-hp-1199x1677.webp"
            alt="здесь должно было быть фото"
            id="HomePage__works__forth__img"
          />
          <p className="HomePage__works__group">
            <span className="HomePage__works__group__span">Design.</span>
            <span className="HomePage__works__group__span">Developments.</span>
            <span className="HomePage__works__group__span">Strategy.</span>
          </p>
          <h1
            className="HomePage__works__span__title"
            id="HomePage__works__span__title__f"
          >
            FLOCK FREIGHT{" "}
          </h1>
          <p className="HomePage__works__p" id="HomePage__works__p__f">
            THE FREIGHT SHIPPING EXPERTS FOR ANY LOAD.
          </p>
        </div>
      </div>
      {/* конец работ */}
      {/* начало 2 части HomePAge */}
      <div className="HomePage__linkWork">
        <svg
          width="1132"
          height="1024"
          viewBox="0 0 1132 1024"
          className="HomePage__linkWork__svg"
        >
          <path
            fill="var(--c-bg-primary)"
            d="M626.121 610.263c0 225.931-138.927 409.083-310.303 409.083s-310.303-183.153-310.303-409.083c0-225.931 138.927-409.083 310.303-409.083s310.303 183.153 310.303 409.083z"
          ></path>
          <path
            fill="white"
            d="M316.336 1024c-173.511 0-314.44-185.923-314.44-414.514s141.188-414.514 314.44-414.514 314.44 185.923 314.44 414.514-140.93 414.514-314.44 414.514zM316.336 206.61c-167.046 0-303.063 180.752-303.063 403.135s136.017 402.877 303.063 402.877 285.479-185.923 285.479-408.308-118.174-397.705-285.479-397.705z"
          ></path>
          <path
            fill="white"
            d="M33.442 322.457l4.913-29.996c0.517-2.586 10.602-63.095 51.2-128.259 37.754-60.25 112.743-149.463 241.778-164.202l-2.069 24.825c-100.073 11.637-177.648 60.25-230.659 144.808-22.239 35.167-35.167 69.818-42.149 93.35 17.584-26.117 48.355-66.974 90.764-104.727 92.057-82.231 195.233-96.97 300.477-72.145l1.293 18.359c-103.434-24.307-204.024-19.652-294.788 61.285-68.008 60.51-105.761 129.293-106.020 130.069l-14.739 26.634z"
          ></path>
          <path
            fill="white"
            d="M252.464 505.794c-4.137 23.532-6.464 48.355-6.464 73.956 0 53.786 9.826 103.694 26.376 145.325l158.513-73.698-116.881 144.55c25.859 30.254 57.665 47.839 91.798 47.839 88.178 0 159.806-118.174 159.806-264.016 0-25.341-2.069-49.908-6.206-73.18-62.836-5.948-184.372-13.188-306.941-0.776z"
          ></path>
          <path
            fill="white"
            d="M603.624 468.299c-154.118-49.908-343.661-17.584-345.988-17.584 0 0 169.891-76.024 347.798 6.206l-1.811 11.377z"
          ></path>
          <path
            fill="white"
            d="M9.135 551.047c0 0 410.635-77.834 599.402-22.497l-5.171-27.669c0 0-295.823-54.044-588.8 30.254l-5.431 19.912z"
          ></path>
          <path
            fill="var(--c-bg-primary)"
            d="M1125.193 610.263c0 225.931-138.927 409.083-310.303 409.083s-310.303-183.153-310.303-409.083c0-225.931 138.927-409.083 310.303-409.083s310.303 183.153 310.303 409.083z"
          ></path>
          <path
            fill="white"
            d="M815.664 1024c-173.511 0-314.44-185.923-314.44-414.514s140.93-414.514 314.44-414.514 314.44 185.923 314.44 414.514-141.188 414.514-314.44 414.514zM815.664 206.61c-167.046 0-303.063 180.752-303.063 403.135s136.017 402.877 303.063 402.877 285.479-185.923 285.479-408.308-118.433-397.705-285.479-397.705z"
          ></path>
          <path
            fill="white"
            d="M564.32 322.457l4.913-29.996c0.517-2.586 10.602-63.095 51.2-128.259 37.754-60.25 112.743-149.463 241.778-164.202l-2.069 24.825c-100.073 11.377-177.648 59.992-230.659 144.291-22.239 35.167-35.167 69.818-42.149 93.35 17.584-26.117 48.355-66.974 90.764-104.727 92.057-82.231 195.233-96.97 300.477-72.145l1.293 18.359c-103.434-24.307-204.024-19.652-294.788 61.285-68.008 60.51-105.761 129.293-106.020 130.069l-14.739 27.152z"
          ></path>
          <path
            fill="white"
            d="M1102.695 468.299c-154.118-49.908-343.661-17.584-345.988-17.584 0 0 169.891-76.024 347.798 6.206l-1.811 11.377z"
          ></path>
          <path
            fill="white"
            d="M508.206 551.047c0 0 410.635-77.834 599.402-22.497l-5.171-27.669c0 0-295.823-54.044-588.8 30.254l-5.431 19.912z"
          ></path>
          <path
            fill="white"
            d="M751.794 504.76c-4.137 23.79-6.464 48.873-6.464 74.99 0 53.786 9.826 103.694 26.376 145.325l158.513-73.698-116.881 144.55c25.859 30.254 57.665 47.839 91.798 47.839 88.178 0 159.806-118.174 159.806-264.016 0-27.152-2.586-53.528-6.982-78.093-94.901-11.637-227.814-3.62-306.166 3.103z"
          ></path>
        </svg>
        <p className="HomePage__linkWork__p">EXPLORE MORE PROJECTS</p>
      </div>
      <div className="HomePage__group__p">
        <p
          className={`HomePage__group__p__el ${isVisiblef ? "das" : ""}`}
          style={
            isVisiblef
              ? { textAlign: "end" }
              : { visibility: "hidden", textAlign: "end" }
          }
          id="HomePage__group__p__el_f"
          ref={pElemFirst}
        >
          WITH
        </p>
        <p
          className={`HomePage__group__p__el ${isVisibles ? "das" : ""}`}
          style={
            isVisibles
              ? { textAlign: "left" }
              : { visibility: "hidden", textAlign: "left" }
          }
          id="HomePage__group__p__el_s"
          ref={pElemSecond}
        >
          CHANGE
        </p>
        <p
          className={`HomePage__group__p__el ${isVisiblet ? "das" : ""}`}
          style={
            isVisiblet
              ? { textAlign: "left", marginLeft: "18%" }
              : { visibility: "hidden", textAlign: "left", marginLeft: "18%" }
          }
          id="HomePage__group__p__el_t"
          ref={pElemThird}
        >
          COMES
        </p>
        <p
          className={`HomePage__group__p__el ${isVisiblefo ? "das" : ""}`}
          id="HomePage__group__p__el_fo"
          ref={pElemFourth}
          style={isVisiblefo ? undefined : { visibility: "hidden" }}
        >
          OPPORTUNITY
        </p>
      </div>
      {/* statrt advantages */}
      <div className="HomePage__advantages">
        <div className="HomePage__advantages__el">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 200 120"
          >
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="red" />
                <stop offset="100%" stop-color="white" />
              </linearGradient>
            </defs>
            <rect x="90" y="40" width="20" height="120" fill="url(#grad)">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                dur="5s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="40" y="90" width="120" height="20" fill="url(#grad)">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 100 100"
                to="-360 100 100"
                dur="5s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
          <p className="HomePage__advantages__el__p">
            WE FOCUS ON DIGITAL STRATEGIES THAT HAVE TANGIBLE RESULTS. LET THE
            NUMBERS SPEAK FOR THEMSELVES.
          </p>
        </div>
        <div className="HomePage__advantages__el">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="100"
            viewBox="0 0 200 20"
          >
            <line
              x1="50"
              y1="50"
              x2="150"
              y2="50"
              stroke="white"
              stroke-width="2"
            />
            <line
              x1="100"
              y1="50"
              x2="100"
              y2="10"
              stroke="white"
              stroke-width="2"
            />
            <line
              x1="100"
              y1="50"
              x2="70"
              y2="30"
              stroke="white"
              stroke-width="2"
            />
            <line
              x1="100"
              y1="50"
              x2="130"
              y2="30"
              stroke="white"
              stroke-width="2"
            />
          </svg>

          <p className="HomePage__advantages__el__p">
            WE EMPOWER FAST-GROWTH COMPANIES TO REALIZE THE TRUE POTENTIAL OF
            THEIR MOST VALUABLE DIGITAL ASSETS.
          </p>
        </div>
        <div className="HomePage__advantages__el">
          <svg
            className="rotate-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 120"
            width="80"
            height="80"
          >
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="none"
              stroke="white"
              stroke-width="2"
            />
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke="white"
              stroke-width="2"
            />
            <line
              x1="100"
              y1="0"
              x2="0"
              y2="100"
              stroke="white"
              stroke-width="2"
            />
          </svg>
          <p className="HomePage__advantages__el__p">
            {" "}
            WE CREATE TACTICAL DESIGN SOLUTIONS TO INCREASE BRAND VISIBILITY AND
            CONVERSION.
          </p>
        </div>
      </div>
      {/* Finish  advantages*/}
      {/* start choice segment */}
      <div className="HomePage__segment">
        <ul className="HomePage__segment__list">
          <li className="HomePage__segment__list__el">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="30"
              viewBox="0 0 30 24"
              fill="none"
            >
              <path
                d="M6.41 7.41L7.83 6 13.83 12l-6 6-1.42-1.41L10.01 12z"
                fill="tomato"
              />
              <path
                d="M-20 12h28"
                stroke="tomato"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            STRATEGY
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="30"
              viewBox="0 0 30 24"
              fill="none"
            >
              <path
                d="M23.59 16.59L22.17 18 16.17 12l6-6 1.42 1.41L19.99 12z"
                fill="tomato"
              />
              <path
                d="M50 12H22"
                stroke="tomato"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
          <li className="HomePage__segment__list__el">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="#bfbfbf"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </li>
          <li className="HomePage__segment__list__el">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="30"
              viewBox="0 0 30 24"
              fill="none"
            >
              <path
                d="M6.41 7.41L7.83 6 13.83 12l-6 6-1.42-1.41L10.01 12z"
                fill="tomato"
              />
              <path
                d="M-20 12h28"
                stroke="tomato"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            DESIGN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="30"
              viewBox="0 0 30 24"
              fill="none"
            >
              <path
                d="M23.59 16.59L22.17 18 16.17 12l6-6 1.42 1.41L19.99 12z"
                fill="tomato"
              />
              <path
                d="M50 12H22"
                stroke="tomato"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
          <li className="HomePage__segment__list__el">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="#bfbfbf"
                stroke-width="2"
                fill="none"
              />
            </svg>
          </li>
          <li className="HomePage__segment__list__el">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="30"
              viewBox="0 0 30 24"
              fill="none"
            >
              <path
                d="M6.41 7.41L7.83 6 13.83 12l-6 6-1.42-1.41L10.01 12z"
                fill="tomato"
              />
              <path
                d="M-20 12h28"
                stroke="tomato"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            DEVELOPMENT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="30"
              viewBox="0 0 30 24"
              fill="none"
            >
              <path
                d="M23.59 16.59L22.17 18 16.17 12l6-6 1.42 1.41L19.99 12z"
                fill="tomato"
              />
              <path
                d="M50 12H22"
                stroke="tomato"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </li>
        </ul>
      </div>
      {/* finish choice segment */}
      {/* start select clients */}
      <div className="HomePage__selectClients">
        <p
          style={isVisibleSel ? undefined : { visibility: "hidden" }}
          className={`HomePage__selectClients__p ${isVisibleSel ? "das" : ""}`}
          ref={pElemSelect}
        >
          SELECT
          <br />
          CLIENTS
        </p>
        <div className="HomePage__selectClients__numbers">21+</div>
      </div>
      <div className="HomePage__info">
        <span className="HomePage__info__p">
          WE WORK WITH COMPANIES FROM MULTIPLE SECTORS, HOWEVER, MAJORITY OF OUR
          CLIENTS ARE FUNDED TECH COMPANIES OR MID-TO- ENTERPRISE BUSINESSES.
          THE BIGGER THE CHALLENGE THE MORE EXCITED OUR TEAM GETS.
        </span>
      </div>
      {/* finish clients */}
      {/* Clients start
       */}
      <div className="HomePage_clients">
        <div className="HomePage_clients__block">
          <p className="HomePage_clients__block__item">RENT {verstk}</p>
          <p className="HomePage_clients__block__item">
            PRAVANA
            {verstk}
          </p>
          <p className="HomePage_clients__block__item">
            BROOKFIELD PROPERTIES
            {verstk}
          </p>
          <p className="HomePage_clients__block__item null"></p>
          <p className="HomePage_clients__block__item">
            APM MUSIC
            {verstk}
          </p>
        </div>
        <div className="HomePage_clients__block">
          <p className="HomePage_clients__block__item">
            FLOCK FREIGHT
            {verstk}
          </p>
          <p className="HomePage_clients__block__item">
            NISSIAN FOODS
            {verstk}
          </p>
          <p className="HomePage_clients__block__item">
            PURDUE UNIVERSITY
            {verstk}
          </p>
          <p className="HomePage_clients__block__item">
            ATLANTIC COUNCIL
            {verstk}
          </p>
          <p className="HomePage_clients__block__item">
            GOLDEN STATE ART
            {verstk}
          </p>
          <p className="HomePage_clients__block__item">
            PROTECT ONLINE VOICES
            {verstk}
          </p>
        </div>
        <div className="HomePage_clients__block">
          <p className="HomePage_clients__block__item null"></p>
          <p className="HomePage_clients__block__item">
            GLOBAL MENTOR NERWORK {verstk}
          </p>
          <p className="HomePage_clients__block__item">
            MELIO PLAYMENTS {verstk}
          </p>
          <p className="HomePage_clients__block__item">
            KEWAUNEE SHIENTIFIC {verstk}
          </p>
          <p className="HomePage_clients__block__item">LULL {verstk}</p>
          <p className="HomePage_clients__block__item">NETCHOICE {verstk}</p>
          <p className="HomePage_clients__block__item">SOCCERWIRE {verstk}</p>
          <p className="HomePage_clients__block__item">TELMD {verstk}</p>
        </div>
        <div className="HomePage_clients__block">
          {" "}
          <p className="HomePage_clients__block__item null"></p>
          <p className="HomePage_clients__block__item null"></p>
          <p className="HomePage_clients__block__item">GLOBBER {verstk}</p>
          <p className="HomePage_clients__block__item">KEITH KRACH {verstk}</p>
          <p className="HomePage_clients__block__item null"></p>
          <p className="HomePage_clients__block__item">TERMASOL {verstk}</p>
          <p className="HomePage_clients__block__item">LETSGOREF {verstk}</p>
        </div>
      </div>
      {/* clients end */}
      <div className="HomePage__linkWork">
        <svg
          width="1132"
          height="1024"
          viewBox="0 0 1132 1024"
          className="HomePage__linkWork__svg"
        >
          <path
            fill="var(--c-bg-primary)"
            d="M626.121 610.263c0 225.931-138.927 409.083-310.303 409.083s-310.303-183.153-310.303-409.083c0-225.931 138.927-409.083 310.303-409.083s310.303 183.153 310.303 409.083z"
          ></path>
          <path
            fill="white"
            d="M316.336 1024c-173.511 0-314.44-185.923-314.44-414.514s141.188-414.514 314.44-414.514 314.44 185.923 314.44 414.514-140.93 414.514-314.44 414.514zM316.336 206.61c-167.046 0-303.063 180.752-303.063 403.135s136.017 402.877 303.063 402.877 285.479-185.923 285.479-408.308-118.174-397.705-285.479-397.705z"
          ></path>
          <path
            fill="white"
            d="M33.442 322.457l4.913-29.996c0.517-2.586 10.602-63.095 51.2-128.259 37.754-60.25 112.743-149.463 241.778-164.202l-2.069 24.825c-100.073 11.637-177.648 60.25-230.659 144.808-22.239 35.167-35.167 69.818-42.149 93.35 17.584-26.117 48.355-66.974 90.764-104.727 92.057-82.231 195.233-96.97 300.477-72.145l1.293 18.359c-103.434-24.307-204.024-19.652-294.788 61.285-68.008 60.51-105.761 129.293-106.020 130.069l-14.739 26.634z"
          ></path>
          <path
            fill="white"
            d="M252.464 505.794c-4.137 23.532-6.464 48.355-6.464 73.956 0 53.786 9.826 103.694 26.376 145.325l158.513-73.698-116.881 144.55c25.859 30.254 57.665 47.839 91.798 47.839 88.178 0 159.806-118.174 159.806-264.016 0-25.341-2.069-49.908-6.206-73.18-62.836-5.948-184.372-13.188-306.941-0.776z"
          ></path>
          <path
            fill="white"
            d="M603.624 468.299c-154.118-49.908-343.661-17.584-345.988-17.584 0 0 169.891-76.024 347.798 6.206l-1.811 11.377z"
          ></path>
          <path
            fill="white"
            d="M9.135 551.047c0 0 410.635-77.834 599.402-22.497l-5.171-27.669c0 0-295.823-54.044-588.8 30.254l-5.431 19.912z"
          ></path>
          <path
            fill="var(--c-bg-primary)"
            d="M1125.193 610.263c0 225.931-138.927 409.083-310.303 409.083s-310.303-183.153-310.303-409.083c0-225.931 138.927-409.083 310.303-409.083s310.303 183.153 310.303 409.083z"
          ></path>
          <path
            fill="white"
            d="M815.664 1024c-173.511 0-314.44-185.923-314.44-414.514s140.93-414.514 314.44-414.514 314.44 185.923 314.44 414.514-141.188 414.514-314.44 414.514zM815.664 206.61c-167.046 0-303.063 180.752-303.063 403.135s136.017 402.877 303.063 402.877 285.479-185.923 285.479-408.308-118.433-397.705-285.479-397.705z"
          ></path>
          <path
            fill="white"
            d="M564.32 322.457l4.913-29.996c0.517-2.586 10.602-63.095 51.2-128.259 37.754-60.25 112.743-149.463 241.778-164.202l-2.069 24.825c-100.073 11.377-177.648 59.992-230.659 144.291-22.239 35.167-35.167 69.818-42.149 93.35 17.584-26.117 48.355-66.974 90.764-104.727 92.057-82.231 195.233-96.97 300.477-72.145l1.293 18.359c-103.434-24.307-204.024-19.652-294.788 61.285-68.008 60.51-105.761 129.293-106.020 130.069l-14.739 27.152z"
          ></path>
          <path
            fill="white"
            d="M1102.695 468.299c-154.118-49.908-343.661-17.584-345.988-17.584 0 0 169.891-76.024 347.798 6.206l-1.811 11.377z"
          ></path>
          <path
            fill="white"
            d="M508.206 551.047c0 0 410.635-77.834 599.402-22.497l-5.171-27.669c0 0-295.823-54.044-588.8 30.254l-5.431 19.912z"
          ></path>
          <path
            fill="white"
            d="M751.794 504.76c-4.137 23.79-6.464 48.873-6.464 74.99 0 53.786 9.826 103.694 26.376 145.325l158.513-73.698-116.881 144.55c25.859 30.254 57.665 47.839 91.798 47.839 88.178 0 159.806-118.174 159.806-264.016 0-27.152-2.586-53.528-6.982-78.093-94.901-11.637-227.814-3.62-306.166 3.103z"
          ></path>
        </svg>
        <p className="HomePage__linkWork__p">DISCOVER OUR CLIENTS</p>
      </div>
      {/* start groupPicture */}
      <div className="HomePage__groupPicture">
        <p className="HomePage__groupPicture__p">
          WANTED FOR NOTHING WAS STARTED BY GLOBAL ENTREPRENEURS IN LOS ANGELES
          WHO SAW A LACK OF STRATEGIC INSIGHTS OFFERED BY TRADITIONAL DESIGN
          AGENCIES. WE ARE YOUR ONE-STOP-SHOP FOR CREATING CUTTING-EDGE DIGITAL
          PRODUCTS THAT WILL INCREASE ENGAGEMENT AND ADD REAL VALUE TO YOUR
          AUDIENCE
        </p>
        <img
          src="https://wantedfornothing.com/wp-content/uploads/2023/05/wanted-for-nothing-team-822x547.jpg"
          alt="ГДе фото?"
          id="HomePage__groupPicture__f"
        />
        <img
          src="https://wantedfornothing.com/wp-content/uploads/2023/05/california-surfer-570x394.jpg"
          alt=""
          id="HomePage__groupPicture__s"
        />
        <img
          src="https://wantedfornothing.com/wp-content/uploads/2023/05/santa-monica-pier.jpg"
          alt=""
          id="HomePage__groupPicture__t"
        />
        <img
          src="https://wantedfornothing.com/wp-content/uploads/2023/05/dog-coffee-570x412.jpg"
          alt=""
          id="HomePage__groupPicture__fo"
        />
        <img
          src="https://wantedfornothing.com/wp-content/uploads/2023/05/wanted-for-nothing-web-designers-570x380.jpg"
          alt=""
          id="HomePage__groupPicture__fi"
        />
      </div>
      {/* finish groupPicture */}
      {/* HomePage vibes start */}
      <div className="HomePage__vibes">
        <h1 className="HomePage__vibes__title">OUR VIBES</h1>
        <ul className="HomePage__vibes__list">
          <li className="HomePage__vibes__list__item">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="#bfbfbf"
                stroke-width="2"
                fill="none"
              />
            </svg>{" "}
          </li>
          <li className="HomePage__vibes__list__item">
            WE HAVE A GLOBAL TEAM THAT YIELDS INCREASED CREATIVITY AND
            INNOVATION...
          </li>
          <li className="HomePage__vibes__list__item">
            WFN THINKS UNCONVENTIONALLY WHEN IT COMES TO CREATING CUTTING-EDGE
            SOLUTIONS..
          </li>
          <li className="HomePage__vibes__list__item">
            OUR GOAL IS TO BUILD TRUST AND QUALITY RELATIONSHIPS WITH OUR
            CLIENTS...
          </li>
        </ul>
      </div>
      {/* HomePage vibes finish */}
      <div className="HomePage__linkWork">
        <svg
          width="1132"
          height="1024"
          viewBox="0 0 1132 1024"
          className="HomePage__linkWork__svg"
        >
          <path
            fill="var(--c-bg-primary)"
            d="M626.121 610.263c0 225.931-138.927 409.083-310.303 409.083s-310.303-183.153-310.303-409.083c0-225.931 138.927-409.083 310.303-409.083s310.303 183.153 310.303 409.083z"
          ></path>
          <path
            fill="white"
            d="M316.336 1024c-173.511 0-314.44-185.923-314.44-414.514s141.188-414.514 314.44-414.514 314.44 185.923 314.44 414.514-140.93 414.514-314.44 414.514zM316.336 206.61c-167.046 0-303.063 180.752-303.063 403.135s136.017 402.877 303.063 402.877 285.479-185.923 285.479-408.308-118.174-397.705-285.479-397.705z"
          ></path>
          <path
            fill="white"
            d="M33.442 322.457l4.913-29.996c0.517-2.586 10.602-63.095 51.2-128.259 37.754-60.25 112.743-149.463 241.778-164.202l-2.069 24.825c-100.073 11.637-177.648 60.25-230.659 144.808-22.239 35.167-35.167 69.818-42.149 93.35 17.584-26.117 48.355-66.974 90.764-104.727 92.057-82.231 195.233-96.97 300.477-72.145l1.293 18.359c-103.434-24.307-204.024-19.652-294.788 61.285-68.008 60.51-105.761 129.293-106.020 130.069l-14.739 26.634z"
          ></path>
          <path
            fill="white"
            d="M252.464 505.794c-4.137 23.532-6.464 48.355-6.464 73.956 0 53.786 9.826 103.694 26.376 145.325l158.513-73.698-116.881 144.55c25.859 30.254 57.665 47.839 91.798 47.839 88.178 0 159.806-118.174 159.806-264.016 0-25.341-2.069-49.908-6.206-73.18-62.836-5.948-184.372-13.188-306.941-0.776z"
          ></path>
          <path
            fill="white"
            d="M603.624 468.299c-154.118-49.908-343.661-17.584-345.988-17.584 0 0 169.891-76.024 347.798 6.206l-1.811 11.377z"
          ></path>
          <path
            fill="white"
            d="M9.135 551.047c0 0 410.635-77.834 599.402-22.497l-5.171-27.669c0 0-295.823-54.044-588.8 30.254l-5.431 19.912z"
          ></path>
          <path
            fill="var(--c-bg-primary)"
            d="M1125.193 610.263c0 225.931-138.927 409.083-310.303 409.083s-310.303-183.153-310.303-409.083c0-225.931 138.927-409.083 310.303-409.083s310.303 183.153 310.303 409.083z"
          ></path>
          <path
            fill="white"
            d="M815.664 1024c-173.511 0-314.44-185.923-314.44-414.514s140.93-414.514 314.44-414.514 314.44 185.923 314.44 414.514-141.188 414.514-314.44 414.514zM815.664 206.61c-167.046 0-303.063 180.752-303.063 403.135s136.017 402.877 303.063 402.877 285.479-185.923 285.479-408.308-118.433-397.705-285.479-397.705z"
          ></path>
          <path
            fill="white"
            d="M564.32 322.457l4.913-29.996c0.517-2.586 10.602-63.095 51.2-128.259 37.754-60.25 112.743-149.463 241.778-164.202l-2.069 24.825c-100.073 11.377-177.648 59.992-230.659 144.291-22.239 35.167-35.167 69.818-42.149 93.35 17.584-26.117 48.355-66.974 90.764-104.727 92.057-82.231 195.233-96.97 300.477-72.145l1.293 18.359c-103.434-24.307-204.024-19.652-294.788 61.285-68.008 60.51-105.761 129.293-106.020 130.069l-14.739 27.152z"
          ></path>
          <path
            fill="white"
            d="M1102.695 468.299c-154.118-49.908-343.661-17.584-345.988-17.584 0 0 169.891-76.024 347.798 6.206l-1.811 11.377z"
          ></path>
          <path
            fill="white"
            d="M508.206 551.047c0 0 410.635-77.834 599.402-22.497l-5.171-27.669c0 0-295.823-54.044-588.8 30.254l-5.431 19.912z"
          ></path>
          <path
            fill="white"
            d="M751.794 504.76c-4.137 23.79-6.464 48.873-6.464 74.99 0 53.786 9.826 103.694 26.376 145.325l158.513-73.698-116.881 144.55c25.859 30.254 57.665 47.839 91.798 47.839 88.178 0 159.806-118.174 159.806-264.016 0-27.152-2.586-53.528-6.982-78.093-94.901-11.637-227.814-3.62-306.166 3.103z"
          ></path>
        </svg>
        <p className="HomePage__linkWork__p">LEARN MORE ABOUT US</p>
      </div>
    </div>
  );
};

export default HomePage;
