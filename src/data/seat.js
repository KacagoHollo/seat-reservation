const seat = {
    auditorium: [
        {row: "A", seat: 1, category: "Tier1", isAvaiable: true}, 
        {row: "A", seat: 2, category: "Tier1", isAvaiable: true}, 
        {row: "A", seat: 3, category: "Tier1", isAvaiable: true}, 
        {row: "A", seat: 4, category: "Tier1", isAvaiable: true}, 
        {row: "A", seat: 5, category: "Tier1", isAvaiable: true}, 
        {row: "A", seat: 6, category: "Tier1", isAvaiable: true},

        {row: "B", seat: 1, category: "Tier2", isAvaiable: true}, 
        {row: "B", seat: 2, category: "Tier1", isAvaiable: true}, 
        {row: "B", seat: 3, category: "Tier1", isAvaiable: true}, 
        {row: "B", seat: 4, category: "Tier1", isAvaiable: true}, 
        {row: "B", seat: 5, category: "Tier1", isAvaiable: true}, 
        {row: "B", seat: 6, category: "Tier1", isAvaiable: true}, 
        {row: "B", seat: 7, category: "Tier2", isAvaiable: true},

        {row: "C", seat: 1, category: "Tier2", isAvaiable: true}, 
        {row: "C", seat: 2, category: "Tier2", isAvaiable: true}, 
        {row: "C", seat: 3, category: "Tier1", isAvaiable: true}, 
        {row: "C", seat: 4, category: "Tier1", isAvaiable: true}, 
        {row: "C", seat: 5, category: "Tier2", isAvaiable: true}, 
        {row: "C", seat: 6, category: "Tier2", isAvaiable: true},

        {row: "D", seat: 1, category: "Tier3", isAvaiable: true}, 
        {row: "D", seat: 2, category: "Tier2", isAvaiable: true}, 
        {row: "D", seat: 3, category: "Tier2", isAvaiable: true}, 
        {row: "D", seat: 4, category: "Tier2", isAvaiable: true}, 
        {row: "D", seat: 5, category: "Tier3", isAvaiable: true}, 

        {row: "E", seat: 1, category: "Tier3", isAvaiable: true}, 
        {row: "E", seat: 2, category: "Tier3", isAvaiable: true}, 
        {row: "E", seat: 3, category: "Tier3", isAvaiable: true}, 
        {row: "E", seat: 4, category: "Tier3", isAvaiable: true}, 
    ],
    balcony: [
        {row: "A", seat: 1, category: "Tier2", isAvaiable: true},
        {row: "A", seat: 2, category: "Tier2", isAvaiable: true},
        {row: "A", seat: 3, category: "Tier1", isAvaiable: true},
        {row: "A", seat: 4, category: "Tier1", isAvaiable: true},
        {row: "A", seat: 5, category: "Tier1", isAvaiable: true},
        {row: "A", seat: 6, category: "Tier2", isAvaiable: true},
        {row: "A", seat: 7, category: "Tier2", isAvaiable: true},

        {row: "B", seat: 1, category: "Tier3", isAvaiable: true},
        {row: "B", seat: 2, category: "Tier2", isAvaiable: true},
        {row: "B", seat: 3, category: "Tier2", isAvaiable: true},
        {row: "B", seat: 4, category: "Tier2", isAvaiable: true},
        {row: "B", seat: 5, category: "Tier2", isAvaiable: true},
        {row: "B", seat: 6, category: "Tier3", isAvaiable: true},
    ]
};

seat.auditorium.forEach((item) => console.log(item));
seat.balcony.forEach((item) => console.log(item));
export default seat;