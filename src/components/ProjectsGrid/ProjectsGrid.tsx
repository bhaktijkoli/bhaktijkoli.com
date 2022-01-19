import clsx from "clsx";
import * as React from "react";

const FILTERS = [
  {
    label: "All",
    tag: "",
  },
  {
    label: "Web",
    tag: "web",
  },
  {
    label: "Mobile",
    tag: "mobile",
  },
  {
    label: "IOT",
    tag: "iot",
  },
  {
    label: "Blockchain",
    tag: "blockchain",
  },
];

const ProjectsGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = React.useState("");
  return (
    <section id="projects">
      <div className="container">
        <div className="row filters">
          {FILTERS.map((filter, key) => {
            return (
              <button
                className={clsx({
                  "filter-item": true,
                  active: selectedFilter === filter.tag,
                })}
                onClick={() => setSelectedFilter(filter.tag)}
                key={key}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
