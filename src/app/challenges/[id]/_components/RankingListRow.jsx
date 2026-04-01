// RankingListRow.jsx
import { useLikes } from '@/features/likes/hooks/useLikes';
import { ListRow } from '@/shared/components';

export const RankingListRow = ({ item, challengeId, router }) => {
  const { likeCount, isLiked, toggleLike } = useLikes(item.workId);

  return (
    <ListRow
      badgeRank={item.rank}
      badgeLabel={item.rank.toString().padStart(2, '0')}
      showBadge
      name={item.author.authorNickname}
      role={item.author.grade === 'EXPERT' ? '전문가' : '일반'}
      likeCount={likeCount}
      isLiked={isLiked}
      profileType={item.author.grade === 'EXPERT' ? 'admin' : 'member'}
      onWorkClick={() =>
        router.push(`/challenges/${challengeId}/work/${item.workId}`)
      }
      onLikeClick={toggleLike}
    />
  );
};
