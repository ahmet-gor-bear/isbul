import { number } from "prop-types";

export interface InfoSectinProps {
  title: string;
  data: DataType[];
}

export type DataType = {
  key: string;
  value: string;
};

export interface HeaderProps {
  data: HeaderPropsType;
}

export type HeaderPropsType = {
  name: string;
  age: number;
  job: string;
  updated_at: string;
  last_login: string;
};

export type DummyDataType = {
  info: HeaderPropsType;
  contact: DummyKeyValuePairsType[];
  personal: DummyKeyValuePairsType[];
  experience: DummyKeyValuePairsType[];
};

type DummyKeyValuePairsType = {
  key: string;
  value: string;
};
