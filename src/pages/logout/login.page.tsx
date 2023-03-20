import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import PageTitle from '../../components/page-title.component';
import FormError from '../../components/auth/form-error.component';
import AuthLayout from '../../components/auth/auth-layout.component';
import FormBox from '../../components/auth/form-box.component';
import { Input, Logo } from '../../components/shard';
import { loginMutation, loginMutationVariables } from '../../__generated__/loginMutation';
import Separator from '../../components/auth/separator.component';
import routes from '../../common/constants/routes.constant';
import BottomBox from '../../components/auth/button-box.component';
import Button from './../../components/auth/button.component';
import { toast } from 'react-toastify';
import { logUserIn } from '../../apollo';

interface IForm {
   email: string;
   password: string;
   result?: string;
}

const NaverLogin = styled.div`
   margin-top: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   background-color: ${({ theme }) => theme.social.naver};
   padding: 10px;
   color: ${({ theme }) => theme.colors.white};
   cursor: pointer;

   span {
      font-weight: 600;
   }
`;

const KakaoLogin = styled(NaverLogin)`
   background-color: ${({ theme }) => theme.social.kakao};
   color: ${({ theme }) => theme.colors.black};
`;

const LOGIN_MUTATION = gql`
   mutation loginMutation($loginInput: LoginInput!) {
      login(input: $loginInput) {
         ok
         error
         token
      }
   }
`;

const Login = () => {
   const {
      register,
      handleSubmit,
      setError,
      clearErrors,
      formState: { errors, isValid },
   } = useForm<IForm>({
      mode: 'onChange',
   });

   const onCompleted = (data: loginMutation) => {
      const {
         login: { ok, error, token },
      } = data;
      if (!ok) {
         if (error) {
            return setError('result', {
               message: error,
            });
         }
      }
      if (token) {
         toast('🎉 Welcome to Nomad Coffee', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
         });
         logUserIn(token);
      }
   };

   const [loginMutation, { loading }] = useMutation<loginMutation, loginMutationVariables>(LOGIN_MUTATION, {
      onCompleted,
   });

   const onValid = ({ email, password }: IForm) => {
      if (loading) {
         return;
      }
      loginMutation({
         variables: {
            loginInput: {
               email,
               password,
            },
         },
      });
   };

   return (
      <AuthLayout>
         <PageTitle title='Login' />
         <FormBox>
            <div>
               <Logo src='https://i.imgur.com/dtuN6qr.png' alt='logo' />
            </div>
            <form onSubmit={handleSubmit(onValid)} onClick={() => clearErrors()}>
               <Input
                  type='text'
                  placeholder='Email'
                  {...register('email', {
                     required: '이메일은 필수입니다.',
                     minLength: {
                        value: 5,
                        message: '이메일은 5자 이상이어야 합니다.',
                     },
                     pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: '이메일 형식이 아닙니다.',
                     },
                  })}
                  hasError={Boolean(errors?.email?.message)}
               />
               <FormError message={errors?.email?.message} />
               <Input
                  type='password'
                  placeholder='Password'
                  {...register('password', {
                     required: '비밀번호는 필수입니다.',
                     minLength: {
                        value: 5,
                        message: '비밀번호는 5자 이상이어야 합니다.',
                     },
                     pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
                        message: '대 소문자, 숫자, 특수문자를 포함해야 합니다.',
                     },
                  })}
                  hasError={Boolean(errors?.password?.message)}
               />
               <FormError message={errors?.password?.message} />
               <Button type='submit' value={loading ? 'Loading...' : 'Log in'} disabled={!isValid || loading} />
               <FormError message={errors?.result?.message} />
            </form>
            <Separator>
               <div></div>
               <span>Or</span>
               <div></div>
            </Separator>
            <NaverLogin>
               <span>Log in with NAVER</span>
            </NaverLogin>
            <KakaoLogin>
               <span>Log in with KAKAO</span>
            </KakaoLogin>
         </FormBox>
         <BottomBox cta={'Dont have an account?'} link={routes.logout.signUp} linkText={'Sign up'} />
      </AuthLayout>
   );
};

export default Login;
