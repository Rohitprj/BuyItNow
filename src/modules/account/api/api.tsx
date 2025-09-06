import { BASE_URL } from '@store/config';
import axios from 'axios';

export const loginOrSignup = async (phone: string, address: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/user/login`, {
      phone,
      address,
    });
    console.log('Login', res.data.user);
    return res.data.user;
  } catch (error) {
    console.log('Login or signup Error', error);
    return null;
  }
};

export const getOrderByUserId = async (userId: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/order/${userId}`);
    // console.log('getOrderByUserId', JSON.stringify(res, null, 2));
    return res.data.orders;
  } catch (error) {
    console.log('Order Error', error);
    return [];
  }
};
