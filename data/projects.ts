const projects = [
    {
      name: "Project One",
      description: "This is a brief description of Project One. It does many interesting things.This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. ",
      links: {
        github: "https://github.com/user/project-one",
        website: "https://project-one.com"
      },
      tags: ["Website"]
    },
    {
      name: "Project Two",
      description: "Project Two is an amazing tool for developers.",
      links: {
        github: "https://github.com/user/project-two",
        website: "https://project-two.com"
      },
      tags: ["VScode Plugin"]
    },
    {
      name: "Project Three",
      description: "This is a brief description of Project Three. It does many interesting things.This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. This is a brief description of Project One. ",
      links: {
        github: "https://github.com/user/project-one",
        website: "https://project-one.com"
      },
      tags: ["Website"]
    },
    {
      name: "Project Four",
      description: "Project Four is an amazing tool for developers.",
      links: {
        github: "https://github.com/user/project-two",
        website: "https://project-two.com"
      },
      tags: ["VScode Plugin"]
    }
  ];
  

  // 自动为每个项目添加 "all" 标签的函数
const addAllTag = (projects: any[]) => {
  projects.forEach(project => {
    if (!project.tags.includes("All")) {
      project.tags.unshift("All");
    }
  });
};

// 调用函数
addAllTag(projects);

export { projects };