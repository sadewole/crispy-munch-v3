
export const ENABLE_REDUX_DEV_TOOLS = () => {
  if (process.env.NODE_ENV === 'production') {
    return false;
  }
  return true;
};