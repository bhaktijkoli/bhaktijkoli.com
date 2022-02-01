import * as React from "react";
import { Project } from "types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  setSelectedProject: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  setSelectedProject,
}: ProjectCardProps) => {
  return (
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
  );
};

export default ProjectCard;
