import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// definir los tipos para la tienda

export interface State {
    products: any[],
    cart: object | any
}

// definir las claves de inyeccion
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        products: [],
        cart: {}
    },

    mutations: {
        setProduct(state, payload) {
            state.products = payload
        },

        setCart(state, payload) {
            // {...payload}
            state.cart[payload.id] = payload            
        },

        clearCart(state) {
            state.cart = {}
        },
        
        increment(state, id) {
            state.cart[id].cantidad = state.cart[id].cantidad + 1
        },

        decrease(state, id) {
            state.cart[id].cantidad = state.cart[id].cantidad - 1
            if (state.cart[id].cantidad === 0) {
                delete state.cart[id]
            }
        }
    },
    
    actions: {
        async fetchData({commit}) {
            try {
                const res = await fetch('api.json')
                const data = await res.json()
                commit('setProduct', data)
            } catch (error) {
                console.log(error)
            }
        },
        addCart({state, commit}, id) {
            let product = state.products.filter(item => item.id === id)
            state.cart.hasOwnProperty(id) ? product[0].cantidad = state.cart[product[0].id].cantidad += 1 : product[0].cantidad = 1

            commit('setCart', product[0])
        }
    },
    
    getters: {
        totalCantidad(state) {
            return Object.values(state.cart).reduce((acc, {cantidad}: any) => acc+cantidad, 0)

            // TODO: 0 para que devuelva en un número            
        },
        
        totalPrecio(state) {
            return Object.values(state.cart).reduce((acc: any, {cantidad, precio}: any) => acc+cantidad*precio, 0)
        }
    },
    
    modules: {

    }
})