import { ComponentNode } from "../../store/useComponentStore";

const DefaultPanel = ({
  selectedComponent,
  handleInputChange,
}: {
  selectedComponent: ComponentNode | null;
  handleInputChange: (key: string, value: any) => void;
}) => {
  return (
    <div>
      <div>
        {selectedComponent ? (
          <div>
            {Object.entries(selectedComponent.props).map(([key, value]) => (
              <div key={key}>
                <label>
                  {key}:
                  <input
                    type="text"
                    value={
                      value as string | number | readonly string[] | undefined
                    }
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-lg">Select a component to edit its properties</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { DefaultPanel };
