import { Card } from './Card';

export default function OpenSource() {
  return (
    <>
      <h1>Open Source Contributions</h1>
      <Card
        title="chr-ge / react-column-select"
        description="React component to select options by transferring them from one column to another."
        tags={['react', 'select', 'form']}
        badge="Creator"
        shadowColor="rgba(59,130,246,0.5)"
      />
    </>
  );
}
