import React from 'react';

import { Wrapper, Button, Card } from 'bushido-strap';

export default function Dashboard() {
  return (
    <Wrapper>
      <Card shade>
        <h1>Hello, world!</h1>
        <Button onClick={() => alert("Thanks for clicking me!")}>Click me!!!S</Button>
      </Card>
    </Wrapper>
  );
}
