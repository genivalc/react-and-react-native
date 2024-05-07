import { FlatList, StyleSheet, View } from 'react-native';
import execercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../components/ExerciseListItem';

export default function App() {
  console.log(execercises)
  return (
    <View style={styles.container}>
      <FlatList
        data={execercises}
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
