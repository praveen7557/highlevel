export const mutations = {
  changeElementToAdd: (state, obj) => {
    state.elementToAdd = obj;
  },
  changeElementToEdit: (state, obj) => {
    state.elementToEdit = obj;
  },
  updateRows: (state, rows) => {
    state.rows = rows;
  },
  updateElement: (state, obj) => {
    let rows = state.rows;
    let rowColObj = obj.elementLocation ? obj.elementLocation : 'elementToAdd';
    delete obj.elementLocation;
    rows = rows.map((e, idx) => {
      if (idx == state[rowColObj].row) {
        e.elements[`${state[rowColObj].col}`] = obj;
        return e;
      } else {
        return e;
      }
    })
    state.rows = rows;
    state[rowColObj] = {};
  }
}