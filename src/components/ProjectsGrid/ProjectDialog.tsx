import * as React from "react";
import { Project } from "types";
import { FiExternalLink, FiGithub, FiMinimize2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  project,
  onClose,
}: ProjectDialogProps) => {
  return (
    <AnimatePresence>
      <div className="project-dialog-container">
        <motion.div className="project-dialog" layoutId={project.name}>
          <div className="project-dialog-heading">
            <div className="project-dialog-title">
              <h3>{project.name}</h3>
            </div>
            <button className="close-btn" onClick={onClose}>
              <FiMinimize2 />
            </button>
          </div>
          <div className="project-dialog-content">
            <div className="row">
              <div className="col-sm-6">
                <img className="project-dialog-image" src={project.image} />
              </div>
              <div className="col-sm-6">
                <p>{project.description}</p>
                {project.link && (
                  <button
                    className="visit-btn"
                    onClick={() => window.open(project.link)}
                  >
                    Visit <FiExternalLink />
                  </button>
                )}
                {project.github && (
                  <button
                    className="github-btn"
                    onClick={() => window.open(project.link)}
                  >
                    Github <FiGithub />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDialog;
