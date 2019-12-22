import {post} from './getapi'


export const getlogin = data =>post('/api/v1/getlogin',data); //登录账号



export const removeshop = data =>post('/api/v1/removeshop',data);
export const adduserlist = data =>post('/api/v1/adduserlist',data); //添加账号
export const getshoplist = data =>post('/api/v1/getshoplist',data);
export const addaddgoods = data =>post('/api/v1/addaddgoods',data);
export const getgoodslist = data =>post('/api/v1/getgoodslist',data);
export const getUser = data =>post('/api/v3/getUser',data);
export const updateUser = data =>post('/api/v3/updateUser',data);



export const PlaceOrder = data =>post('/api/v3/PlaceOrder',data);
export const payorder = data =>post('/api/v3/payorder',data);
export const GetOrder = data =>post('/api/v3/GetOrder',data);
export const login = data =>post('/api/v3/login',data);


export const getgoodslistall = data =>post('/api/v1/getgoodslistall',data);

export const getUserinfo = data =>post('/api/v3/getUserinfo',data);

export const getgoodslistname = data =>post('/api/v1/getgoodslistname',data);

export const delect = data =>post('/api/v3/delect',data);
