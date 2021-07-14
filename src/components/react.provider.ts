import { Component, Context } from 'react';

/**
 * Declares a react provider. The provider declares the provided
 * context and its dependencies.
 *
 * Refer to https://reactjs.org/docs/context.html
 */
 export interface ReactProvider<T> {
    /**
     * React component that implements the provider. The component
     * consumes the dependencies and the optional dependencies
     * and provides the specified context.
     */
    module: any; // reactModule
    /**
     * Provided context
     */
    provides: Context<T | null>;
    /**
     * Required contexts, will be consumed when the module gets instantiated
     */
    dependencies?: Array<Context<any>>;
    /**
     * optional contexts
     */
    optionalDependencies?: Array<Context<any>>;
}