import type { ApiTableRow } from '@/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    name: 'selectors',
    type: 'string[]',
    desc: 'CSS selectors to match elements',
    required: false,
    default: ''
  },
  {
    name: 'refs',
    type: 'tag: React.RefObject<T>[]',
    desc: 'React refs to match elements',
    required: false,
    default: ''
  },
  {
    name: 'enter',
    type: '(target: DOMElement) => void',
    desc: 'callback when element enters viewport',
    required: false,
    default: ''
  },
  {
    name: 'leave',
    type: '(target: DOMElement) => void',
    desc: 'callback when element leaves viewport',
    required: false,
    default: ''
  },
  {
    name: 'options',
    type: 'InViewOptions',
    desc: 'options for the hook',
    required: false,
    default: ''
  }
];

export const options: ApiTableRow[] = [
  {
    name: 'root',
    type: 'tag: Element | Document | null',
    desc: 'the element element that is used as the viewport for checking visibility of the target. default is browser viewport',
    required: false,
    default: 'null'
  },
  {
    name: 'rootMargin',
    type: 'string',
    desc: 'Margin around the root. Can have values similar to the CSS margin',
    required: false,
    default: ''
  },
  {
    name: 'threshold',
    type: 'number | number[]',
    desc: `Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed`,
    required: false,
    default: '0'
  },
  {
    name: 'once',
    type: 'boolean',
    desc: 'If true, the observer will only trigger once after completion of the first visibility check',
    required: false,
    default: 'false'
  }
];
