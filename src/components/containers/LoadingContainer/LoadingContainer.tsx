import { Loader } from '@components/common';

interface IProps {
  children: JSX.Element;
  isLoading: boolean;
}

export const LoadingContainer = ({ isLoading, children }: IProps) => {
  return isLoading ? <Loader /> : children;
};
