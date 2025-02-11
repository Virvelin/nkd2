import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import CustomAppBar from './components/AppBar';

export default function Layout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          header: (props) => <CustomAppBar {...props} />,
        }}
      />
    </PaperProvider>
  );
}
