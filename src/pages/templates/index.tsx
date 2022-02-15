import { useEffect, useState } from 'react';
import { Button } from '../../components';
import objectTemplate from '../../data/templates.json';
import './style.scss';

type Template = {
  id: number;
  subject: string;
  message: string;
};

export const Templates = () => {
  const [template, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    setTemplates(objectTemplate?.templates);
  }, []);

  const setTemplate = (item: Template) => {
    window.parent.postMessage(
      {
        key: 'setTemplate',
        value: item,
      },
      '*'
    );
  };

  return (
    <div className="template__list">
      {template &&
        template.map((item) => {
          return (
            <div key={`template${item.id}`} className="template__list__item">
              <span>{item.subject}</span>
              <Button onClick={() => setTemplate(item)} transparent>
                Apply
              </Button>
            </div>
          );
        })}
    </div>
  );
};
