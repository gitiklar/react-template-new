export const UPDATE_JSON_DATA = 'UPDATE_JSON_DATA';
export const UPDATE_SELECTED_ROW = 'UPDATE_SELECTED_ROW';

export const updateJsonData = data => {
    return { type: UPDATE_JSON_DATA , payload: data };
}

export const updateSelectedRow = row => {
    return { type: UPDATE_SELECTED_ROW , payload: row };
}

export const getDaysBetweenDates = (startDate , endDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    const [ startDay , startMonth , startYear ] = startDate.split(/[- : .]/);
    const startDateObj =  new Date(startYear , startMonth , startDay );

    const [ endDay , endMonth , endYear ] = endDate.split(/[- : .]/);
    const endDateObj =  new Date(endYear , endMonth , endDay);

    const diffDays = Math.round(Math.abs((startDateObj - endDateObj) / oneDay));

    return diffDays;
}
/*
export const loadCandiesArrayFromServer = () => {
    return async (dispatch) => {
        try {     
            const response = await getRequest('/candies' , DONT_SEND_X_ACCESS_TOKEN);
            dispatch(indicationMessageHandler(response.type, response.message));
            response.status === 200 && (
                dispatch(updateCandiesArray(response.candies)),
                setTimeout(()=>dispatch(candiesDataIsLoaded()) , 500)
            );
            setTimeout(()=> dispatch(indicationMessageHandler('', '')));
        } catch(err) {
            dispatch(indicationMessageHandler('error','Oops, an error occurred!'));
        }
    }
}
*/