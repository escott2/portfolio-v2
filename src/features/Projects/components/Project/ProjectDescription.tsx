interface ProjectDescriptionProps {
  description: string;
}

function ProjectDescription({ description }: ProjectDescriptionProps) {
  return <p>{description}</p>;
}

export default ProjectDescription;
