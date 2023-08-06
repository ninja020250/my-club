import { ROUTE_PATHS } from '@/config/route.config';
import { Logo, PasswordField } from '@/components';
import { loginAsync, selectAuthStatus } from '@/features/AuthSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

type Inputs = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectAuthStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) navigate(ROUTE_PATHS.GAME_PLAY);
  }, [isLoggedIn]);

  const onSubmit = (values: Inputs) => {
    dispatch(loginAsync(values));
  };

  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="8">
          <Stack spacing="6">
            <Logo />
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={{ base: 'xs', md: 'sm' }}>Đăng nhập</Heading>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg.surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl isInvalid={!!errors.username}>
                  <FormLabel htmlFor="username">{t('auth.username')}</FormLabel>
                  <Input
                    id="username"
                    type="text"
                    {...register('username', {
                      required: t('is-required', { value: t('auth.username') }),
                    })}
                  />
                  <FormErrorMessage>
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password}>
                  <FormLabel htmlFor="password">{t('auth.password')}</FormLabel>
                  <PasswordField
                    inputProps={{
                      ...register('password', {
                        required: t('is-required', {
                          value: t('auth.username'),
                        }),
                      }),
                    }}
                  ></PasswordField>
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button
                  isLoading={isSubmitting}
                  type="submit"
                  colorScheme="teal"
                >
                  Đăng nhập
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Container>
  );
};

export default LoginPage;
