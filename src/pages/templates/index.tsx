import { useEffect, useState } from 'react';
import { Button, Form } from '../../components';
import objectTemplate from '../../data/templates.json';
import './style.scss';

type Template = {
  id: number;
  subject: string;
  message: string;
};

export const Templates = () => {
  const [template, setTemplates] = useState<Template[]>([]);
  const [form, createForm] = useState<any>(false);
  const [newTemplate, setNewTemplate] = useState<Template>();

  useEffect(() => {
    const templateData = localStorage.getItem('templateData');

    if (templateData) {
      setTemplates(JSON.parse(templateData));
    } else {
      localStorage.setItem(
        'templateData',
        JSON.stringify(objectTemplate?.templates)
      );
      setTemplates(objectTemplate?.templates);
    }
  }, []);

  useEffect(() => {
    if (newTemplate) {
      const templateData = localStorage.getItem('templateData');

      if (templateData) {
        let news = [...JSON.parse(templateData)];
        news.push(newTemplate);
        localStorage.removeItem('templateData');
        localStorage.setItem('templateData', JSON.stringify(news));
        setTemplates(news);
      }
    }
  }, [newTemplate]);

  const setTemplateNew = (subject: string, message: string) => {
    let templateData = localStorage.getItem('templateData');

    if (templateData) {
      templateData = JSON.parse(templateData);

      if (templateData?.length) {
        const id = templateData?.length + 1;

        setNewTemplate({ id: id, subject: subject, message: message });
      }
    }
  };

  window.addEventListener(
    'message',
    function (event) {
      if (event.data.key === 'createTemplate') {
        createForm(true);
      }
    },
    false
  );

  const setTemplate = (item: Template) => {
    window.parent.postMessage(
      {
        key: 'setTemplate',
        value: item,
      },
      '*'
    );
  };

  return form ? (
    <Form handleSubmit={setTemplateNew} onClose={() => createForm(false)} />
  ) : (
    <div className="template__list">
      {template &&
        template.map((item) => {
          return (
            <div key={`template${item.id}`} className="template__list__item">
              <span>{item?.subject}</span>
              <Button onClick={() => setTemplate(item)} transparent>
                Apply
              </Button>
            </div>
          );
        })}
    </div>
  );
};
