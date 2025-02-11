import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell me</Text>
      <Text style={styles.subtitle}>something</Text>

      <Button
        mode="contained"
        onPress={() => router.push('/second')}
        style={styles.button}
      >
        Go to Profile
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7e3e6',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f4c2c2',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#f2a1d1',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f4c2c2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
