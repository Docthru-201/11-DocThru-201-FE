import { Composition } from 'remotion';
import { DocthruIntro } from './DocthruIntro';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="DocthruIntro"
        component={DocthruIntro}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
