import { useEffect, useState } from "react";
import "./Headers.css";
import menu from "./menu-duo-lg-svgrepo-com.svg";

type MainRoutesProps = {
  goToWork: () => void;
  page: number;
  goToHomePage: () => void;
};

const Headers = ({ goToWork, page, goToHomePage }: MainRoutesProps) => {
  const [way, setWay] = useState<boolean>(false);
  return (
    <div className="Header">
      {way ? (
        <div className="Header__menus">
          <p className="Header__menus__item" onClick={() => goToHomePage()}>
            HomePage
          </p>
          <p className="Header__menus__item" onClick={() => goToWork()}>
            All work
          </p>
          <p className="Header__menus__item" onClick={() => setWay(!way)}>
            Close menu
          </p>
        </div>
      ) : undefined}
      <div className="Header__left">
        <ul className="Header__left__list">
          <li
            className="Header__left__list__item"
            onClick={() => goToHomePage()}
          >
            WFN — [WANTED-FOR-NOTHING]
          </li>
          <li
            className="Header__left__list__item"
            id="Header__left__list__item__second"
          >
            TECH & DESIGN CONSULTANCY
          </li>
        </ul>
        <div className="Header__left__group">
          <img
            src="https://wantedfornothing.com/wp-content/uploads/2023/05/qr-wfn.svg"
            alt=""
            className="Header__left__group__img"
          />
          <p className="Header__left__group__p">
            Diverse Team <br />
            Strategic Thinking
            <br />
            Quality Relationships
          </p>
        </div>
      </div>
      {way ? undefined : (
        <img
          src={menu}
          alt=""
          className="Header__menu"
          onClick={() => setWay(!way)}
        />
      )}

      <svg viewBox="0 0 66 28" fill="#bfbfbf" className="Header__logo">
        <g>
          <path d="M63.9031 0.0439453C64.9479 0.0439453 65.6709 1.07602 65.3262 2.04966L65.3081 2.09829L55.804 26.3604C55.5849 26.9199 55.0547 27.2939 54.4571 27.3168L54.3991 27.3179H43.2867C42.242 27.3179 41.519 26.2859 41.8636 25.3122L41.8818 25.2636L51.3858 1.00145C51.6049 0.442028 52.1352 0.0678904 52.7328 0.0450531L52.7908 0.0439453H63.9031ZM47.6567 0.0439453C48.7015 0.0439453 49.4245 1.07602 49.0798 2.04966L49.0617 2.09829L39.5576 26.3604C39.3385 26.9199 38.8083 27.2939 38.2107 27.3168L38.1527 27.3179H27.0403C25.9956 27.3179 25.2726 26.2859 25.6172 25.3122L25.6354 25.2636L35.1394 1.00145C35.3585 0.442028 35.8888 0.0678904 36.4864 0.0450531L36.5444 0.0439453H47.6567ZM12.6222 0.0439453C13.2434 0.0439453 13.801 0.423982 14.0272 1.00145L23.5312 25.2636C23.9181 26.2513 23.1886 27.3179 22.1263 27.3179H11.0141C10.393 27.3179 9.8353 26.9379 9.60909 26.3604L0.105039 2.09829C-0.281817 1.11071 0.447749 0.0439453 1.51005 0.0439453H12.6222ZM54.4978 26.1451L54.4878 26.1481L54.4914 26.1472L54.495 26.1461L54.4978 26.1451ZM38.2514 26.1451L38.2414 26.1481L38.2487 26.146L38.2514 26.1451ZM10.8432 26.1148L10.8587 26.123C10.8799 26.1335 10.9023 26.142 10.9254 26.148C10.8965 26.1405 10.8689 26.1293 10.8432 26.1148ZM38.3077 26.1229L38.2877 26.132L38.3 26.1268L38.3077 26.1229ZM10.7484 26.0366L10.7376 26.0231C10.7312 26.0148 10.7252 26.0061 10.7196 25.9972C10.7282 26.0111 10.7379 26.0242 10.7484 26.0366ZM47.8964 1.2981L47.9126 1.31429L47.9024 1.30358L47.8964 1.2981ZM47.8828 1.28591L47.8964 1.2981L47.8904 1.2923L47.8828 1.28591ZM64.1219 1.27992L64.1376 1.293L64.1368 1.2923L64.1219 1.27992ZM47.8709 1.27615L47.8826 1.28569L47.8764 1.28008L47.8709 1.27615ZM64.1137 1.27327L64.1206 1.27881L64.1148 1.27378L64.1137 1.27327ZM47.8584 1.26684L47.8709 1.27615L47.8664 1.27231L47.8584 1.26684ZM64.1082 1.26928L64.1137 1.27327L64.1128 1.27231L64.1082 1.26928ZM47.8434 1.25642L47.8576 1.26639L47.848 1.25922L47.8434 1.25642ZM64.0873 1.25486L64.104 1.26639L64.0901 1.25644L64.0873 1.25486ZM47.8174 1.24123L47.8427 1.25597L47.8405 1.25448L47.8174 1.24123ZM52.6946 1.21588L52.6645 1.22603C52.6546 1.22987 52.645 1.23416 52.6355 1.23887L52.6078 1.25429C52.6347 1.23768 52.6639 1.2247 52.6946 1.21588ZM36.4482 1.21588L36.4181 1.22603C36.4082 1.22987 36.3986 1.23416 36.3891 1.23887L36.3614 1.25429C36.3883 1.23768 36.4175 1.2247 36.4482 1.21588ZM12.7777 1.23891L12.8053 1.25425C12.7821 1.23996 12.7572 1.22836 12.7312 1.21978C12.7472 1.22505 12.7628 1.23145 12.7777 1.23891ZM64.0141 1.22017L64.0394 1.22981L64.0638 1.24123C64.0479 1.23299 64.0314 1.22593 64.0141 1.22017ZM47.7677 1.22017L47.793 1.22981L47.8174 1.24123C47.8015 1.23299 47.785 1.22593 47.7677 1.22017ZM63.9031 1.20235C63.9225 1.20238 63.9417 1.20396 63.9602 1.20697L63.9877 1.21252C63.9698 1.2081 63.9512 1.20505 63.9321 1.20351L63.9031 1.20235ZM47.6567 1.20235L47.6565 1.20238C47.6761 1.20238 47.6953 1.20396 47.7138 1.20697L47.7413 1.21252C47.7234 1.2081 47.7048 1.20505 47.6857 1.20351L47.6567 1.20235ZM10.6952 25.9512L10.6899 25.9386C10.6969 25.9565 10.7053 25.9736 10.7149 25.9898C10.7077 25.9775 10.7011 25.9646 10.6952 25.9512ZM1.18595 1.67646L1.17646 1.64904L1.18582 1.67643L10.4255 25.2635L1.18595 1.67646ZM1.16185 1.53964L1.16201 1.56671C1.16276 1.5815 1.16447 1.59639 1.16721 1.61132C1.16293 1.58727 1.16117 1.56327 1.16185 1.53964ZM1.19091 1.41113L1.18113 1.43552C1.1724 1.46034 1.16643 1.48626 1.16356 1.51283L1.16185 1.53964C1.16316 1.49472 1.17333 1.45118 1.19091 1.41113ZM1.24437 1.32544L1.23011 1.34326C1.21973 1.35729 1.2104 1.37208 1.2022 1.38751L1.19091 1.41113C1.20452 1.38014 1.22256 1.35125 1.24437 1.32544ZM1.34945 1.24127L1.32616 1.25444C1.29945 1.27108 1.27532 1.29119 1.25428 1.31402C1.28138 1.28481 1.31342 1.26001 1.34945 1.24127ZM1.39915 1.22021L1.37362 1.22977L1.34945 1.24127C1.36528 1.23303 1.38188 1.22597 1.39915 1.22021ZM1.48114 1.20355L1.45278 1.20694L1.42556 1.21256C1.44349 1.20814 1.46205 1.20509 1.48114 1.20355Z"></path>
        </g>
        <g>
          <path d="M28.2066 0.489621V2.37433H27.6331V0.489621H26.9624V0H28.8773V0.489621H28.2066Z"></path>
          <path d="M31.292 2.37433L31.3055 0.694189H31.2954L30.6783 2.37433H30.2759L29.6756 0.694189H29.6656L29.679 2.37433H29.1391V0H29.954L30.4939 1.52252H30.5073L31.0238 0H31.8521V2.37433H31.292Z"></path>
        </g>
      </svg>
      <div className="Header__right">
        <ul className="Header__right__list">
          <li
            className="Header__right__list__item"
            onClick={() => goToWork()}
            style={page === 1 ? { color: "#f50" } : undefined}
          >
            WORK{" "}
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
          <li className="Header__right__list__item">
            VIBES{" "}
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
          <li className="Header__right__list__item">
            SERVICES
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
        </ul>
        <span className="Header__right__link">
          HAVE A PROJECT?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="120"
            className="Header__right__link__svg"
          >
            <ellipse
              cx="6rem"
              cy="3rem"
              rx="5rem"
              ry="1.2rem"
              stroke="tomato"
              fill="none"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="100"
            className="Header__right__link__svg"
          >
            <ellipse
              transform="matrix(0.866,0.5,-0.5,0.866,140,50)"
              cx="-30"
              cy="20"
              rx="60"
              ry="20"
              stroke="tomato"
              fill="none"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="100"
            className="Header__right__link__svg"
          >
            <ellipse
              transform="matrix(-0.866,0.5,0.5,0.866,100,50)"
              cx="0"
              cy="0"
              rx="60"
              ry="20"
              stroke="tomato"
              fill="none"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Headers;
