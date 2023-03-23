import styled from 'styled-components';
import { SAddShop, Title as AddShopTitle, Form as AddShopForm, Input as AddShopInput, Button as AddShopButton } from './add-shop.page';
import PageTitle from '../../../components/page-title.component';
import FormError from '../../../components/auth/form-error.component';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface IEditShopForm {
   name: string;
   longitude: string;
   latitude: string;
   categoryName: string;
   result?: string;
}

const SEditShop = styled(SAddShop)``;
const Title = styled(AddShopTitle)``;
const Form = styled(AddShopForm)``;
const Input = styled(AddShopInput)``;
const Button = styled(AddShopButton)``;

const EditShop = () => {
   const {
      register,
      handleSubmit,
      setError,
      setValue,
      clearErrors,
      formState: { errors, isValid },
   } = useForm<IEditShopForm>({
      mode: 'onChange',
   });

   const location = useLocation();
   console.log(location);

   const onValid = (data: IEditShopForm) => {
      console.log(data);
   };

   useEffect(() => {
      setValue('name', location.state.name);
      setValue('longitude', location.state.longitude);
      setValue('latitude', location.state.latitude);
   }, [location]);
   return (
      <SEditShop>
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
      </SEditShop>
   );
};

export default EditShop;
