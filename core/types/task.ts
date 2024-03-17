export type TaskPriority = 'High' | 'Medium' | 'Low';
export type TaskStatus = 'To do' | 'Done' | 'In Progress' | 'Failed' | 'Review';
export type TaskCategory = 'Design' | 'Program' | 'Networking' | 'Other';

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  dateFrom: string;
  dateTo: string;
  status: TaskStatus;
  category: TaskCategory;
};
