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
        <motion.div className="project-dialog" layoutId={project.fields.name}>
          <div className="project-dialog-heading">
            <div className="project-dialog-title">
              <h3>{project.fields.name}</h3>
            </div>
            <button className="close-btn" onClick={onClose}>
              <FiMinimize2 />
            </button>
          </div>
          <div className="project-dialog-content">
            <div className="row">
              <div className="col-sm-6">
                <img
                  className="project-dialog-image"
                  src={project.fields.image?.fields.file.url}
                />
              </div>
              <div className="col-sm-6">
                <p>{project.fields.description}</p>
                {project.fields.link && (
                  <button
                    className="visit-btn"
                    onClick={() => window.open(project.fields.link)}
                  >
                    Visit <FiExternalLink />
                  </button>
                )}
                {project.fields.github && (
                  <button
                    className="github-btn"
                    onClick={() => window.open(project.fields.link)}
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
