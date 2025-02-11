import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';

export default function SecondScreen() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');

  const addEntry = () => {
    if (text.trim()) {
      setEntries([...entries, { id: Date.now(), text }]);
      setText('');
    }
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{item.text}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => deleteEntry(item.id)}>Delete</Button>
            </Card.Actions>
          </Card>
        )}
      />

      <TextInput
        label="Share..."
        value={text}
        onChangeText={setText}
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={addEntry} style={styles.addButton}>
        Add Entry
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f4c2c2',
    marginBottom: 20,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff5f8',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#f4c2c2',
    borderRadius: 20,
  },
});
