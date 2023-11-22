https://efficient-sloth-d85.notion.site/Desafio-01-Praticando-os-conceitos-do-React-Native-f8f164e29df74cd987e1f9aebf142ffb

https://www.figma.com/file/Q6f7efnHzPFjHyCEAOXQh8/ToDo-List-%E2%80%A2-Desafio-React-Native-(Copy)?type=design&node-id=0-1&mode=design&t=183zxLVuKUyIrdIT-0

<TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setParticipantName}
          value={participantName}
        />
<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
<Text style={styles.buttonText}>+</Text>
</TouchableOpacity>
</View>

// estado

/_ <FlatList
data={participants}
keyExtractor={(item) => item}
renderItem={({ item }) => (
<Participant
name={item}
onRemove={() => handleParticipantRemove(item)}
/>
)}
showsVerticalScrollIndicator={false}
ListEmptyComponent={() => (
<Text style={styles.listEmptyText}>
Ninguém chegou no evento ainda? Adicione participantes à sua lista
de presença.
</Text>
)}
/> _/
