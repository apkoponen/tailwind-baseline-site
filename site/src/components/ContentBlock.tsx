import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/core';

interface Props {
  children: ReactNode;
}

const ContentBlock = ({ children }: Props) => (
  <Box maxWidth="1024px" margin="0 auto" paddingX={[2, 4, 6, 8, 0]} w="100%">
    {children}
  </Box>
);

export default ContentBlock;
