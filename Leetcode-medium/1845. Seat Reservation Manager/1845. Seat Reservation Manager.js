class SeatManager {
    constructor(n) {
        this.last = 0;
        this.pq = [];
    }

    reserve() {
        if (this.pq.length === 0) {
            console.log(this.last)
            return ++this.last;
        } else {
            this.pq.sort((a, b) => a - b);
            return this.pq.shift();
        }
    }

    unreserve(seatNumber) {
        if (seatNumber === this.last) {
            this.last--;
        } else {
            this.pq.push(seatNumber);
        }
    }
}


var obj = new SeatManager(5)
obj.reserve()
obj.reserve()
obj.reserve()
obj.reserve()
obj.reserve()
obj.unreserve(1)
obj.unreserve(6)
obj.unreserve(8)
obj.unreserve(9)
obj.reserve()

console.log(obj)