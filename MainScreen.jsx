import { useState } from 'react';
import {
    FlatList,
    Modal,
    StyleSheet, Text, TextInput, TouchableHighlight, TouchableNativeFeedback,
    TouchableOpacity,
    View
} from 'react-native';
import AddCom from "./AddCom";

const MainScreen = () => {
    const[value,setValue]=useState(false)
    const[inp,setInp]=useState("")
    const [dt,setdt]=useState(0)
     function handleInput(text){
     setInp(text)
  }
    const [list,setList]= useState([
        
    ]);

    function deleteHandle(ind){
    setList(list.filter((it)=>it.id!=ind))
    }

    function handleEdit(id,data){
        setValue(true)
      setdt(id)
    }

    function Edit() {
        list[dt]={id:dt,items:inp}
        setValue(false)
    }
  
 return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color:"black",fontSize:20,fontWeight:700,position:"relative"}}>ADD WHAT YOU WANT</Text>
        <Text>long press to delete</Text>
      </View>


      <View style={{height:50}}> <AddCom setList={setList} list={list}/></View>

  {list &&  <View style={{marginTop:30,width:"100%"}}>
        <FlatList  data={list} renderItem={({item,index})=>{
            return(
                <TouchableHighlight style={styles.cell_cont}  key={index}
                 onLongPress={()=>{deleteHandle(item.id)}}>
                    <View style={styles.cell}>
                        <View style={{flex:1}}>
                            <Text style={{color:"black",fontSize:20,fontWeight:500}}>NO: {item.id}</Text>
                        </View>
                      <View style={{flex:2}}>
                         <Text style={{color:"black",fontSize:20,fontWeight:500}}>{item.items}</Text>
                       </View>
                       <TouchableNativeFeedback onPress={()=>handleEdit(item.id,item.items)}>
                             <Text style={{fontWeight:900}}>edit</Text>
                       </TouchableNativeFeedback>
                          

                    </View>
                
                </TouchableHighlight>
            )
        }}/>
    </View> }
    {list.length<=0 && 
    <View style={{width:"100%",height:200,flex:1,justifyContent:"center",alignItems:"center"}}>
           <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>ITEM NOT FOUND</Text>
    </View>
    }

            <Modal visible={value} animationType='slide'>
                <View style={{flex:1,backgroundColor:"rgba(41, 13, 81, 0.95)",position:"relative"}}>
        <Text style={{position:"absolute",top:110,left:95,color:"white",fontSize:24,fontWeight:900}}>Edit your TODO</Text>
            <TextInput placeholder='Add Item' style={{width:"90%",backgroundColor:"white",color:"black"
                ,marginTop:"50%", marginBottom:20, borderRadius:10,marginLeft:10,padding:20,
            }} onChangeText={handleInput} >
            </TextInput>  
    
            <TouchableOpacity style={{backgroundColor:"violet",width:"90%",padding:10,borderRadius:30
                ,alignItems:"center",marginLeft:10,marginTop:10
            }} onPress={()=>Edit()}>
                 <Text style={{fontSize:20,fontWeight:900}}>Edit</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={{backgroundColor:"violet",width:"90%",padding:10,borderRadius:30
                ,alignItems:"center",marginLeft:10,marginTop:20
            }} onPress={()=>setValue(false)}>
                 <Text style={{fontSize:20,fontWeight:900}}>cancel</Text>
            </TouchableOpacity>  
            </View> 
            </Modal>
    </View>
  )
 
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    },
    header:{
        justifyContent:"center",
        alignItems:"center",
        height:"25%",
        backgroundColor:"violet",
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
    },text_font:{
        fontSize:20,
        color:"white"
    },
    cell_cont:{
       width:"100%",
        flex:1,
    alignItems:"center"
    },cell:{
        flex:1,
        width:"90%",
        backgroundColor:"rgba(224, 216, 216, 0.94)",
        flexDirection:"row",
        padding:20,
        margin:5,
        borderRadius:20
    },

    
})
export default MainScreen