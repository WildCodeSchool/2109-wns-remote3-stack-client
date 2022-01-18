interface IProjectList {
  id: string;
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: string;
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
