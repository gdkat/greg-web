import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Fab from "@material-ui/core/Fab";
import AirplaneSVG from "../../../assets/undraw_aircraft_fbvl.svg";

interface ViewMoreProps {
  color: string;
}

const ViewMore = (props: ViewMoreProps) => {
  const { color } = props;

  return (
    <div className="project-root" style={{ backgroundColor: color }}>
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
