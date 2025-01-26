import Video from 'next-video';
import getStarted from '/videos/acgpromo.webm';

export default function Page() {
  return <Video src={getStarted} />;
}

