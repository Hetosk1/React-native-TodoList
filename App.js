import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Task  from './components/task';

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    console.log("hello world");
    console.log(task);
    setTaskItems([...taskItems, task]);
    setTask(null);
    console.log(taskItems);
  };

  const completedTask = (index) => {
    console.log("progress : "+ index);
    const itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

    <ScrollView>

      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task </Text>
        <View style={styles.items}>
          {/* this is where the task goes */}
          {
            taskItems.map((item, index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=>completedTask(index)}>
                  <Task key={index} text={item}/>
                </TouchableOpacity>
              );
            })
          }
        </View>
      </View>
    </ScrollView>

      {/* Write a Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24
  },
  items: {  },
  writeTaskWrapper:{ 
    position : 'absolute',
    bottom : 60,
    width : '100%',
    flexDirection: 'row',
    justifyContent : "space-between",
    alignItems: "center"
  },
  input:{  
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor : '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
     
  },
  addWrapper : {   
    width : 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius : 60,
    justifyContent : 'center',
    alignItems : "center",
    borderColor: '#C0C0C0',
    borderWidth : 1 
  },
  addText : {}
});
