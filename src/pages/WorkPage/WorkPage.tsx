import axios from "axios";
import "./WorkPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type MainRoutesProps = {
  goToWork: () => void;
};
interface Work {
  imgUrl: string;
  advantages: string;
  id: number;
  title: string;
  description: string;
}
interface WorkFormData {
  imgUrl: string;
  description: string;
  title: string;
  advantages: string;
}
const WorkPage = ({ goToWork }: MainRoutesProps) => {
  useEffect(() => {
    goToWork();
  }, []);
  //crud
  const [works, setWorks] = useState<Work[]>([]);
  const [worksLength, setWorkLength] = useState<number>();
  const [add, setAdd] = useState<boolean>(false);
  const [addError, setAddError] = useState<boolean>(false);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const api: string = "https://fornothingtsx.vercel.app/works/api";
  async function getWorks() {
    try {
      let res = (await axios.get<Work[]>(api)).data;
      setWorks(res);
      setWorkLength(Math.round(res.length / 3));
      setCurrentIndex(Math.round(res.length / 3) * 2);
    } catch (error) {
      console.log(error);
    }
  }
  async function addWork(obj: object) {
    try {
      await axios.post(api, obj);
      getWorks();
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    getWorks();
  }, []);
  // form
  const [formData, setFormData] = useState<WorkFormData>({
    imgUrl: "",
    description: "",
    title: "",
    advantages: "",
  });
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { imgUrl, description, title, advantages } = formData;
    if (
      imgUrl.trim() &&
      description.trim() &&
      title.trim() &&
      advantages.trim()
    ) {
      let obj: WorkFormData = {
        imgUrl,
        description,
        title,
        advantages,
      };
      addWork(obj);
      setFormData({
        imgUrl: "",
        description: "",
        title: "",
        advantages: "",
      });
      setAddError(false);
    } else {
      setAddError(true);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let truncatedValue = value;
    if (name === "title") {
      truncatedValue = value.slice(0, 20);
    } else if (name === "advantages") {
      truncatedValue = value.slice(0, 50);
    } else if (name === "description") {
      truncatedValue = value.slice(0, 80);
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: truncatedValue,
    }));
  };
  // verstk
  const verstkWork = (item: Work) => {
    return (
      <div
        className="WorkPage__MainContainWorks__block__item"
        key={item.id}
        onClick={() => navigate(`/work/${item.id}`)}
      >
        <img
          src={item.imgUrl}
          alt=""
          className="WorkPage__MainContainWorks__block__item__img"
        />
        <div className="WorkPage__MainContainWorks__block__item__div">
          <span className="WorkPage__MainContainWorks__block__item__div__span">
            {item.advantages}
          </span>
        </div>
        <h3 className="WorkPage__MainContainWorks__block__item__title animat">
          {item.title.toUpperCase()}
        </h3>
        <p className="WorkPage__MainContainWorks__block__item__p animat">
          {item.description.toUpperCase()}
        </p>
        <p className="WorkPage__MainContainWorks__block__item__view">
          VIEW THE PROJECT{" "}
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
        </p>
      </div>
    );
  };
  return (
    <div className="WorkPage">
      <h1 className="WorkPage__title">ALL WORK</h1>

      <div className="WorkPage__MainContainWorks">
        <div className="WorkPage__MainContainWorks__block">
          {works.slice(0, worksLength).map((item) => verstkWork(item))}
        </div>

        <div className="WorkPage__MainContainWorks__block">
          {works
            .slice(currentIndex, works.length)
            .map((item) => verstkWork(item))}
        </div>
        <div className="WorkPage__MainContainWorks__block">
          {" "}
          {works
            .slice(worksLength, currentIndex)
            .map((item) => verstkWork(item))}
        </div>
      </div>
      {add ? (
        <div className="WorkPage__add">
          <h2 className="WorkPage__add__title">ADD NEW PROJECT</h2>
          <form className="WorkPage__add__Form" onSubmit={handleChange}>
            <input
              type="text"
              className="WorkPage__add__inp"
              placeholder="ENTER YOUR URL IMG"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleInputChange}
            />
            {addError && (
              <span className="WorkPage__add__Form__p">FILL IN THE FIELD</span>
            )}

            <input
              type="text"
              className="WorkPage__add__inp"
              placeholder="ENTER YOUR ADVANTAGES"
              name="advantages"
              value={formData.advantages}
              onChange={handleInputChange}
            />
            {addError && (
              <span className="WorkPage__add__Form__p">FILL IN THE FIELD</span>
            )}

            <input
              type="text"
              className="WorkPage__add__inp"
              placeholder="ENTER YOUR TITLE"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />

            {addError && (
              <span className="WorkPage__add__Form__p">FILL IN THE FIELD</span>
            )}

            <input
              type="text"
              className="WorkPage__add__inp"
              placeholder="ENTER YOUR DESCRIPTION"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            {addError && (
              <span className="WorkPage__add__Form__p">FILL IN THE FIELD</span>
            )}

            <div className="WorkPage__add__buttonGroup">
              <button
                className="WorkPage__add__buttonGroup__button"
                type="button"
                onClick={() => setAdd(!add)}
              >
                CLOSE
              </button>
              <button
                className="WorkPage__add__buttonGroup__button"
                type="submit"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="HomePage__linkWork" onClick={() => setAdd(!add)}>
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
          <p className="HomePage__linkWork__p">ADD NEW PROJECT TO CLICK</p>
        </div>
      )}
    </div>
  );
};
export { WorkPage };
