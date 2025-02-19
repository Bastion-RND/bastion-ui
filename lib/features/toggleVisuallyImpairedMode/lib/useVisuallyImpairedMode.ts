import { useVisualImpairedModeContext } from '../../../entities/visuallyImpairedMode';

export const useVisualImpairedMode = () => {
  const context = useVisualImpairedModeContext();

  if (!context) throw new Error('Application must be wrapped in BastUiProvider');

  return context.toggleVisualImpairedMode;
}