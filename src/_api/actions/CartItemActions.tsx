"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { baseURL } from "../baseURL";


export async function cartItemListAction() {
    const res = await fetch(`${baseURL}cart-item`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function cartItemViewAction(id: string | number) {
    const res = await fetch(`${baseURL}cart-item/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function cartItemSearchAction(search: string) {
    const res = await fetch(`${baseURL}cart-item-search?search=${search}`, {
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
export async function _cartItemListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/cart-item`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _cartItemViewAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/cart-item/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _cartItemSearchAction(search: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/cart-item-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _cartItemStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/cart-item`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath(`/admin/cart-item`)
    return await res.json();
}

export async function _cartItemUpdateAction(id: string | number, data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/cart-item/${id}`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath(`/admin/cart-item/${id}`)
    return await res.json();
}

export async function _cartItemDeleteAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/cart-item/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath(`/admin/cart-item`)
    return await res.json();
}