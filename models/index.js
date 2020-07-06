// 全局model
export default {
    namespace: 'common',
    state: {},
    reducers: {
        save(state, { payload }) {
            return Object.assign({}, state, payload);
        }
    },
    effects: {}
};
