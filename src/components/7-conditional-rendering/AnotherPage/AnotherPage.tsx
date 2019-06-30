import React, { useState } from 'react';

interface WarningBannerProps {
  warn: boolean;
}

function WarningBanner(props: WarningBannerProps): JSX.Element | null {
  if (!props.warn) {
    return null;
  }

  return (
    <div>Warning</div>
  );
}

export default function Page(): JSX.Element {
  const [showWarning, setShowWarning] = useState(true);

  const handleToggleClick = (): void => {
    setShowWarning(!showWarning);
  };

  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
