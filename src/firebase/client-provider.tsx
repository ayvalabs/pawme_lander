'use client';

import {useEffect, useState} from 'react';
import {FirebaseProvider} from './provider';
import {initializeApp, type FirebaseApp} from 'firebase/app';
import {getAuth, type Auth} from 'firebase/auth';
import {getFirestore, type Firestore} from 'firebase/firestore';
import {firebaseConfig} from './config';
import {FirebaseErrorListener} from '@/components/FirebaseErrorListener';

type FirebaseServices = {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

export function FirebaseClientProvider({children}: {children: React.ReactNode}) {
  const [firebase, setFirebase] = useState<FirebaseServices | null>(null);

  useEffect(() => {
    // Check if Firebase has already been initialized
    if (!firebase) {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const firestore = getFirestore(app);
      setFirebase({app, auth, firestore});
    }
  }, [firebase]);

  if (!firebase) {
    // You can return a loader here if needed
    return null;
  }

  return (
    <FirebaseProvider
      app={firebase.app}
      auth={firebase.auth}
      firestore={firebase.firestore}
    >
      <FirebaseErrorListener />
      {children}
    </FirebaseProvider>
  );
}
