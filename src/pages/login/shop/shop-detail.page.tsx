import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { seeCoffeeShop_seeCoffeeShop_shop as ISeeCoffeeShop } from '../../../__generated__/seeCoffeeShop'; // eslint-disable-line
import { LinkBtn } from '../main.page';
import { mainRoute, routes } from '../../../common/constants/routes.constant';

const SShopDetail = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
`;

const Content = styled.div``;

const SEE_COFFEE_SHOP_QUERY = gql`
   query seeCoffeeShop($seeCoffeeShopInput: SeeCoffeeShopInput!) {
      seeCoffeeShop(input: $seeCoffeeShopInput) {
         ok
         error
         shop {
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

const ShopDetail = () => {
   const { id } = useParams();
   const { data } = useQuery(SEE_COFFEE_SHOP_QUERY, {
      variables: {
         seeCoffeeShopInput: {
            id: Number(id),
         },
      },
   });
   const shop: ISeeCoffeeShop = data?.seeCoffeeShop?.shop;
   return (
      <SShopDetail>
         <Content>
            {!shop ? (
               <div>Loading...</div>
            ) : (
               <>
                  <div>Shop Title</div>
                  <div>{shop.id}</div>
                  <div>{shop.name}</div>
                  <div>{shop.latitude}</div>
                  <div>{shop.longitude}</div>
                  <LinkBtn
                     to={mainRoute(routes.login.editShop.see) + id}
                     state={{
                        id: shop.id,
                        name: shop.name,
                        latitude: shop.latitude,
                        longitude: shop.longitude,
                     }}
                  >
                     Edit
                  </LinkBtn>
                  <hr />
               </>
            )}
         </Content>
      </SShopDetail>
   );
};

export default ShopDetail;
