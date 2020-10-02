const reducer = (state, action) => {
  switch (action.type) {
    case actionType.OPENMODAL:
      const newModal = state.modal + 1;
      console.log("newModal", newModal);
      return { ...state, modal: newModal };
  }
};
