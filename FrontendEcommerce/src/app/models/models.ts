export interface LoginFormData {
  email: string;
  password: string;
}

export interface registerFormModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface loginResponse {
  email: string;
  isLogedIn: Boolean;
}

export interface productDetails {
  productId: number;
  productTitle: string;
  productImage: string;
  productCategory: string;
  productPrice: number;
  productSalePrice?: string;
  isOnSale?: boolean;
  isBestSeller?: boolean;
  isHot: boolean;
}

export interface productList {
  result: any[];
}
