import React, { useEffect, useState } from "react";
import "./WorkReadPage.css";
import { useNavigate, useParams } from "react-router-dom";

import iconDelete from "./icons8-delete.svg";
import iconEdit from "./icons8-edit.svg";
import iconOk from "./icons8-ok.svg";
import iconNo from "./refresh-circle-svgrepo-com.svg";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
interface Work {
  imgUrl: string;
  advantages: string;
  id: string;
  title: string;
  description: string;
}
const WorkReadPage = () => {
  const [work, setWork] = useState<Work>();
  const { id }: any = useParams();
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
  const worksTodoCollection = collection(db, "worksTodo");

  const navigate = useNavigate();
  async function getWorkById(id: string) {
    try {
      let des = await getDocs(worksTodoCollection);
      let res: any = des.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .find((item) => item.id === id);

      if (res) {
        setWork(res);
      } else {
        setWork(undefined);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function changeWork(id: string, obj: object) {
    try {
      const workDoc = doc(db, "worksTodo", id);
      await updateDoc(workDoc, obj);
      getWorkById(id);
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
      changeWork(id, obj);
      setEditWork(!editWork);
    } else {
      alert("Заполните все поля!");
    }
  }
  async function deleteWork(id: string) {
    try {
      // await axios.delete(`${api}/${id}`);
      const workDoc = doc(db, "worksTodo", id);
      await deleteDoc(workDoc);
      getWorkById(id);
    } catch (error) {
      console.log(error);
    }
  }
  //
  useEffect(() => {
    getWorkById(id);
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
                  deleteWork(id);
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
