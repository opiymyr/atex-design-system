import { useState } from 'react';
import { TabItem } from '../TabItem/TabItem';
import { EditIcon } from '../icons/icons';
import '../Tabs/Tabs.css';

type Props = {
  tabs: { id: string; label: string }[];
  onChange?: (id: string) => void;
};

export function Tabs({ tabs, onChange }: Props) {
  const [active, setActive] = useState(tabs[0]?.id);

  const pick = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className="tabs" role="tablist">
      {tabs.map((t) => (
        <TabItem key={t.id} icon={<EditIcon />} selected={t.id === active} onClick={() => pick(t.id)}>
          {t.label}
        </TabItem>
      ))}
    </div>
  );
}