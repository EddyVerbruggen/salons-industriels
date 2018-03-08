const state = {
  items: [],
};

const mutations = {
  addLead (state, lead) {
    state.items.push(lead);
  },
  removeLead (state, id) {
    let index = state.items.findIndex(lead => lead.id === id);
    state.items.splice(index, 1);
  },
};

const actions = {
  addLead ({commit}, lead) {
    commit('addLead', lead);
  },
  removeLead ({commit}, id) {
    commit('removeLead', id);
  },
};

export default {
  state,
  mutations,
  actions,
};
