var clusterFilters = {
    'Tech': {
        'API': true,
        'IoT': true,
    },
    'app': {
        'Farming': true,
        'Platform': false,
    },
}

console.log(Object.values(clusterFilters[Object.keys(clusterFilters)[0]])[0]);

var filteredClusters = {
    'Tech': 0,
    'app': 0
}

// console.log(filteredClusters, filteredClusters[Object.keys(clusterFilters)[0]]++);
// console.log(Object.keys(filteredClusters)[0], Object.keys(clusterFilters)[0])

for(var i = 0; i < Object.keys(clusterFilters).length; i ++) {
    if(Object.keys(filteredClusters)[i] === Object.keys(clusterFilters)[i]) {
        for(var j =0; j < Object.keys(clusterFilters[Object.keys(clusterFilters)[i]]).length; j++) {

            if(!Object.values(clusterFilters[Object.keys(clusterFilters)[i]])[j]) {
                    filteredClusters[Object.keys(clusterFilters)[i]]++
                    console.log(Object.keys(clusterFilters[Object.keys(clusterFilters)[i]])[j]);
            } else {
                console.log(Object.keys(clusterFilters[Object.keys(clusterFilters)[i]])[j]);
            }
        }
    }
}

console.log(filteredClusters)





















// var count_in_level = []
// var obj = {
//     a: 0,
//     b: {
//         ba: 1,
//         c: {
//             ca: 1,
//             cb: 2
//         }
//     }
// }

// function count(obj, level) {
//     var c = 0
//     if (typeof level == 'undefined') level = 1
//     if (!count_in_level[level]) count_in_level[level] = 0
//     if (typeof obj == 'object') {
//         for (var i in obj) {
//             if (typeof obj[i] == 'object') count(obj[i], level + 1)
//             c++;
//         }
//         count_in_level[level] += c
//     }
// }
// count(clusterFilters, )
// console.log(count_in_level)  // [1: 2, 2: 2, 3: 1]