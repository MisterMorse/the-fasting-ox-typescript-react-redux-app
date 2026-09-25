import { render, renderHook } from "@testing-library/react"
import type { RenderOptions } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { configureStore } from "@reduxjs/toolkit"
import type { PropsWithChildren, ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"

import type { AppStore, RootState } from "../app/store"
import { makeStore } from "../app/store"
import { eventsApiSlice } from "../features/events/eventsApiSlice.ts"

/**
 * This type extends the default options for
 * React Testing Library's render function. It allows for
 * additional configuration such as specifying an initial Redux state and
 * a custom store instance.
 */
type ExtendedRenderOptions = Omit<RenderOptions, "queries"> & {
  /**
   * Defines a specific portion or the entire initial state for the Redux store.
   * This is particularly useful for initializing the state in a
   * controlled manner during testing, allowing components to be rendered
   * with predetermined state conditions.
   */
  preloadedState?: Partial<RootState>

  /**
   * Allows the use of a specific Redux store instance instead of a
   * default or global store. This flexibility is beneficial when
   * testing components with unique store requirements or when isolating
   * tests from a global store state. The custom store should be configured
   * to match the structure and middleware of the store used by the application.
   *
   * @default makeStore(preloadedState)
   */
  store?: AppStore
}

/**
 * Renders the given React element with Redux Provider and custom store.
 * This function is useful for testing components that are connected to the Redux store.
 *
 * @param ui - The React component or element to render.
 * @param extendedRenderOptions - Optional configuration options for rendering. This includes `preloadedState` for initial Redux state and `store` for a specific Redux store instance. Any additional properties are passed to React Testing Library's render function.
 * @returns An object containing the Redux store used in the render, User event API for simulating user interactions in tests, and all of React Testing Library's query functions for testing the component.
 */
export const renderWithProviders = (
  ui: ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) => {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = makeStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  )

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}

// I am generating these methods with a static list of reducers as I build the rest of
// the infrastructure for hook testing; I have some approaches to isolate each
// reducer by sending an option object with the reducer under testing so that it doesn't
// interfere with other reducers or generate overhead as the application expands,
// but there are a lot of moving pieces and I will implement a purely dynamic solution
// after the basic machinery is in place.
export const setupTestStore = () => {
  return configureStore({
    reducer: {
      [eventsApiSlice.reducerPath]: eventsApiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(eventsApiSlice.middleware),
  })
}

// Extract types from the store setup
export type TestStore = ReturnType<typeof setupTestStore>
export type TestRootState = ReturnType<TestStore["getState"]>

// A custom hook-renderer that injects the store
export function renderHookWithProvider<Result, Props>(
  renderCallback: (props: Props) => Result,
) {
  const store = setupTestStore()

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={ store }>{ children }</Provider>
  )

  return {
    store,
    ...renderHook(renderCallback, { wrapper: Wrapper }),
  }
}