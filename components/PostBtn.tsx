import { Modal, Pressable, Text,View } from "react-native";
import PostForm from "./PostForm";
import "../global.css";
import { useState } from "react";

type Props={
  label: string,
};
export default function ({label}:Props) {
const [modalVisible, setModalVisible] = useState(false)
  return (<>
  
    <Pressable onPress={ () => setModalVisible(true)}>
     <View className="w-20 h-10 border-2 border-gray-600 rounded-3xl justify-center">
    <Text className="text-center">{label}</Text>
  </View>
    </Pressable>
 
 <Modal 
 animationType="slide"
 transparent={true}
 visible={modalVisible}
 onRequestClose={()=> setModalVisible(false)}
 >
 <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-4/5 bg-white p-4 rounded-lg">
            <PostForm />
            <Pressable
              onPress={() => setModalVisible(false)}
              className="mt-4 p-2 bg-gray-300 rounded-lg"
            >
              <Text className="text-center">Close</Text>
            </Pressable>
          </View>
        </View>
 </Modal>
   
 


  
 </>)
}