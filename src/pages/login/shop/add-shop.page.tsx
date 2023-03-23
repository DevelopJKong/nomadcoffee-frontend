import styled from 'styled-components';
import PageTitle from '../../../components/page-title.component';
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { createCoffeeShop, createCoffeeShopVariables } from '../../../__generated__/createCoffeeShop';
import { useNavigate } from 'react-router-dom';
import FormError from '../../../components/auth/form-error.component';

interface IAddShopForm {
   name: string;
   longitude: string;
   latitude: string;
   categoryName: string;
   result?: string;
}

export const SAddShop = styled.div`
   width: 100%;
`;

export const Title = styled.h2`
   font-size: ${({ theme }) => theme.fontSize.large};
   margin-bottom: 20px;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
`;

export const Input = styled.input`
   height: 50px;
   padding: 0 10px;
   margin: 10px 0 10px 0;
   cursor: pointer;
   border: 1px solid ${({ theme }) => theme.colors.gray};
   width: 50%;
   max-width: 500px;
   border-radius: 5px;
`;

export const Button = styled(Input)<{ isValid: boolean }>`
   text-align: center;
   background-color: ${({ theme, isValid }) => (!isValid ? theme.colors.gray : theme.accent)};
   color: ${({ theme }) => theme.colors.white};
   cursor: ${({ isValid }) => (!isValid ? 'not-allowed' : 'pointer')};
`;

const CREATE_COFFEE_SHOP_MUTATION = gql`
   mutation createCoffeeShop($createCoffeeShopInput: CreateCoffeeShopInput!) {
      createCoffeeShop(input: $createCoffeeShopInput) {
         ok
         error
         message
      }
   }
`;

const AddShop = () => {
   const {
      register,
      handleSubmit,
      setError,
      clearErrors,
      formState: { errors, isValid },
   } = useForm<IAddShopForm>({
      mode: 'onChange',
   });
   const navigate = useNavigate();
   const onCompleted = (data: createCoffeeShop) => {
      const {
         createCoffeeShop: { ok, message },
      } = data;

      if (!ok) {
         if (message) {
            return setError('result', {
               message,
            });
         }
      }
      navigate('/main');
   };

   const [createAddShopMutation, { loading }] = useMutation<createCoffeeShop, createCoffeeShopVariables>(CREATE_COFFEE_SHOP_MUTATION, {
      onCompleted,
   });

   const onValid = (data: IAddShopForm) => {
      if (loading) return;
      createAddShopMutation({
         variables: {
            createCoffeeShopInput: {
               name: data.name,
               longitude: data.longitude,
               latitude: data.latitude,
               categoryName: data.categoryName,
            },
         },
      });
   };

   return (
      <SAddShop>
         <PageTitle title='Add Shop' />
         <Title>Add Shop</Title>
         <Form onSubmit={handleSubmit(onValid)} onClick={() => clearErrors()}>
            <Input
               type='text'
               placeholder='제목'
               {...register('name', {
                  required: {
                     value: true,
                     message: '제목을 입력 해 주세요.',
                  },
                  minLength: {
                     value: 3,
                     message: '제목은 3글자 이상 입력 해 주세요.',
                  },
               })}
            />
            <FormError message={errors?.name?.message} />
            <Input type='text' placeholder='위치 위도' {...register('longitude')} />
            <Input type='text' placeholder='위치 경도' {...register('latitude')} />
            <Input
               type='text'
               placeholder='카테고리'
               {...register('categoryName', {
                  required: {
                     value: true,
                     message: '카테고리를 입력 해 주세요.',
                  },
                  pattern: {
                     value: /^#[a-zA-Z0-9가-힣]+$/,
                     message: '카테고리는 #으로 시작해야 합니다.',
                  },
               })}
            />
            <FormError message={errors?.categoryName?.message} />
            <Button isValid={isValid} type='submit' value='Click' disabled={!isValid} />
            <FormError message={errors?.result?.message} />
         </Form>
      </SAddShop>
   );
};

export default AddShop;
