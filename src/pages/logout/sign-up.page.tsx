import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FatLink, ISignUpForm, Input, Logo } from '../../components/shard';
import AuthLayout from '../../components/auth/auth-layout.component';
import PageTitle from '../../components/page-title.component';
import FormBox from '../../components/auth/form-box.component';
import styled from 'styled-components';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Separator from '../../components/auth/separator.component';
import FormError from '../../components/auth/form-error.component';
import Button from './../../components/auth/button.component';
import BottomBox from '../../components/auth/button-box.component';
import routes from '../../common/constants/routes.constant';

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
   });

   const onValid = (data: ISignUpForm) => {
      console.log(data);
   };

   const navigate = useNavigate();

   return (
      <AuthLayout>
         <PageTitle title='Sign Up' />
         <FormBox type={'SIGN_UP'}>
            <HeaderContainer>
               <Logo src='https://i.imgur.com/dtuN6qr.png' alt='logo' />
               <SubTitle>Sign up to see photos and videos from your friends.</SubTitle>
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
                     required: '닉네임은 필수 입니다.',
                     minLength: {
                        value: 5,
                        message: '닉네임은 5자 이상이어야 합니다.',
                     },
                  })}
               />
               <FormError message={errors?.username?.message} />
               <Input
                  type='text'
                  placeholder='First Name'
                  hasError={Boolean(errors?.firstName?.message)}
                  {...register('firstName', {
                     required: '이름은 필수 입니다.',
                  })}
               />
               <FormError message={errors?.firstName?.message} />
               <Input
                  type='text'
                  placeholder='Last Name'
                  hasError={Boolean(errors?.lastName?.message)}
                  {...register('lastName', {
                     required: '성은 필수 입니다.',
                  })}
               />
               <FormError message={errors?.lastName?.message} />
               <Input
                  type='email'
                  placeholder='Email'
                  hasError={Boolean(errors?.email?.message)}
                  {...register('email', {
                     required: '이메일은 필수 입니다.',
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
                     required: '비밀번호는 필수 입니다.',
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
                     required: '비밀번호 확인은 필수 입니다.',
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
               <Button type='submit' value='Sign in' disabled={!isValid} />
               <FormError message={errors?.result?.message} />
            </form>
         </FormBox>
         <BottomBox cta={'Have an account?'} link={routes.logout.login} linkText={'Login'} />
      </AuthLayout>
   );
};

export default SignUp;
