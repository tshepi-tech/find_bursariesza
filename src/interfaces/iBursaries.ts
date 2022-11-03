export default interface iBursaries {
  id: string;
  company: string;
  category: string;
  dueDate: string;
  detail: string;
  link: string;
  schoolLevel: [
    {
      highschool: boolean;
      undergraduate: boolean;
      honors: boolean;
      postgraduate: boolean;
    }
  ];
}
