class Booking {
    constructor(id, ownerId, groupSize){
        this.id = id;
        this.ownerId = ownerId;
        this.groupSize = groupSize;
        this.bookTime = Date.now();
    }
}

export default Booking;