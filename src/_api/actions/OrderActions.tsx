"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { baseURL } from "../baseURL";


export async function orderListAction() {
    const res = await fetch(`${baseURL}order`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function orderAllAction() {
    const res = await fetch(`${baseURL}order-all`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function orderViewAction(id: number | string) {
    const res = await fetch(`${baseURL}order/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function orderSearchAction(search: string) {
    const res = await fetch(`${baseURL}order-search?search=${search}`, {
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
export async function _orderListByUserAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/order-by-user`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _orderListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/order`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _orderSearchByUserAction(search: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/order-by-user-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _orderSearchAction(search: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/order-search?search=${search}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _orderViewAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/order/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _orderDeleteAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/order/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _orderStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/order`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath('/admin/order')
    return await res.json();
}

export async function _orderUpdateAction(id: string | number, data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/order/${id}`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath('/admin/order')
    return await res.json();
}

export async function _orderStatusUpdateAction(id: string | number, data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/order-status/${id}`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    revalidatePath('/admin/order')
    return await res.json();
}



