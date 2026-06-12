import './Tabs.css';

/**
 * An accessible tab strip. The parent owns the active value so tabs can drive
 * any content region.
 * @param {object} props
 * @param {Array<{ value: string, label: string }>} props.tabs
 * @param {string} props.active - currently selected tab value
 * @param {(value: string) => void} props.onChange
 */
export default function Tabs({ tabs = [], active, onChange, className = '' }) {
  return (
    <div className={`tabs ${className}`.trim()} role="tablist">
      {tabs.map((tab) => {
        const selected = tab.value === active;
        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={selected}
            className={`tab ${selected ? 'tab-active' : ''}`.trim()}
            onClick={() => onChange?.(tab.value)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
