import TerminalEmulator from './TerminalEmulator';

export default function Terminal() {
  return (
    <>
      <div className="flex items-center justify-between border-t-2 border-dark_border text-gray-700">
        <div className="flex items-center justify-between  text-gray-700">
          <div className="flex">
            <div className="hidden ml-2 lg:block">
              {['Problems', 'Output', 'Terminal', 'Ports', 'Debug Console'].map(
                (item) => (
                  <button
                    key={`menu-${item}`}
                    className="px-2 py-1 hover:bg-gray-300 cursor-default"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 pr-4 text-sm text-gray-500">
          <span className="px-2 py-1 bg-gray-200 rounded">node</span>
          <span className="px-2 py-1 bg-gray-200 rounded">+</span>
        </div>
      </div>
      <div>
        <TerminalEmulator />
      </div>
    </>
  );
}
