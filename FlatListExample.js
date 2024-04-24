
import React, {useState, useEffect} from 'react';
import{Text, View, StyleSheet, FlatList,Image, ActivityIndicator} from 'react-native';

export default FlatListExample =()=>
{
const [listData, setlistData]= useState([]);
const[isLoadingMoreData, setisLoadingMoreData]= useState(false);
const[noMoreData, setnoMoreData]=useState(false);
const[paging, setPaging]= useState(1);

useEffect(()=>{
    getDatafromserver(1);
},[])
const getDatafromserver=()=>{
    setisLoadingMoreData(true)
    fetch(`https://reqres.in/api/users?page=${paging}`,
    {
method:'GET',
headers:{
    Accept:'application/json',
    'Content-Type':'application/json'
},
 }).then(res=>res.json())
 .then(res=>{
    setisLoadingMoreData(false)
    console.log(JSON.stringify(res))
    if(res.data.length>0)
       {
        if(paging==1)
        {
setlistData(res.data)
    }
    else{
        setlistData([...listData,...res.data])
}
setPaging(paging+1)
}
else{
    setnoMoreData(true)
}
})

}
const _renderItem=({item})=>
{
    return(
        <View style={styles.listItem}>
            <View style={styles.listImageView}>
                <Image source={{uri: item.avatar}}
                resizeMode='contain' style={styles.listImage}/>
            </View>
            <View>
                <Text style={styles.listTextComponent}>{item.first_name} {item.last_name}</Text>
                <Text style={styles.listTextComponent}>{item.email}</Text>
            </View>
        </View>
    )
}
const _ItemSeparatorComponent=()=>{
    return(
        <View style={styles.listDivider}/>
        )}
const _onEndReached=()=>{
    if(!isLoadingMoreData && !noMoreData)
    {
getDatafromserver(2);
    }
}
const _ListFooterComponent =()=>{
    return(
        <View>
            {
                isLoadingMoreData &&
            <ActivityIndicator size={'small'} color={'#000'}/>
}
        </View>
    )}
    const _ListHeaderComponent=()=>
    {
        return(
        <View style={{alignItems:'center'}}>
            <Text style={styles.headertextView}>LIST OF CANDIDATES</Text>
        </View>)
    }

return(
    <View style={styles.maincontainer}>
        <FlatList 
        data={listData}
        keyExtractor={(item)=>{item.id}}
        renderItem={_renderItem}
        ItemSeparatorComponent={_ItemSeparatorComponent}
        onEndReached={_onEndReached}
        ListFooterComponent={_ListFooterComponent}
        ListHeaderComponent={_ListHeaderComponent}
        />
    </View>
)
}
const styles= StyleSheet.create({
    maincontainer:{
       flex:1,
       backgroundColor:'#fff'
    },
    listItem:{
flexDirection:'row',
alignItems:'center',
paddingVertical:10,
paddingHorizontal:20,
    },
    listTextComponent:{
        color:'#000',
        },
    listImageView:{
        height:40,
        width:40,
        borderRadius:20,
        overflow: 'hidden',
        marginRight:10,
    },
    listImage:{
        height:40,
        width:40
    },
    listDivider:{
height:1,
width:'100%',
backgroundColor:'#000'
    },
    headertextView:{
        fontSize: 15,
        color:'red'
    }
})

