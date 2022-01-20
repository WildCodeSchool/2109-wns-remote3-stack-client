interface IProjectList {
  id: string;
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: string;
}

interface IProjectPayload {
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: string;
}

interface IProject {
  getProjectByID: getProjectByID;
}

interface getProjectByID {
  id: string;
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: string;
  tasks: ITaskList[];
  members: IUserProject[];
}

interface ITaskList {
  id: string;
  subject: string;
  projectId: string;
  advancement: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: string;
}

interface ITask {
  getTaskByID: getTaskByID;
}

interface getUserWithProjects {
  getUserWithProjects: { projects: IUserProject[] };
}

interface IUserProject {
  userId: string;
  projectId: string;
  projectRole: string;
}
interface getTaskByID {
  id: string;
  subject: string;
  projectId: string;
  advancement: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: string;
}

interface getAllUsers {
  getAllUsers: IUser[];
}

interface getUserByID {
  getUserByID: IUser;
}

interface IUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
}
