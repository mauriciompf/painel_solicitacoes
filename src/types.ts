export interface DropDownType {
  label: string;
  options: string[];
}

export interface DropDownsData {
  id: number;
  label: string;
  options: string[];
  subOptions?: string[];
}

export interface SubOptions {
  id: number;
  optionName: string;
  subOptions: string[];
}
