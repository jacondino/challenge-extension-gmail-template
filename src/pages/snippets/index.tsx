import { Tooltip, Button, PlusIcon, GearIcon } from '../../components/';
import './style.scss';

export const Snippets = () => {
  const onCreateTemplate = () => {
    let iframe: HTMLIFrameElement = document.getElementById(
      'iframeTemplates'
    ) as HTMLIFrameElement;

    const iframeWindow = iframe.contentWindow;

    if (iframeWindow) {
      iframeWindow.postMessage(
        {
          key: 'createTemplate',
          value: 'create',
        },
        '*'
      );
    }
  };

  const Buttons = () => {
    return (
      <div className="snippets__buttons">
        <Button
          onClick={() => onCreateTemplate()}
          icon={<PlusIcon />}
          transparent
        >
          Make this draft a Snippet
        </Button>
        <Button onClick={() => {}} icon={<GearIcon />} transparent>
          Manage Snippers
        </Button>
      </div>
    );
  };

  const renderSnippets = () => {
    return (
      <iframe
        title="Templates"
        id="iframeTemplates"
        src="http://localhost:3000/templates"
      />
    );
  };

  return (
    <div className="snippets">
      <Tooltip title="Personal Snippers" buttons={<Buttons />}>
        {renderSnippets()}
      </Tooltip>
    </div>
  );
};
