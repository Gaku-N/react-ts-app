import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { PrimaryButton } from '../atoms/PrimaryButton';
const dummy = () => {}; // TODO

export const Login = () => {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >
      <Box
        bg='white'
        w='sm'
        p={4}
        borderRadius='md'
        shadow='md'
      >
        <Heading
          as='h1'
          size='lg'
          textAlign='center'
        >
          ３Dプリンタ管理表
        </Heading>
        <Divider my={4} />
        <Stack
          spacing={6}
          py={4}
          px={10}
        >
          <Input placeholder='グローバル社員番号' />
          <PrimaryButton onClick={dummy}>Login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
};
