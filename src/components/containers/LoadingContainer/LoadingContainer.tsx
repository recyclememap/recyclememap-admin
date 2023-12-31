import { PropsWithChildren } from 'react';
import { Loader } from '@components/common';

interface IProps {
  isLoading: boolean;
}

export const LoadingContainer = ({
  isLoading,
  children
}: PropsWithChildren<IProps>) => {
  return isLoading ? <Loader /> : children;
};
