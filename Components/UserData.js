
import { Text, View, StyleSheet} from 'react-native';
 const UserData=(props)=> {
    const item= props.item;
    return(
    <View style={styles.box}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.email}</Text>
    </View>
    )
    }
    const styles = StyleSheet.create({
    item:{
    fontSize:24,
    color:'orange',
    margin: 2,
    flex:1,
    textAlign:'center',
    backgroundColor:'green',
    },
    box:{
    flexDirection:'row',
    marginBottom: 10,
    borderColor:"red",
    borderWidth:2,

}
})
    export default UserData;