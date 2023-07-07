import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import { WorkPage } from "../pages/WorkPage/WorkPage";
import WorkReadPage from "../pages/WorkReadPage/WorkReadPage";
type MainRoutesProps = {
  goToWork: () => void;
  goToHomePage: () => void;
};

const MainRoutes = ({ goToWork, goToHomePage }: MainRoutesProps) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage goToWork={goToWork} goToHomePage={goToHomePage}></HomePage>
        }
      ></Route>
      <Route
        path="/work"
        element={<WorkPage goToWork={goToWork}></WorkPage>}
      ></Route>
      <Route path="/work/:id" element={<WorkReadPage></WorkReadPage>} />
    </Routes>
  );
};

export default MainRoutes;
