import styled from 'styled-components';
import PageTitle from '../../components/page-title.component';
import { Link } from 'react-router-dom';
import { mainRoute, routes } from '../../common/constants/routes.constant';
import { gql, useReactiveVar, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { isLoggedInVar, logUserOut } from '../../apollo';
import { seeCoffeeShops_seeCoffeeShops_shops as ISeeCoffeeShops } from '../../__generated__/seeCoffeeShops'; // eslint-disable-line

const SMain = styled.div`
   display: flex;
   flex-direction: column;
`;
const LinkWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   width: 100%;
   height: 50px;
`;

export const LinkBtn = styled(Link)`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100px;
   height: 30px;
   background-color: ${({ theme }) => theme.accent};
   color: ${({ theme }) => theme.colors.white};
   border-radius: 5px;
   margin-right: 5px;
`;

const Content = styled.div`
   display: flex;
   width: 100%;
`;

const CoffeeShops = styled.div`
   display: flex;
   flex-direction: column;
   width: 50%;
`;

const Shop = styled.div`
   margin: 10px 0 10px 0;
`;

const SEE_COFFEE_SHOPS_QUERY = gql`
   query seeCoffeeShops($seeCoffeeShopsInput: SeeCoffeeShopsInput!) {
      seeCoffeeShops(input: $seeCoffeeShopsInput) {
         ok
         error
         shops {
            id
            name
            latitude
            longitude
            user {
               username
               avatarUrl
            }
            photos {
               url
            }
            categories {
               name
               slug
            }
         }
      }
   }
`;

const Main = () => {
   const hasToken = useReactiveVar(isLoggedInVar);
   const { data } = useQuery(SEE_COFFEE_SHOPS_QUERY, {
      skip: !hasToken,
      variables: {
         seeCoffeeShopsInput: {
            page: 1,
         },
      },
   });
   useEffect(() => {
      if (data?.error) {
         logUserOut();
      }
   }, [data]);
   return (
      <SMain>
         <PageTitle title='Main' />
         <LinkWrapper>
            <LinkBtn to={mainRoute(routes.login.addShop)}>Add Shop</LinkBtn>
         </LinkWrapper>
         <Content>
            <CoffeeShops>
               {data?.seeCoffeeShops?.shops?.map((shop: ISeeCoffeeShops, index: number) => {
                  return (
                     <Shop key={index}>
                        <div>⭐Shop {shop.id} ⭐</div>
                        <br />
                        <div>Shop Name:: {shop.name}</div>
                        <div>Shop Longitude:: {shop.longitude}</div>
                        <div>Shop Latitude:: {shop.latitude}</div>
                        <br />
                        <LinkBtn to={mainRoute(routes.login.shopDetail.see) + shop.id}>See More</LinkBtn>
                        <hr />
                     </Shop>
                  );
               })}
            </CoffeeShops>
         </Content>
      </SMain>
   );
};

export default Main;
