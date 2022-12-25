import React from 'react';
import {
  Stack,
  VStack,
  Heading,
  Text, 
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './home.css';
import vg from '../assets/images/bg.png';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';
import introVideo from '../assets/videos/intro.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="6"
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text
              fontSize={'2xl'}
              fontFamily={'cursive'}
              textAlign={['center', 'left']}
              children="Find Best Content For Yourself At Minimal Price "
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="cyan">
                Explore
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          children="OUR PARTNERS"
          fontFamily="body"
          color={'cyan.400'}
          textAlign={'center'}
        />

        <HStack
          className="partnersBanner"
          justifyContent={'space-evenly'}
          marginTop="5"
        >
          <GrGoogle />
          <FaYoutube />
          <SiCoursera />
          <SiUdemy />
          <FaAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
