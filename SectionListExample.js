import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

export default SectionListExample=() =>{
 const Data=[
    {
title:'',
data:[],
    },
    {
      title:'Jammu',
      data:['GandhiNagar', 'Domana','janipur'],
    },
    {
      title:'Delhi',
      data:['MalvaNagar', 'AnandNagar','Gandhinagar'],
    },
    {
      title:'Gujrat',
      data:['Ahmedbad', 'Surat', 'GandhiNagarh' ],    
    },
    {
      title:'Rajistan',
      data:['Udaipur', 'jaipur' , 'Alwar'],    
    },
    {
      title:'Jammu',
      data:['GandhiNagar', 'Domana','janipur'],
    },
    {
      title:'Delhi',
      data:['MalvaNagar', 'AnandNagar','Gandhinagar'],
    },
    {
      title:'Gujrat',
      data:['Ahmedbad', 'Surat', 'GandhiNagarh' ],    
    },
    {
      title:'Rajistan',
      data:['Udaipur', 'jaipur' , 'Alwar'],    
    }
 ]
 const _renderItem=({item})=>
 {
   return(
      <Text style={styles.listItemtext}>{item}</Text>
   )
 }
 return(
   <View>
      <SectionList
      sections={Data}
renderItem={_renderItem}
renderSectionHeader={({section:{title}})=>{
   return(
<Text style={styles.headerText}>{title}</Text>
   )
}}
contentContainerStyle={styles.listContainerStyle}
      />
     
   </View>
 );
}
const styles= StyleSheet.create({
  headerText:{
    fontWeight:'bold',
    color:'red',
    paddingVertical:10
  },
  listItemtext:{
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor:'yellow',
    color:'#000'
  },
  listContainerStyle:{
    paddingHorizontal:20
  }
}
)