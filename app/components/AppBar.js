import { Appbar } from 'react-native-paper';
import { useNavigation, useRouter } from 'expo-router';

export default function CustomAppBar({ options }) {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <Appbar.Header>
      {navigation.canGoBack() ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <Appbar.Action icon="arrow-right" onPress={() => router.push('/second')} />
      )}
      <Appbar.Content title={options.title || 'My App'} />
    </Appbar.Header>
  );
}
