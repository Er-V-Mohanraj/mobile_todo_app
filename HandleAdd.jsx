import { Modal, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const HandleAdd = ({value,setval}) => {
    
  return (
        <Modal visible={value}>
    <TextInput placeholder='Add Item' style={{width:"90%",backgroundColor:"black",color:"white"
        ,marginTop:"50%", marginBottom:20, borderRadius:10,marginLeft:10
    }}>
    </TextInput>  
    <TouchableOpacity style={{backgroundColor:"violet",width:"90%",padding:10,borderRadius:30
        ,alignItems:"center",marginLeft:10
    }}>
         <Text style={{fontSize:20,fontWeight:900}}>Save</Text>
    </TouchableOpacity>  
    <TouchableOpacity style={{backgroundColor:"violet",width:"90%",padding:10,borderRadius:30
        ,alignItems:"center",marginLeft:10
    }} onPress={()=>setvalue(!value)}>
         <Text style={{fontSize:20,fontWeight:900}}>cancel</Text>
    </TouchableOpacity>   
    </Modal>
    
  )
}
const style= StyleSheet.create({
   cont:{
    flex:1,
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
    alignItems:"center"
   }
})
export default HandleAdd