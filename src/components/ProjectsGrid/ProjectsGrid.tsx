import clsx from "clsx";
import * as React from "react";
import Fade from "react-reveal/Fade";
import useClient from "hooks/useClient";
import { Project, ProjectEntry } from "types";
import ProjectDialog from "./ProjectDialog";
import { motion } from "framer-motion";

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
    client
      .getEntries<ProjectEntry>({ content_type: "projects" })
      .then((res) => {
        const projects: Project[] = res.items.map((entity) => {
          return {
            id: entity.sys.id,
            name: entity.fields.name,
            categories: entity.fields.categories,
            slug: entity.fields.slug,
            description: entity.fields.description,
            link: entity.fields.link,
            github: entity.fields.github,
            image: entity.fields.image.fields.file.url,
          };
        });
        setProjects(projects);
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
                : project.categories.includes(selectedFilter)
            )
            .map((project, key) => {
              return (
                <div className="col-sm-4" key={project.id}>
                  <Fade left distance="10%" duration={500} delay={50 * key}>
                    <motion.div
                      className="project"
                      onClick={() => setSelectedProject(project)}
                      layoutId={project.name}
                    >
                      <img src={`${project.image}`} />
                      <div className="backdrop">
                        <h3 className="project-title">{project.name}</h3>
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
