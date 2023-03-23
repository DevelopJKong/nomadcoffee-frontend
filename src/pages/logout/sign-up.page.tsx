import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FatLink, ISignUpForm, Input, Logo } from '../../components/shard';
import AuthLayout from '../../components/auth/auth-layout.component';
import PageTitle from '../../components/page-title.component';
import FormBox from '../../components/auth/form-box.component';
import styled from 'styled-components';
import Separator from '../../components/auth/separator.component';
import FormError from '../../components/auth/form-error.component';
import Button from './../../components/auth/button.component';
import BottomBox from '../../components/auth/button-box.component';
import { routes } from '../../common/constants/routes.constant';
import { gql, useMutation } from '@apollo/client';
import { createAccountMutation, createAccountMutationVariables } from '../../__generated__/createAccountMutation';
import { toast } from 'react-toastify';

const HeaderContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const SubTitle = styled(FatLink)`
   margin-top: 10px;
   font-size: 16px;
   text-align: center;
`;

const CREATE_ACCOUNT_MUTATION = gql`
   mutation createAccountMutation($createAccountInput: CreateAccountInput!) {
      createAccount(input: $createAccountInput) {
         ok
         error
         message
      }
   }
`;

const SignUp = () => {
   const {
      register,
      handleSubmit,
      setError,
      clearErrors,
      getValues,
      formState: { errors, isValid },
   } = useForm<ISignUpForm>({
      mode: 'onChange',
      defaultValues: {
         avatarUrl: '',
         githubUsername: '',
      },
   });

   const navigate = useNavigate();

   const onCompleted = (data: createAccountMutation) => {
      const { email, password } = getValues();
      const {
         createAccount: { ok, error, message },
      } = data;
      if (!ok) {
         if (error) {
            return setError('result', {
               message: error,
            });
         }
      }
      toast('🎉 Please Log in Nomad Coffee', {
         position: 'top-right',
         autoClose: 5000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'colored',
      });
      navigate(routes.logout.login, { replace: true, state: { message, email, password } });
   };

   const [createAccountMutation, { loading }] = useMutation<createAccountMutation, createAccountMutationVariables>(
      CREATE_ACCOUNT_MUTATION,
      {
         onCompleted,
      },
   );
   const onValid = (data: ISignUpForm) => {
      if (loading) {
         return;
      }

      if (data) {
         const { password, confirmationPassword } = data;
         if (password !== confirmationPassword) {
            setError('confirmationPassword', {
               message: '비밀번호를 확인 해 주세요.',
            });
            setError('password', {
               message: '확인 비밀번호를 확인 해 주세요.',
            });
            return;
         }
         createAccountMutation({
            variables: {
               createAccountInput: {
                  email: data.email,
                  password: data.password,
                  username: data.username,
                  location: data.location,
                  avatarUrl: data.avatarUrl,
                  githubUsername: data.githubUsername,
               },
            },
         });
      }
   };
   console.log(isValid);
   return (
      <AuthLayout>
         <PageTitle title='Sign Up' />
         <FormBox type={'SIGN_UP'}>
            <HeaderContainer>
               <Logo src='https://i.imgur.com/dtuN6qr.png' alt='logo' />
               <SubTitle>Sign up to enjoy Nomad Coffee</SubTitle>
            </HeaderContainer>
            <Separator>
               <div></div>
               <span>Or</span>
               <div></div>
            </Separator>
            <form onSubmit={handleSubmit(onValid)} onClick={() => clearErrors()}>
               <Input
                  type='text'
                  placeholder='Username'
                  hasError={Boolean(errors?.username?.message)}
                  {...register('username', {
                     required: {
                        value: true,
                        message: '닉네임은 필수 입니다.',
                     },
                     minLength: {
                        value: 5,
                        message: '닉네임은 5자 이상이어야 합니다.',
                     },
                  })}
               />
               <FormError message={errors?.username?.message} />
               <Input
                  type='text'
                  placeholder='Name'
                  hasError={Boolean(errors?.name?.message)}
                  {...register('name', {
                     required: {
                        value: true,
                        message: '이름은 필수 입니다.',
                     },
                     minLength: {
                        value: 5,
                        message: '이름은 5자 이상이어야 합니다.',
                     },
                  })}
               />
               <FormError message={errors?.name?.message} />
               <Input
                  type='email'
                  placeholder='Email'
                  hasError={Boolean(errors?.email?.message)}
                  {...register('email', {
                     required: {
                        value: true,
                        message: '이메일은 필수 입니다.',
                     },
                     minLength: {
                        value: 5,
                        message: '이메일은 5자 이상이어야 합니다.',
                     },
                     pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: '이메일 형식이 아닙니다.',
                     },
                  })}
               />
               <FormError message={errors?.email?.message} />
               <Input
                  type='password'
                  placeholder='Password'
                  hasError={Boolean(errors?.password?.message)}
                  {...register('password', {
                     required: {
                        value: true,
                        message: '비밀번호는 필수 입니다.',
                     },
                     minLength: {
                        value: 5,
                        message: '비밀번호는 5자 이상이어야 합니다.',
                     },
                     pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                        message: '대문자,소문자,숫자,특수문자를 포함해야 합니다.',
                     },
                  })}
               />
               <FormError message={errors?.password?.message} />
               <Input
                  type='password'
                  placeholder='Confirmation Password'
                  hasError={Boolean(errors?.confirmationPassword?.message)}
                  {...register('confirmationPassword', {
                     required: {
                        value: true,
                        message: '비밀번호 확인은 필수 입니다.',
                     },
                     minLength: {
                        value: 5,
                        message: '비밀번호 확인은 5자 이상이어야 합니다.',
                     },
                     pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                        message: '대문자,소문자,숫자,특수문자를 포함해야 합니다.',
                     },
                  })}
               />
               <FormError message={errors?.confirmationPassword?.message} />
               <Input
                  type='text'
                  placeholder='Location'
                  hasError={Boolean(errors?.location?.message)}
                  {...register('location', {
                     required: {
                        value: true,
                        message: '위치는 필수 입니다.',
                     },
                  })}
               />
               <FormError message={errors?.location?.message} />

               <Input type='hidden' placeholder='Profile Image' hasError={Boolean(errors?.avatarUrl?.message)} {...register('avatarUrl')} />
               <Input
                  type='hidden'
                  placeholder='Github Username'
                  hasError={Boolean(errors?.githubUsername?.message)}
                  {...register('githubUsername')}
               />
               <Button type='submit' value={loading ? 'Loading...' : 'Sign up'} disabled={!isValid || loading} />
               <FormError message={errors?.result?.message} />
            </form>
         </FormBox>
         <BottomBox cta={'Have an account?'} link={routes.logout.login} linkText={'Login'} />
      </AuthLayout>
   );
};

export default SignUp;
