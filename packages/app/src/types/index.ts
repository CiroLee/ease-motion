export interface ExampleCard {
  id: string;
  name: string;
  cover: string;
  url: string;
  desc?: string;
  tags?: string[];
}

export type Align = 'start' | 'center' | 'end';
export type Side = 'top' | 'right' | 'bottom' | 'left';
