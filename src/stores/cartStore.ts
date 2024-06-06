import { writable } from 'svelte/store';

interface CartItem {
    id: number;
    quantity: number;
}

export const cart = writable<CartItem[]>([]);

export function addToCart(id: number, quantity: number) {
    cart.update(items => {
        const existingItem = items.find(item => item.id === id);
        if (existingItem) {
            return items.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item
            );
        } else {
            return [...items, { id, quantity }];
        }
    });
}
