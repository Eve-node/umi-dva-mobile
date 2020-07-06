export default {
    namespace: 'page_index',
    state: {},
    reducers: {
        save(state, { payload }) {
            return Object.assign({}, state, payload);
        }
    },
    effects: {}
};
