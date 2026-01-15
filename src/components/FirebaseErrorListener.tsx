'use client';

import {useEffect} from 'react';
import {errorEmitter} from '@/firebase/error-emitter';
import {useToast} from '@/hooks/use-toast';
import {FirestorePermissionError} from '@/firebase/errors';

export function FirebaseErrorListener() {
  const {toast} = useToast();

  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      console.error('Firestore Permission Error:', error.message);
      toast({
        variant: 'destructive',
        title: 'Permission Denied',
        description:
          'You do not have permission to perform this action. Check Firestore rules.',
      });
    };

    const unsubscribe = errorEmitter.on(
      'permission-error',
      handlePermissionError
    );

    return () => {
      unsubscribe();
    };
  }, [toast]);

  return null;
}
