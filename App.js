import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/chickenInKitchen.jpeg")} 
                        style={{height: "100%", 
                        justifyContent: "space-between"}}>
        {/* Navigation Bar */}
        <View>
          <View style={{flexDirection:"row",
                        justifyContent:"space-between",
                        marginTop: 60,
                        }}>
            <Text style={{marginHorizontal: 9, 
                          fontSize:30, 
                          fontWeight:"bold", 
                          color:"white"}}>Shorts</Text>
            <View style={{flexDirection: "row", gap: 20, marginRight: 20}}>
              <SimpleLineIcons name="magnifier" size={24} color="white" style={{fontWeight: 300}} />
              <FontAwesome5 name="ellipsis-v" size={24} color="white" />
            </View>
          </View>
          {/** buttons under navigation bar */}
          <View style={{flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 20}}>
            <View style={styles.navButtons}>
              <Entypo name="bell" size={24} color="black" />
              <Text>Subscriptions</Text>
            </View>
            <View style={styles.navButtons}>
              <MaterialIcons name="live-tv" size={24} color="black" />
              <Text>Live</Text>
            </View>
            <View style={styles.navButtons}>
              <FontAwesome name="shopping-cart" size={24} color="black" />  
              <Text>Shopping</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <View style={{justifyContent: "flex-end", flexDirection: "column"}}>
            <View style={{flexDirection: "row", 
                          marginLeft: 20,
                          marginBottom: 10, 
                          alignItems: "center", 
                          gap: 8}}>
              <Image source={require("./assets/me.jpg")} style={{height: 50, width: 50, borderRadius: "50%"}}/>
              <Text style={{color: "white", fontWeight: "bold"}}>@zinum</Text>
              <View>
                <Text style={{padding: 6,
                             borderRadius: 15, 
                             backgroundColor: "white", 
                             fontWeight: "bold"}}>Subscribe</Text>
              </View>
            </View>
            <Text style={{marginBottom: 30, 
                          marginLeft: 20, 
                          fontWeight: "bold",
                          color: "white"}}>Chicken In the Kitchen 10/10</Text>
          </View>
          <View style={{flexDirection: "column", 
                        alignItems:"flex-end", 
                        justifyContent: "flex-end",
                        marginHorizontal: 20, 
                        gap: 40,
                        marginVertical: 30
                        }}>
              {/*likes */}
              <View>
                <View style={styles.interactiveIcons} >
                  <AntDesign name="like1" size={24} color="white" />  
                </View>
                  <Text style={styles.interactiveIconText}>413K</Text>
              </View>
              {/**Dislikes */}  
              <View>
                <View style={styles.interactiveIcons}>
                  <AntDesign name="dislike1" size={24} color="white" />
                </View>
                <Text style={styles.interactiveIconText}>Dislike</Text>
              </View>
              {/**comments */}
              <View>
                <View style={styles.interactiveIcons}>
                  <FontAwesome name="comment" size={24} color="white" /> 
                </View>
                <Text style={styles.interactiveIconText}>1009</Text>
              </View>
              {/**options */}
              <View>
                <View style={styles.interactiveIcons}>
                  <AntDesign name="ellipsis1" size={24} color="white" />  
                </View>
                <Text style={styles.interactiveIconText}>Share</Text>
              </View>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#fff',
    // height: "100%", 
    justifyContent: "space-between",
  },

  interactiveIcons: {
    borderWidth: 1,
    borderRadius: "50%",
    padding: 10,
    alignItems: "center",
    backgroundColor: 'black',
    opacity: "0.6"

  },
  interactiveIconText: {
    TextAlign: "center",
    margin: 4,
    color: "white",
    fontWeight: "bold",
    opacity: "0.8"
  },
  navButtons: {
    flexDirection: "row", 
    padding: 7,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    opacity: "0.8"
  }
});
