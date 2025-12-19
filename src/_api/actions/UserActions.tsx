"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { baseURL } from "../baseURL";



/*********************************
*  AUTHENICATED
*********************************/

export async function _userListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/user`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _userSearchAction(search: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/user-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _userViewAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/user/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _userDeleteAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/user/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath('/admin/user')
    return await res.json();
}

export async function _userStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/user`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath('/admin/user')
    return await res.json();
}

export async function _userUpdateAction(id: string | number, data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/user/${id}`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath(`/admin/user/${id}`)
    return await res.json();
}