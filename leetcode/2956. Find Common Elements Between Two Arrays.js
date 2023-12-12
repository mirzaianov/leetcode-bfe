const findIntersectionValues = (nums1, nums2) => {
    const toMap = (array) => {
        const map = new Map();

        for (const item of array) {
            map.set(item, map.get(item) + 1 || 1);
        }

        return map;
    };

    const map1 = toMap(nums1);
    const map2 = toMap(nums2);

    const toCount = (mapFirst, mapSecond) => {
        let count = 0;

        for (const [key, value] of mapFirst) {
            if (mapSecond.has(key)) count += value;
        }

        return count;
    };

    const counted1 = toCount(map1, map2);
    const counted2 = toCount(map2, map1);

    return [counted1, counted2];
};
