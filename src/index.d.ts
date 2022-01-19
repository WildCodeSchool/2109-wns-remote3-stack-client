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

interface ITaskPayload {
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

interface getTaskByID {
  id: string;
  subject: string;
  projectId: string;
  advancement: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: string;
}
interface ITagList {
  id: string;
  label: string;
  color: string;
}

interface ITagPayload {
  label: string;
  color: string;
}

interface IUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
}
