import React, { useEffect, useState } from "react";
import "./WorkReadPage.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import iconDelete from "./icons8-delete.svg";
import iconEdit from "./icons8-edit.svg";
import iconOk from "./icons8-ok.svg";
import iconNo from "./refresh-circle-svgrepo-com.svg";
interface Work {
  imgUrl: string;
  advantages: string;
  id: number;
  title: string;
  description: string;
}
const WorkReadPage = () => {
  const [work, setWork] = useState<Work>();
  const { id } = useParams();
  const [editWork, setEditWork] = useState<boolean>(false);
  const [editInp, setEditInp] = useState<{
    imgUrl: string;
    advantages: string;
    title: string;
    description: string;
  }>({
    imgUrl: "",
    advantages: "",
    title: "",
    description: "",
  });
  const numericId = Number(id);

  const api: string = "https://fornothingtsx.vercel.app/works/api";
  const navigate = useNavigate();
  async function getWorkById(id: number) {
    try {
      let res = (await axios.get<Work>(`${api}/${id}`)).data;
      setWork(res);
      getWorkById(numericId);
    } catch (error) {
      console.log(error);
    }
  }
  async function changeWork(id: number, obj: object) {
    try {
      await axios.patch(`${api}/${id}`, obj);
    } catch (error) {
      console.log(error);
    }
  }
  function changeWorkInp() {
    if (
      editInp.imgUrl.trim() &&
      editInp.advantages.trim() &&
      editInp.title.trim() &&
      editInp.description.trim()
    ) {
      let obj = {
        imgUrl: editInp.imgUrl,
        advantages: editInp.advantages,
        title: editInp.title,
        description: editInp.description,
      };
      changeWork(numericId, obj);
      setEditWork(!editWork);
    } else {
      alert("Заполните все поля!");
    }
  }
  async function deleteWork(id: number) {
    try {
      await axios.delete(`${api}/${id}`);
      getWorkById(id);
    } catch (error) {
      console.log(error);
    }
  }
  //
  useEffect(() => {
    getWorkById(numericId);
  }, []);
  return (
    <div className="WorkReadPage">
      {editWork ? (
        <div className="WorkReadPage__itemChange">
          <img src={work?.imgUrl} alt="" className="WorkReadPage__img" />
          <div className="WorkReadPage__rightChange">
            <input
              type="text"
              name=""
              id=""
              value={editInp.title}
              onChange={(e) =>
                setEditInp({ ...editInp, title: e.target.value })
              }
              className="WorkReadPage__right__titleInp"
            />
            <input
              type="text"
              name=""
              id=""
              value={editInp.description}
              onChange={(e) =>
                setEditInp({ ...editInp, description: e.target.value })
              }
              className="WorkReadPage__right__descrInp"
            />
            <input
              type="text"
              name=""
              id=""
              value={editInp.advantages}
              onChange={(e) =>
                setEditInp({ ...editInp, advantages: e.target.value })
              }
              className="WorkReadPage__right__advInp"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter new imgUrl"
              value={editInp.imgUrl}
              onChange={(e) =>
                setEditInp({ ...editInp, imgUrl: e.target.value })
              }
              className="WorkReadPage__right__advInp"
            />
            <div className="WorkReadPage__items">
              <img
                src={iconDelete}
                alt=""
                className="WorkReadPage__item__el"
                onClick={() => {
                  deleteWork(numericId);
                  navigate("/work");
                }}
              />
              <img
                src={iconOk}
                alt=""
                className="WorkReadPage__item__el"
                onClick={() => {
                  changeWorkInp();
                }}
              />
              <img
                src={iconNo}
                alt=""
                className="WorkReadPage__item__el"
                onClick={() => setEditWork(!editWork)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="WorkReadPage__item">
          <img src={work?.imgUrl} alt="" className="WorkReadPage__img" />
          <div className="WorkReadPage__right">
            <h1 className="WorkReadPage__right__title">
              {work?.title.toUpperCase()}
            </h1>
            <p className="WorkReadPage__right__p">
              {work?.description.toUpperCase()}
            </p>
            <span className="WorkReadPage__right__span">
              {work?.advantages}
            </span>
          </div>
          <img
            src={iconEdit}
            alt=""
            className="WorkReadPage__item__edit"
            onClick={() => {
              setEditInp({
                imgUrl: work?.imgUrl || "",
                advantages: work?.advantages || "",
                title: work?.title || "",
                description: work?.description || "",
              });
              setEditWork(!editWork);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default WorkReadPage;
