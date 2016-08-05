export const isInitialState = (state) => !state.request && !state.success;
export const isWaiting = (state) => state.waiting;
export const isSuccess = (state) => state.success && !!state.result;
export const isFailure = (state) => !!state.error;

export function initState() {
  return { waiting: false, success: false };
}

export const handleWaiting = () => (state) => ({
  ...state,
  waiting: true
});

export const handleSuccess = (result) => (state) => ({
  ...state,
  waiting: false,
  success: true,
  error: null,
  result
});

export const handleFail = (error) => (state) => ({
  ...state,
  waiting: false,
  success: false,
  error
});
