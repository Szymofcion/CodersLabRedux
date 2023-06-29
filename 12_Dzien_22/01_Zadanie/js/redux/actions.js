// Akcje

export const COUNT = 'COUNT';
export const PAUSE = 'PAUSE';
export const SAVE = 'SAVE';
export const REMOVE = 'REMOVE';
export const SET = 'SET';

let timer = null;

export const startCounting = () => (dispatch) => {
    timer = setInterval(() => {
        dispatch({
            type: COUNT,
        });
    }, 1000);
}

export const count = () => ({
    type: COUNT,
});

export const pause = () => {
    clearInterval(timer);
    return {
        type: PAUSE,
    }
};

export const save = (payload) => ({
    type: SAVE,
    payload,
});

export const remove = (payload) => ({
    type: REMOVE,
    payload,
});

export const set = (payload) => ({
    type: SET,
    payload,
});
