import "./SideElements.css";
type SideElementsProps = {
  changeVibe: () => void;
};

const SideElements = ({ changeVibe }: SideElementsProps) => {
  return (
    <div className="SideElements">
      <div className="SideElements__left">
        WEST HOLLYWOOD 750 N SAN VICENTE BLVD STE 800
      </div>
      <div className="SideElements__right">
        <p className="SideElements__right__p">Site of the day</p>
        <h1 className="SideElements__right__title">W.</h1>
      </div>
      <div className="SideElements__vibe" onClick={() => changeVibe()}>
        <div className="circle"></div>
      </div>
      <p className="SideElements__p">@ 2023 WONTED FOR NOTHING</p>
    </div>
  );
};

export default SideElements;
