"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { baseURL } from "../baseURL";


export async function productImageListAction() {
    const res = await fetch(`${baseURL}product-image`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function productImageViewAction(id: number | string) {
    const res = await fetch(`${baseURL}product-image/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function productImageListByProductAction(id: number | string) {
    const res = await fetch(`${baseURL}product-image-by-product?productId=${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

/*********************************
*  AUTHENICATED
*********************************/
export async function _productImageListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-image`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _productImageViewAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-image/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _productImageDeleteAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-image/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _productImageListByProductAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}product-image-by-product?productId=${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}