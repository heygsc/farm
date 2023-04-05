import React, { useEffect, useState } from 'react';

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <p>It is {now.toLocaleTimeString()}.</p>
    </div>
  );
}