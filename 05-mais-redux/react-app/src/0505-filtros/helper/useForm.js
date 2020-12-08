export const useForm = (state, setState) => ({
  value: state,
  onChange: ({ target }) => setState(target.value),
});
