import { useEffect, useState, useContext } from "react";
import { ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import { SingleRestContext } from "../../App";
import QuoteCard from "../components/QuoteCard";

export default function Home({ navigation }){
    const [allQuotes,setAllQuotes] = useState();
    const {setCurrentRest} = useContext(SingleRestContext)

    useEffect(() => {
        fetch('https://quotes-project-as.web.app/quotes')
            .then(res  => res.json())
            .then(setAllQuotes)
            .catch(console.error)
    }, [])

    const handlePress = (singleQuote) => {
        setCurrentRest(singleQuote);
        navigation.navigate('Home');
    }

    return (
        <ScrollView>
            {!allQuotes
                ?<ActivityIndicator size ='large' color='gold'/>
                : allQuotes.map(singleQuote => (
                    <TouchableOpacity key={singleQuote.id} onPress={() => handlePress(singleQuote)}>
                    <QuoteCard singleQuote={singleQuote} />
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}