import clsx from "clsx";
import * as React from "react";
import Fade from "react-reveal/Fade";
import useClient from "hooks/useClient";
import { Project } from "types";
import ProjectDialog from "./ProjectDialog";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = [
  {
    label: "All",
    tag: "all",
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
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [selectedFilter, setSelectedFilter] = React.useState("all");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  );
  const client = useClient();
  React.useEffect(() => {
    client.getEntries({ content_type: "projects" }).then((res) => {
      setProjects(res.items as any);
    });
    // eslint-disable-next-line
  }, []);
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
        <div className="row projects-grid">
          {projects
            .filter((project) =>
              selectedFilter === "all"
                ? true
                : project.fields.categories.includes(selectedFilter)
            )
            .map((project, key) => {
              return (
                <div className="col-sm-4" key={key}>
                  <Fade left distance="10%" duration={500} delay={50 * key}>
                    <motion.div
                      className="project"
                      onClick={() => setSelectedProject(project)}
                      layoutId={project.fields.name}
                    >
                      <img src={`${project.fields.image?.fields.file.url}`} />
                      <div className="backdrop">
                        <h3 className="project-title">{project.fields.name}</h3>
                      </div>
                    </motion.div>
                  </Fade>
                </div>
              );
            })}
        </div>
      </div>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsGrid;
