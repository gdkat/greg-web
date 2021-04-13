import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Fab from "@material-ui/core/Fab";
import AirplaneSVG from "../../../assets/undraw_aircraft_fbvl.svg";

interface ViewMoreProps {
  color: string;
  index?: number;
}

const ViewMore = (props: ViewMoreProps) => {
  const { color, index } = props;

  const onHover = (e: any) => {
    if (index == null) return;
    const odd = (index + 1) % 2;
    const hoverEl = document.getElementById(`project-${index}`);
    let neighborEl = odd
      ? document.getElementById(`project-${index + 1}`)
      : document.getElementById(`project-${index - 1}`);
    if (!hoverEl || !neighborEl) return;

    hoverEl.style.gridColumn = odd ? "1 / 3" : "2 / 4";
    neighborEl.style.gridColumn = odd ? "3 / 4" : "1 / 2";
  };

  return (
    <div
      id={index != null ? `project-${index}` : undefined}
      className="project-root"
      style={{ backgroundColor: color }}
      // onMouseOver={onHover}
    >
      <h3 className="project-title">View All Projects</h3>
      <div className="project-description">
        <img
          src={AirplaneSVG}
          alt="airplane"
          style={{ width: "100%", maxHeight: 150 }}
        />
      </div>
      <div className="project-languages">
        <Fab color="primary" aria-label="add">
          <ChevronRightIcon
            onClick={() =>
              window.open("https://github.com/gdkat?tab=repositories", "_blank")
            }
          />
        </Fab>
      </div>
    </div>
  );
};

export default ViewMore;
