declare global {
  /**
   * Shared kernel
   */

  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux inferring types from @/app
   * and use it in @/shared/model/hooks.ts
   */

  declare type RootState = import('../src/app/appStore').RootState
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type AppDispatch = import('../src/app/appStore').AppDispatch
}

export {}
