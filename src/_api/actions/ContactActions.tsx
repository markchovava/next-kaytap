"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { baseURL } from "../baseURL";


export async function contactListAction() {
    const res = await fetch(`${baseURL}contact`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function contactSearchAction(search: string) {
    const res = await fetch(`${baseURL}contact-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function contactViewAction(id: string | number) {
    const res = await fetch(`${baseURL}contact/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function contactStoreAction(data: any) {
    const res = await fetch(`${baseURL}contact`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
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
export async function _contactListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}contact`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _contactSearchAction(search: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}contact-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _contactViewAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}contact/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _contactDeleteAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}contact/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    return await res.json();
}

export async function _contactStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/contact`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath('/admin/contact')
    return await res.json();
}

export async function _contactStatusUpdateAction(id: string | number, data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/contact-status/${id}`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath(`/admin/contact/${id}`)
    return await res.json();
}