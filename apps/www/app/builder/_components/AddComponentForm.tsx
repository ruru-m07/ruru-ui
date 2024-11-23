import {
  componentRegistry,
  ComponentRegistryType,
} from "../registry/components";
import { useComponentStore } from "../store/useComponentStore";
import { useEffect, useState } from "react";

export function AddComponentForm({ parentId }: { parentId: number }) {
  const { addComponent, tree } = useComponentStore();
  const [componentType, setComponentType] =
    useState<keyof ComponentRegistryType>("Button");

  const handleAdd = () => {
    addComponent(parentId, componentType);
  };

  useEffect(() => {
    console.log("from useefact: tree:----", tree);
  }, [tree]);

  return (
    <div>
      <select
        value={componentType}
        onChange={(e) =>
          setComponentType(e.target.value as keyof ComponentRegistryType)
        }
      >
        {Object.keys(componentRegistry).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={handleAdd}>Add Component</button>
    </div>
  );
}
