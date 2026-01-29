import { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddCom = ({setList,list}) => {
  let [val,setval]= useState(false)
  let [inp,setInp]=useState("")
  function handleInput(text){
     setInp(text)
  }
  function handleSave(){
    if(val=="") return
    setList([...list,{id:list.length,items:inp}]);
    setval(false)
  }
  function handleClick(){
    setval(true)
  }
  return (
    <View>
       <TouchableOpacity style={style.symbol} onPress={()=>handleClick()}>
      <Text style={{color:"black",fontWeight:900,fontSize:30}} > + </Text>
      
    </TouchableOpacity>



        <Modal visible={val} animationType='slide' style={{ackgroundColor:"rgba(216, 31, 31, 0)"}}>
        <TextInput placeholder='Add Item' style={{width:"90%",backgroundColor:"black",color:"white"
            ,marginTop:"50%", marginBottom:20, borderRadius:10,marginLeft:10,padding:20,
        }} onChangeText={handleInput} value={val}>
        </TextInput>  

        <TouchableOpacity style={{backgroundColor:"violet",width:"90%",padding:10,borderRadius:30
            ,alignItems:"center",marginLeft:10,marginTop:10
        }} onPress={()=>handleSave()}>
             <Text style={{fontSize:20,fontWeight:900}}>Save</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={{backgroundColor:"violet",width:"90%",padding:10,borderRadius:30
            ,alignItems:"center",marginLeft:10,marginTop:20
        }} onPress={()=>setval(false)}>
             <Text style={{fontSize:20,fontWeight:900}}>cancel</Text>
        </TouchableOpacity>   
        </Modal>
    </View>
   
    
  )
}
 const style = StyleSheet.create({
    symbol:{
        marginTop:20,
        width:50,
        height:50,
        backgroundColor:"white",
        borderRadius:"50%",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        right:20
    }
 })
export default AddCom;