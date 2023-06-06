// Tutaj zaimplementuj akcje do aplikacji bankApp

const WITHDRAW = 'WITHDRAW';
const DEPOSIT = 'DEPOSIT';

const withdrawMoney = (payload) => ({
    type: WITHDRAW,
    payload, // payload: payload
});

const depositMoney = (payload) => ({
    type: DEPOSIT,
    payload,
});

export { WITHDRAW, DEPOSIT, withdrawMoney, depositMoney };
