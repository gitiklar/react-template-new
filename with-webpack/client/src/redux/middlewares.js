
export const middleware1 = ({getState}) => next => action => {
    const nextAction = next(action);
    if(action.type === 'MIDDLEWARE1') return nextAction;

    return nextAction;
};