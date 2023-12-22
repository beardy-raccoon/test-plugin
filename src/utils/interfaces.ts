export interface DamageSelectorProps {
  options: {
    selector: string;
    initializedOptions: string[];
    onPositionChange: (positions: string[]) => void;
    onComplete: (positions: string[]) => void;
    onInit: () => void;
  };
}
