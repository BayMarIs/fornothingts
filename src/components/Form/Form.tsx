import "./Form.css";

const Form: React.FC = () => {
  return (
    <div className="Form">
      {/* start form */}
      <div className="HomePage__Form">
        <h1 className="HomePage__Form__title">
          <span className="HomePage__Form__title__span">
            READY
            <div id="HomePage__Form__title__span__line_f"></div>
            TO
          </span>
          <span className="HomePage__Form__title__span">
            WORK<div id="HomePage__Form__title__span__line_s"></div>WITH
          </span>
          <span className="HomePage__Form__title__span">
            <div id="HomePage__Form__title__span__line_t"></div>US?
          </span>
        </h1>
        <div className="HomePage__Form__form">
          <div className="HomePage__Form__form__el">
            <span className="HomePage__Form__form__el__name">SUBJECT*</span>
            <select className="HomePage__Form__form__el__infoOrder">
              <option
                className="HomePage__Form__form__el__infoOrder__option"
                value=""
              >
                NEW PROJECT
              </option>
              <option
                className="HomePage__Form__form__el__infoOrder__option"
                value=""
              >
                PARTNERSHIP
              </option>
              <option
                className="HomePage__Form__form__el__infoOrder__option"
                value=""
              >
                PRESS
              </option>
              <option
                className="HomePage__Form__form__el__infoOrder__option"
                value=""
              >
                CAREERS
              </option>
              <option
                className="HomePage__Form__form__el__infoOrder__option"
                value=""
              >
                OTHER
              </option>
            </select>
          </div>
          <div className="HomePage__Form__form__el">
            <span className="HomePage__Form__form__el__name">EMAIL*</span>
            <input
              className="HomePage__Form__form__el__infoOrder f"
              placeholder="Enter Your Email"
            ></input>

            <p className="HomePage__Form__form__el__error">
              PLEASE FILL OUT THIS FIELD
            </p>
          </div>
          <div className="HomePage__Form__form__el">
            <span className="HomePage__Form__form__el__name">FIRST NAME*</span>
            <input
              className="HomePage__Form__form__el__infoOrder"
              placeholder="Enter Your First Name"
            ></input>

            <p className="HomePage__Form__form__el__error">
              PLEASE FILL OUT THIS FIELD
            </p>
          </div>
          <div className="HomePage__Form__form__el">
            <span className="HomePage__Form__form__el__name">LAST NAME*</span>
            <input
              className="HomePage__Form__form__el__infoOrder"
              placeholder="Enter Your Last Name"
            ></input>
            <p className="HomePage__Form__form__el__error">
              PLEASE FILL OUT THIS FIELD
            </p>
          </div>
          <div id="HomePage__Form__form__el">
            <span id="HomePage__Form__form__el__name">THOUGHTS*</span>
            <input
              placeholder="We are excited to hear your idea!"
              id="HomePage__Form__form__el__infoOrder"
            ></input>

            <p id="HomePage__Form__form__el__error">
              PLEASE FILL OUT THIS FIELD
            </p>
          </div>
        </div>
      </div>
      {/* finish form */}
      <div className="HomePage__Final">
        <h1 className="HomePage__Final__title">
          GET IN TOUCH{" "}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="120"
            className="HomePage__Final__title__svg"
          >
            <ellipse
              cx="120"
              cy="50"
              rx="120"
              ry="30"
              stroke="tomato"
              fill="none"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="100"
            className="HomePage__Final__title__svg d"
          >
            <ellipse
              transform="matrix(0.866,0.5,-0.5,0.866,140,50)"
              cx="0"
              cy="0"
              rx="88"
              ry="20"
              stroke="tomato"
              fill="none"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="100"
            id="HomePage__Final__title__svg"
          >
            <g transform="translate(140, 50) rotate(-30) translate(-100, -30)">
              <ellipse
                cx="100"
                cy="30"
                rx="88"
                ry="20"
                stroke="tomato"
                fill="none"
              />
            </g>
          </svg> */}
        </h1>

        <p className="HomePage__Final__p">
          ONE OR MORE FIELDS HAVE AN ERROR. PLEASE CHECK AND TRY AGAIN.
        </p>
      </div>
    </div>
  );
};
export { Form };
