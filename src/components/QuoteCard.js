import { View, Text } from "react-native";
import styles from "../styles/index";


export default function QuoteCard({singleQuote}){
    return(
        <View style={styles.quoteCard}>
            <Text style={styles.authorName}>
                {singleQuote.quote} - {singleQuote.author}
            </Text>
        </View>
    )
}