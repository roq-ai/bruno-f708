import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface TutorialInterface {
  id?: string;
  title: string;
  content: string;
  category_id?: string;
  created_at?: any;
  updated_at?: any;

  category?: CategoryInterface;
  _count?: {};
}

export interface TutorialGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  category_id?: string;
}
