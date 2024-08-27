"use client"

import { createScopedStore } from 'stan-js'

export const { StoreProvider, useScopedStore, useStore, useStoreEffect,  } = createScopedStore({
    session: {}
})