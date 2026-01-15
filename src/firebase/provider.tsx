'use client';

import {createContext, useContext, type ReactNode} from 'react';
import type {FirebaseApp} from 'firebase/app';
import type {Auth} from 'firebase/auth';
import type {Firestore} from 'firebase/firestore';

// Define the shape of the context value
interface FirebaseContextValue {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

// Create the context with an initial value of null
const FirebaseContext = createContext<FirebaseContextValue | null>(null);

// Define the props for the provider component
interface FirebaseProviderProps {
  children: ReactNode;
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

/**
 * Provides the Firebase app, auth, and firestore instances to its children.
 */
export function FirebaseProvider({
  children,
  app,
  auth,
  firestore,
}: FirebaseProviderProps) {
  return (
    <FirebaseContext.Provider value={{app, auth, firestore}}>
      {children}
    </FirebaseContext.Provider>
  );
}

/**
 * Hook to use the Firebase context.
 * @returns The Firebase context value.
 * @throws If used outside of a FirebaseProvider.
 */
export const useFirebase = (): FirebaseContextValue => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

/**
 * Hook to get the Firebase app instance.
 */
export const useFirebaseApp = (): FirebaseApp => useFirebase().app;

/**
 * Hook to get the Firebase Auth instance.
 */
export const useAuth = (): Auth => useFirebase().auth;

/**
 * Hook to get the Firestore instance.
 */
export const useFirestore = (): Firestore => useFirebase().firestore;
