import { Box, Flex, Heading } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { MenuIconButton } from '../atoms/MenuIconButton';

// const onClickSetting = useCallback(() => history.push('/home/setting'), []);

export const Header: FC = memo(() => {
  return (
    <>
      <Flex
        as='nav'
        bg='teal.500'
        color='gray.50'
        align='center'
        justify='space-between'
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align='center'
          as='a'
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={() => {}}
        >
          <Heading
            as='h1'
            fontSize={{ base: 'md', md: 'lg' }}
          >
            <Link to={'/'}>管理アプリ</Link>
          </Heading>
        </Flex>
        <Flex
          align='center'
          fontSize='sm'
          display={{ base: 'none', md: 'flex' }}
          flexGrow={2}
        >
          <Box pr={4}>
            <Link to={'/Login'}>ログイン</Link>
          </Box>
          <Box pr={4}>
            <Link to={'/Setting'}>設定</Link>
          </Box>
          <Box pr={4}>
            <Link to={'/UserManagement'}>ユーザー管理</Link>
          </Box><MenuIconButton onOpen={()=>{}} />
        </Flex>
        
      </Flex>
    </>
  );
});
