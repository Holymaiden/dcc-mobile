export type CommitteTaskStatus = 'In Progress' | 'Done';

export type Committe = {
  id: string;
  name: string;
  description: string;
  theme?: string;
  status: CommitteTaskStatus;
  date_start: string;
  date_end: string;
  organizer_id?: string;
};
