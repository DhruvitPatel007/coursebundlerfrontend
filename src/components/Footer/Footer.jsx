import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {AiFillInstagram, AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box padding={'4'} bg="black" minH={'10vh'}>
      <VStack direction={['column', 'row']}>   
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="30"
          marginBottom={'5'}
        >
          <a href="https://twitter.com/pateldhruvit07" target={'blank'}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.instagram.com/mr_dhr_007/" target={'blank'}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/DhruvitPatel007" target={'blank'}>
            <AiFillGithub />
          </a>
        </HStack>

        <Stack alignItems={['center', 'center']} width="full">
          <Heading
            children="All Rights Reserved @Dhruvit Patel 2022"
            color={'white'}
            fontSize="15"
          />
        </Stack>
      </VStack>
    </Box>
  );
};

export default Footer;
