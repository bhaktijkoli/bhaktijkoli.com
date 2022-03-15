import ProjectCard from "components/ProjectsGrid/ProjectCard";
import ProjectDialog from "components/ProjectsGrid/ProjectDialog";
import useClient from "hooks/useClient";
import { useRouter } from "next/router";
import * as React from "react";
import Fade from "react-reveal/Fade";
import { Project, ProjectEntry } from "types";

const Projects: React.FC = () => {
  const router = useRouter();
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  );
  const client = useClient();
  React.useEffect(() => {
    client
      .getEntries<ProjectEntry>({ content_type: "projects" })
      .then((res) => {
        const projects: Project[] = res.items
          .filter((entity) => entity.fields.featured === true)
          .map((entity) => {
            return {
              id: entity.sys.id,
              name: entity.fields.name,
              categories: entity.fields.categories,
              slug: entity.fields.slug,
              description: entity.fields.description,
              link: entity.fields.link,
              github: entity.fields.github,
              image: entity.fields.image?.fields.file.url,
              featured: entity.fields.featured,
            };
          });
        setProjects(projects);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <section id="projects">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="title">My Projects</h1>
              <p className="subtitle">
                I have built a number of projects over the years, few were
                developed as a freelancer and others as open source.
              </p>
            </div>
          </div>
          <div className="row projects-grid">
            {projects.slice(0, 6).map((project, key) => {
              return (
                <div className="col-sm-4" key={project.id}>
                  <Fade left distance="10%" duration={500} delay={50 * key}>
                    <ProjectCard
                      project={project}
                      setSelectedProject={setSelectedProject}
                    />
                  </Fade>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="btn-container">
                <button
                  className="btn-chat"
                  onClick={() => router.push("/projects")}
                >
                  View More<i></i>
                </button>
              </div>
            </div>
          </div>
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

export default Projects;
