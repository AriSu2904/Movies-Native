import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Dimensions, Image, ScrollView, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "../themes/RootColor";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const {width, height} = Dimensions.get('window')

export default function MovieDetailScreen() {

    const navigation = useNavigation()
    const {params: item} = useRoute()
    
    useEffect(() => {

    }, [item])

    return (
    
        <ScrollView contentContainerStyle={{paddingBottom: 20}}
        className="flex-1 bg-neutral-900">

            <View className="w-full">
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 mt-7"}>
                <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={()=> navigation.goBack()}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="black" />
                </TouchableOpacity>
                </SafeAreaView>
            <View>
                <Image source={require('../assets/images/icon.png')}
                style={{width: width, height: height*0.6}}/>

                <LinearGradient
                    colors={['transparent', 'rgba(23,23,23,0.9)', 'rgba(23,23,23,1)']}
                    style={{width, height:height*0.57}}
                    start={{x: 0.3, y:0}}
                    end={{x: 0.3, y: 1}}
                    className="absolute bottom-0"
                />
            </View>
            </View>

            <View style={{marginTop: -(height*0.11)}} className="pt-4">
                <Text className="text-white text-center text-2xl font-bold tracking-wider">
                     Ant Man and The Wasp: Quantumania
                </Text>
                <Text className="text-white text-center tracking-wider">
                     Ant Man and The Wasp: Quantumania
                </Text>
            </View>

        </ScrollView>
    )
    

}