import { MouseEventHandler } from 'react';

export interface CustomButtonPros {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: any) => void;
  setModel:(s:string)=>void
  selected:string
  setSelected:(s:any)=>void
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface CarDetailsProps {
  isOpen: Boolean;
  closeModal: () => void;
  car: CarProps;
}
export interface FilterProps{
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
export interface HomeProps {
  searchParams: FilterProps;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter:(e:any)=>void;
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit:(n:number)=>void;
}
