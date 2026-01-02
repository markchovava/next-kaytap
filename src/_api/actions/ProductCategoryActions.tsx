"use server"

import { cookies } from "next/headers";
import { baseURL } from "../baseURL";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export async function productCategoryByProductAllAction(id: string | number) {
    const res = await fetch(`${baseURL}product-category-by-product-all?productId=${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function productCategoryByCategoryAllAction(id: string | number) {
    const res = await fetch(`${baseURL}product-category-by-category-all?categoryId=${id}`, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return await res.json();
}

export async function productCategoryByCategoryListAction(id: string | number) {
    const res = await fetch(`${baseURL}product-category-by-category?categoryId=${id}`, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return await res.json();
}

export async function productCategoryByProductListAction(id: string | number) {
    const res = await fetch(`${baseURL}product-category-by-product?productId=${id}`, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return await res.json();
}

export async function productCategoryListAction() {
    const res = await fetch(`${baseURL}product-category`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function productCategoryPaginateAction(url: string) {
    const res = await fetch(url, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return await res.json();
}

export async function productCategoryAllAction() {
    const res = await fetch(`${baseURL}product-category-all`, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return await res.json();
}

export async function productCategoryViewAction(id: number | string) {
    const res = await fetch(`${baseURL}product-category/${id}`, {
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
export async function _productCategoryByProductAllAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category-by-product-all?productId=${id}`, {
      'method': 'GET',
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function _productCategoryByCategoryAllAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
        redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category-by-category-all?categoryId=${id}`, {
        'method': 'GET',
        headers: {
            'Authorization': `Bearer ${authToken?.value}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return await res.json();
}

export async function _productCategoryByCategoryListAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
        redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category-by-category?categoryId=${id}`, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken?.value}`,
        }
    });
    return await res.json();
}

export async function _productCategoryByProductStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
        redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category-by-product`, {
        'method': 'POST',
        'body': JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken?.value}`,
        }
    });
    return await res.json();
}

export async function _productCategoryByProductListAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
        redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category-by-product?productId=${id}`, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken?.value}`,
        }
    });
    return await res.json();
}

export async function _productCategoryListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _productCategoryPaginateAction(url: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(url, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _productCategoryAllAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
        redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category-all`, {
        'method': 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken?.value}`,
        }
    });
    return await res.json();
}

export async function _productCategoryViewAction(id: number | string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
        redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`,
      }
    });
    return await res.json();
}

export async function _productCategoryStoreAction(data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
      redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/admin/product')
    return await res.json();
}

export async function _productCategoryUpdateAction(id: string | number, data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
        redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category/${id}`, {
        'method': 'POST',
        'body': data,
        headers: {
            'Authorization': `Bearer ${authToken?.value}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    revalidatePath(`/admin/product/${id}`)
    return await res.json();
}

export async function _productCategoryDeleteAction(id: number | string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('KAYTAP_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ 
        redirect('/login'); 
    }
    const res = await fetch(`${baseURL}api/product-category/${id}`, {
        'method': 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken?.value}`,
        }
    });
    revalidatePath(`/admin/product`)
    return await res.json();
}

