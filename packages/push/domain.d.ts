
interface IPush {
  uuid: string;
  title: string;
  content?: string;
  autoClose?: boolean;
  mode?: 'success' | 'danger';
}
