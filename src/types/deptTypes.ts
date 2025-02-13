export interface FacultyType {
  imgSrc: SrcType;
  name: string;
  designation: string;
  education: string;
  pdfSrc: SrcType;
  shift: "shift1" | "shift2" | "both";
  showOnHome: boolean;
  deptID: string;
}
export interface ProgramType {
  title: string;
  programType: string;
  aboutProgram: string[];
  deptID: string;
}

export interface SrcType {
  url: string;
  public_id: string;
}

export interface DepartmentType {
  pathName: string;
  deptIcon: SrcType;
  deptName: string;
  bannerData: SrcType[]; // Banner images
  snippetData: {
    studentsCount: number;
    staffsCount: number;
    alumniCount: number;
  };
  about: string[];
  facultyBG: SrcType;
  eventsBG: SrcType;
  aboutBG: SrcType;
  facultyData: FacultyType[];
  programsData: ProgramType[];
}

export type UserRole = "admin" | "user";
