import React from "react";
import { FlatList , Text} from "react-native";
import { useSelector } from "react-redux";

const WaitlistOverviewScreen = (props) => {
    const waitlists = useSelector(state => state.bookings.availableWaitlists);
    return (
        <FlatList data={waitlists} renderItem={i => <Text>{i.item.name}</Text>}/>
    )
}

export default WaitlistOverviewScreen;