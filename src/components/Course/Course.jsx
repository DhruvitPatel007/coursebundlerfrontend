import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../redux/actions/course';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from "react-hot-toast"
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

import {
  Container,
  Image,
  Heading,
  Input,
  HStack,
  Button,
  Text,
  Stack,
  VStack,
  
} from '@chakra-ui/react';
// import { BsSearch } from 'react-icons/bs';

const Coursecard = ({
  views,
  title,
  imageSrc,
  id,
  addPlaylist,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="coursecard" alignItems={['center', 'flex-start']} marginTop="6">
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3} //No of lines means if there is two or more line text then it will be dot dot(.....)
        children={title}
        size={'sm'}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creater'}
        />
        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`views - ${views}`}
        textTransform="uppercase"
      />

      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/courses/${id}`}>
          <Button colorScheme={'cyan'}>Watch Now</Button>
        </Link>
        <Button
        
          variant={'ghost'}
          colorScheme={'cyan'}
          onClick={() => addPlaylist(id)}
          isLoading={loading}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Course = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const addPlaylist = async courseId => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  const categories = [
    'Web Development',
    'App Development',
    'Machine Learning',
    'Artificial Intellegence',
    'Data Science',
    'Blockchain Development',
  ];

  const { loading, courses, error, message } = useSelector(
    state => state.course
  );

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error, message]);

  return (
    <Container minH={'95vh'} maxW="container.lg" padding={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type={'text'}
        focusBorderColor="cyan.500"
      />

      <HStack overflowX={'auto'} paddingY="8">
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {
          courses.length >0 ? (courses.map(item=>(
            <Coursecard
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addPlaylist={addPlaylist}
              loading={loading}
            />

          ))):(<Heading mt={10} children="Course not found"/>
        )}
      </Stack>
    </Container>
  );
};

export default Course;
