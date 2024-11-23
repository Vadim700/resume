interface PersonalData {
  title: string;
  name: {
    title: string;
    value: string;
  };
  phone: {
    title: string;
    value: string;
  };
  email: {
    title: string;
    value: {
      mainEmail: string;
      altEmail: string;
    };
  };
  github: {
    title: string;
    value: string;
  };
  linkedin: {
    title: string;
    value: string;
  };
  dateOfBirth: {
    title: string;
    value: string;
  };
  PlaceOfBirth: {
    title: string;
    value: string;
  };
}

interface Hobbies {
  title: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface Language {
  lang: {
    title: string;
    value: string;
  };
}

interface Languages {
  title: string;
  main: Language;
  alt: Language;
}

interface ExperienceDetail {
  name: string;
  date: string;
  company: string;
  ditail: string;
}

interface Experience {
  title: string;
  current: ExperienceDetail;
  previous: ExperienceDetail;
}

interface ProjectContribution {
  name: string;
  value: string;
}

interface Project {
  name: {
    comercial: string;
    companyName: string;
  };
  steck: {
    name: string;
    value: string;
  };
  contribution: ProjectContribution;
}

interface Projects {
  title: string;
  moiseikin: Project;
  sota: Project;
  confidentPepper: Project;
  burmash: Project;
  ncTask: Project;
}

interface EducationDetail {
  title: string;
  date: string;
  name: string;
  specialization: {
    name: string;
    value: string;
  };
}

interface Education {
  title: string;
  miphi: EducationDetail;
  susu: EducationDetail;
}

interface Course {
  title: string;
  date: string;
  name: string;
}

interface Courses {
  title: string;
  react: Course;
  js: Course;
  markup: Course;
}

interface Skills {
  title: string;
}

interface Achievements {
  title: string;
  value: string;
}

interface SideContent {
  personalData: PersonalData;
  hobbies: Hobbies;
  languages: Languages;
}

interface Page {
  subtitle: string;
  experience: Experience;
  projects: Projects;
  education: Education;
  courses: Courses;
  skills: Skills;
  achivments: Achievements;
}

export interface Resume {
  header: string;
  aside: SideContent;
  page: Page;
}
