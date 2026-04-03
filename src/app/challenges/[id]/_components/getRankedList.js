export function getRankedList(items, getLikes = (item) => item.likeCount) {
  if (!items || items.length === 0) return [];
  // DB에서는 정렬하여 가져오기에 필요없지만 공용성을 위해 다시한번 정렬
  const sortedItems = [...items].sort((a, b) => getLikes(b) - getLikes(a));

  let lastRank = 1;

  return sortedItems.map((item, index) => {
    if (index > 0 && getLikes(item) !== getLikes(sortedItems[index - 1])) {
      lastRank = index + 1;
    }

    return {
      ...item,
      rank: lastRank,
    };
  });
}
