db.zips.aggregate([
    {$match: {state: "MA"}},
    {$group: {_id: "$state",
                statepop: {$sum: "$pop"}}}
    ]);


db.zips.aggregate([
    {$match: {pop: {$gte: 3000}}},
    {$group: {_id: "$state",
        statepop: {$sum: "$pop"}}},
    {$sort: {statepop: -1}},
    {$limit: 10}
]);