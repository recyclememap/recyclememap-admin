import { Collapse as MUICollapse } from '@mui/material';
import { useState, PropsWithChildren } from 'react';
import { Flex } from '@components/containers';
import { CollapseTitle } from './CollapseTitle/CollapseTitle';

interface ICollapse {
  title: string;
  isHeader?: boolean;
}

export const Collapse = ({
  children,
  title,
  isHeader = false
}: PropsWithChildren<ICollapse>) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCollapseChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex sx={{ flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <CollapseTitle
        isHeader={isHeader}
        title={title}
        isOpen={isOpen}
        onCollapseChange={onCollapseChange}
      />
      <MUICollapse in={isOpen} timeout="auto" unmountOnExit>
        {children}
      </MUICollapse>
    </Flex>
  );
};
