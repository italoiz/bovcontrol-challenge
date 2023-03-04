import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useFontResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          // OpenSans
          'OpenSans-400Regular': require('@/assets/fonts/OpenSans/400Regular.ttf'),
          'OpenSans-700Bold': require('@/assets/fonts/OpenSans/700Bold.ttf'),
          'OpenSans-600SemiBold': require('@/assets/fonts/OpenSans/600SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // TODO
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
