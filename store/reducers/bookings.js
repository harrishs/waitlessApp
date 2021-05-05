import { Bookings, Waitlists} from "../../data/testData";

const initialState = {
    availableWaitlists: Waitlists,
    userBookings: Bookings
};

export default (state = initialState, action) => {
    return state;
}