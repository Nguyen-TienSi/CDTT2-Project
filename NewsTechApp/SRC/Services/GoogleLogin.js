import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';
import { Button } from 'react-native';

GoogleSignin.configure({
  webClientId: '268908789969-6ql9dsuokj2joa52tmts5dv20sqma4ji.apps.googleusercontent.com',
});

export async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
}

export default function Login() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // Clean up the listener when the component is unmounted
    return () => subscriber(); // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <GoogleSigninButton
        style={{ alignItems: 'center', justifyContent: 'center' }}
        onPress={onGoogleButtonPress}
      />
    )
  }

  return (
    <Button title='Sign Out' onPress={signOut} />
  );
}