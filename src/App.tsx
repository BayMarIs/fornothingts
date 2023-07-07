import React, { useEffect, useState } from "react";
import "./App.css";
import Headers from "./components/Headers/Headers";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import Introduce from "./components/Introduce/Introduce";
import SideElements from "./components/SideElements/SideElements";
import { Form } from "./components/Form/Form";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  // function goToWork(): void {
  //   setPage(1);
  //   navigate("/work");
  // }
  const [circlePosition, setCirclePosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const [showIntroduce, setShowIntroduce] = useState(
    sessionStorage.getItem("showIntroduce") !== "false"
  );
  const [vibe, setVibe] = useState<number>(1);
  function changeVibe(): void {
    if (vibe <= 2) {
      setVibe(vibe + 1);
    } else setVibe(1);
  }
  useEffect(() => {
    // Задержка в 3 секунды перед скрытием компонента <Introduce>
    const timer = setTimeout(() => {
      setShowIntroduce(false);
      sessionStorage.setItem("showIntroduce", "false");
    }, 6000);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = event;
    setCirclePosition({ x: pageX, y: pageY });
  };

  const circleStyle: React.CSSProperties = {
    position: "absolute",
    top: circlePosition.y - 15,
    left: circlePosition.x - 15,
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    border: "2px solid tomato",
    transition: "top 0.3s ease, left 0.3s ease, border 0.3s ease",
    pointerEvents: "none",
    zIndex: 9,
  };
  function goToWork(): void {
    setPage(1);
    navigate("/work");
  }
  function goToHomePage(): void {
    setPage(0);
    navigate("/");
  }
  return (
    <div
      className="App"
      onMouseMove={handleMouseMove}
      style={
        vibe == 1
          ? { color: "#bfbfbf", backgroundColor: "#040507" }
          : vibe == 2
          ? { color: "#040507", backgroundColor: "yellow" }
          : { color: "#040507", backgroundColor: "darkgreen" }
      }
    >
      <div style={circleStyle}></div>
      {showIntroduce && <Introduce />}
      {!showIntroduce && (
        <div>
          <Headers
            goToWork={goToWork}
            page={page}
            goToHomePage={goToHomePage}
          />
          <SideElements changeVibe={changeVibe} />
          <MainRoutes goToWork={goToWork} goToHomePage={goToHomePage} />
          <Form></Form>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
